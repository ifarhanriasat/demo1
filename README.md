
# Shop Product APIs - Senior Node
Overview
This is a NestJS-based API for managing shops, products, and their relationships. The project allows you to create, read, and manage products, shops, and their associations (e.g., store products in shops). It uses PostgreSQL as the database and TypeORM for ORM management. The application includes structured error handling for internal server errors and offers a clean RESTful API.

## Technologies Used
- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **PostgreSQL**: A powerful, open-source relational database system for data storage.
- **TypeORM**: An Object-Relational Mapper (ORM) for TypeScript and JavaScript that works with PostgreSQL.
- **Jest**: A testing framework for running unit and integration tests.
- **pg**: PostgreSQL client for Node.js used for database interaction.
- **ConfigModule**: Manages environment variables for database and application configurations.
- **Logger**: For logging errors and other messages in a structured way.


## Getting Started
**Prerequisites**

Before starting, ensure you have the following installed:

- **Node.js (>= 16)**: Download Node.js
- **PostgreSQL (>= 12)**: Download PostgreSQL


## Installation

```bash

git clone https://github.com/ifarhanriasat/shop-and-items.git
cd shop-and-items
create .env file

update following in .env file:

DATABASE_HOST=
DATABASE_PORT=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_NAME=
RPC_URL=
PRIVATE_KEY=

npm install 
npm run start:dev

```

## Testing

Please download this [Postman](https://drive.google.com/file/d/1dqNov-zjH01-j9Vv1ctjXvE8Wn0sc6MP/view?usp=sharing) collection and import to test the APIs.