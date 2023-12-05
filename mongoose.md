# MongoDB

MongoDB is a document-oriented NoSQL database designed for high-volume data storage. Unlike traditional relational databases that use tables and rows, MongoDB uses collections and documents. Documents consist of key-value pairs and are the basic unit of data in MongoDB. Collections contain sets of documents and function similarly to tables in relational databases. MongoDB gained prominence in the mid-2000s.

## MongoDB Features

- **Document-oriented:** MongoDB stores data in documents, and each database contains collections of documents. Each document can have a varying number of fields, and the size and content of each document can differ.
- **Flexible Schema:** MongoDB doesn't require a predefined schema. Documents within a collection can have different structures, and fields can be added dynamically.
- **Object-like Structure:** The document structure aligns with how developers construct classes and objects in programming languages.
- **Scalability:** MongoDB environments are highly scalable, with companies running clusters of 100+ nodes and millions of documents.

## Why Use MongoDB?

1. **Document-oriented:** MongoDB's document-oriented approach makes it flexible and adaptable to real-world business scenarios.

2. **Ad hoc queries:** MongoDB supports searching by field, range queries, and regular expressions, allowing for versatile data retrieval.

3. **Indexing:** Indexes can be created on any field in a MongoDB document to improve query performance.

4. **Replication:** MongoDB provides high availability with replica sets, ensuring data redundancy and fault tolerance.

5. **Load balancing:** MongoDB uses sharding to horizontally scale, distributing data across multiple instances to balance the load.

# Object-Relational Mapping (ORM)

Object-Relational Mapping (ORM) is a programming technique that bridges the gap between object-oriented programming languages and relational databases. It facilitates seamless communication between an application's code and a database, especially when the application's data model is represented as objects and the database uses a relational model.

## Key Concepts of ORM:

1. **Object-Relational Mapping:** ORM maps objects from the application's code to rows in a relational database, enabling developers to work with database entities using familiar programming language constructs.

2. **Entities and Relationships:** ORM allows developers to define entities (objects) and relationships between them, abstracting away the underlying database structure.

3. **CRUD Operations:** ORM frameworks provide methods for Create, Read, Update, and Delete operations on database entities, eliminating the need for raw SQL queries.

4. **Query Language:** ORM frameworks offer a query language that allows developers to express database queries using a syntax similar to their programming language.

## Need for ORM:

1. **Simplified Database Interaction:** ORM simplifies database interactions, allowing developers to use their programming language's syntax instead of writing raw SQL queries.

2. **Object-Oriented Approach:** ORM aligns with the object-oriented nature of modern programming languages, integrating application code with the database.

3. **Reduced Development Time:** ORM frameworks handle repetitive database interaction code, speeding up development by focusing on application logic.

4. **Database Independence:** ORM provides a level of abstraction, allowing easy switching between different database systems without major code changes.

5. **Consistency and Maintainability:** ORM frameworks enforce coding standards, leading to consistent and maintainable code.

6. **Object-Relational Impedance Mismatch:** ORM bridges the gap between the object-oriented nature of code and the relational nature of databases.

# Mongoose

Mongoose is an Object-Document Mapping (ODM) library for MongoDB and Node.js. It provides a structured way to interact with MongoDB, offering features such as schema definition, middleware functions, query building, and connection pooling.

## Mongoose Features and Needs:

1. **Schema Definition:** Mongoose allows developers to define schemas, specifying the structure, data types, and validation rules for MongoDB documents.

2. **Middleware Functions:** Middleware functions in Mongoose enable custom logic execution before or after events such as validation, saving, or removing documents.

3. **Query Building:** Mongoose provides a fluent query builder, simplifying the construction of complex queries using a JavaScript syntax.

4. **Population:** Mongoose's population feature simplifies working with references in MongoDB, automatically fetching and replacing referenced documents.

5. **Validation:** Mongoose allows developers to define validation rules within the schema, ensuring data integrity.

6. **Connection Pooling:** Mongoose manages a connection pool to MongoDB, improving performance by reusing existing connections and managing resources efficiently.

7. **Middleware Hooks:** Mongoose supports middleware hooks for common operations like document validation, save, and remove, providing greater control and extensibility.

8. **Indexing:** Mongoose allows developers to define indexes on fields, optimizing query performance.

9. **Population and References:** Mongoose simplifies handling references between documents through its population feature.

# Diffrences in RDBMS and NOSQL:

1. **RDBMS:**
   - **Model:** Tabular structure with rows and columns.
   - **Schema:** Strict, predefined schema with a fixed structure.
   - **Example:** MySQL, PostgreSQL, Oracle.

2. **NoSQL:**
   - **Model:** Diverse data models, including document, key-value, column-family, and graph.
   - **Schema:** Dynamic and flexible, allowing for schema-less or schema-on-read approaches.
   - **Example:** MongoDB (Document), Redis (Key-Value), Cassandra (Column-family), Neo4j (Graph).

### Scalability:

3. **RDBMS:**
   - **Scaling:** Typically vertically scalable (adding more resources to a single server).
   - **Limitations:** Scaling can become challenging as the volume of data increases.

4. **NoSQL:**
   - **Scaling:** Horizontally scalable (adding more servers to a distributed system).
   - **Advantage:** NoSQL databases are well-suited for handling large amounts of data and traffic.

### Schema:

5. **RDBMS:**
   - **Schema Changes:** Any changes to the schema require altering the table structure.
   - **Normalization:** Emphasizes normalization to minimize redundancy.

6. **NoSQL:**
   - **Schema Changes:** Dynamic schema allows for easy modifications without downtime.
   - **Denormalization:** Allows for denormalized data structures, reducing the need for joins.

### Query Language:

7. **RDBMS:**
   - **Query Language:** SQL (Structured Query Language) for querying and manipulating data.
   - **Transactions:** ACID (Atomicity, Consistency, Isolation, Durability) transactions are common.

8. **NoSQL:**
   - **Query Language:** Various query languages, often specific to the type of NoSQL database.
   - **Transactions:** ACID properties may be relaxed in favor of eventual consistency.

### Use Cases:

9. **RDBMS:**
   - **Use Cases:** Well-suited for applications with complex relationships and transactions.
   - **Examples:** Banking systems, traditional business applications.

10. **NoSQL:**
    - **Use Cases:** Ideal for applications with large amounts of unstructured or semi-structured data, high write throughput, and scalability requirements.
    - **Examples:** Content management systems, real-time big data applications.

### Relationships:

11. **RDBMS:**
    - **Relationships:** Relational databases use tables and foreign keys to represent and manage relationships between entities.

12. **NoSQL:**
    - **Relationships:** NoSQL databases may use embedding, referencing, or other mechanisms to represent relationships between documents or entities.

### Consistency:

13. **RDBMS:**
    - **Consistency:** Emphasizes strong consistency to ensure data integrity across transactions.

14. **NoSQL:**
    - **Consistency:** Depending on the NoSQL database, there may be a trade-off between consistency and availability (CAP theorem).

### Examples:

15. **RDBMS:**
    - **Examples:** MySQL, PostgreSQL, Oracle, Microsoft SQL Server.

16. **NoSQL:**
    - **Examples:** MongoDB, Redis, Cassandra, Neo4j.

