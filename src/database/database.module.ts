import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { Client } from 'pg';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const logger = new Logger('DatabaseModule');
        const host = configService.get<string>('DATABASE_HOST');
        const port = configService.get<number>('DATABASE_PORT');
        const username = configService.get<string>('DATABASE_USER');
        const password = configService.get<string>('DATABASE_PASSWORD');
        const database = configService.get<string>('DATABASE_NAME');

        // Create a PostgreSQL client to check or create the database
        const client = new Client({
          host,
          port,
          user: username,
          password,
        });

        try {
          logger.log('Connecting to PostgreSQL server to verify database...');
          await client.connect();

          const res = await client.query(
            `SELECT 1 FROM pg_database WHERE datname = $1`,
            [database],
          );

          if (res.rows.length === 0) {
            logger.log(`Database "${database}" does not exist. Creating...`);
            await client.query(`CREATE DATABASE "${database}"`);
            logger.log(`Database "${database}" created successfully.`);
          } else {
            logger.log(`Database "${database}" already exists.`);
          }
        } catch (error) {
          logger.error('Error during database initialization:', error.message);
          throw error;
        } finally {
          await client.end();
        }

        // Return TypeORM configuration
        return {
          type: 'postgres',
          host,
          port,
          username,
          password,
          database,
          autoLoadEntities: true,
          synchronize: true, // Set to false in production
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
