## Milestone 3


AA'Laysha Gibson

02-22-2026

## Introduction

Faith Quest is a RESTful web service that specializes in managing hope scripture entries. The application is designed to let users make devotional entries that consist of a scripture citation, message, date created, and whether it’s marked as a favorite. Users can also read, update and delete those entries. The API uses Express and Node.js with TypeScript, and it interacts with a MySQL relational database. It adheres to REST architecture style, and it has full CRUD capabilities.



## Requirements

- Be developed using Express and Node.js

- Be written in TypeScript

- Connect to a relational MySQL database

- Use environment variables for configuration

- Support full CRUD operations:

### Create

- Read (all and by ID)

- Update

- Delete

- Return proper HTTP status codes (200, 201, 404, 500)

- Be tested using Postman



## Sitemap
```js
/api/hope
    GET        -> Retrieve all hope entries
    POST       -> Create a new hope entry

/api/hope/{id}
    GET        -> Retrieve a specific entry
    PUT        -> Update a specific entry
    DELETE     -> Delete a specific entry
```





## Wireframes

```
┌─────────────────────────────────────────────────────┐
│                    Faith Quest API                  │
├─────────────────────────────────────────────────────┤
│ Method: POST                                       │
│ URL: http://localhost:3000/api/hope                │
├─────────────────────────────────────────────────────┤
│ Body (raw JSON):                                   │
│                                                     │
│ {                                                   │
│   "title": "Daily Strength",                       │
│   "scripture": "Philippians 4:13",                 │
│   "message": "God gives me strength.",             │
│   "dateCreated": "2026-02-22",                     │
│   "isFavorite": true                               │
│ }                                                   │
│                                                     │
├─────────────────────────────────────────────────────┤
│ Response: 201 Created                              │
│                                                     │
│ {                                                   │
│   "id": 16,                                        │
│   "title": "Daily Strength",                       │
│   ...                                              │
│ }                                                   │
└─────────────────────────────────────────────────────┘
```


## Database Design

```
┌──────────────────────────────┐
│        hope_entries          │
├──────────────────────────────┤
│ id (PK)          INT         │
│ title            VARCHAR(100)│
│ scripture        VARCHAR(100)│
│ message          TEXT        │
│ dateCreated      DATE        │
│ isFavorite       BOOLEAN     │
└──────────────────────────────┘
```

## Class Diagrams

```
┌──────────────────────┐
│     HopeEntry        │
├──────────────────────┤
│ id?: number          │
│ title: string        │
│ scripture: string    │
│ message: string      │
│ dateCreated: string  │
│ isFavorite: boolean  │
└──────────────────────┘


┌──────────────────────┐
│     hopeRoutes       │
├──────────────────────┤
│ POST /               │
│ GET /                │
│ GET /:id             │
│ PUT /:id             │
│ DELETE /:id          │
└───────────┬──────────┘
            │
            ▼
┌──────────────────────┐
│   hopeController     │
├──────────────────────┤
│ create()             │
│ getAll()             │
│ getOne()             │
│ update()             │
│ remove()             │
└───────────┬──────────┘
            │
            ▼
┌──────────────────────┐
│    hopeService       │
├──────────────────────┤
│ createHope()         │
│ getAllHope()         │
│ getHopeById()        │
│ updateHope()         │
│ deleteHope()         │
└───────────┬──────────┘
            │
            ▼
┌──────────────────────┐
│      MySQL DB        │
└──────────────────────┘
```


## REST Endpoints


|Method|Endpoint|Description|
|--|--|--|
|GET|/api/hope  |Retrieve all hope entries|
|GET|/api/hope/{id}|Retrieve one entry by ID|
|POST|/api/hope  |Create a new entry|
|PUT|/api/hope/{id}|Update an existing entry|
|DELETE|/api/hope/{id} |Delete an entry|



## API Example API Requests

### create 
- endpoint
```
POST /api/hope
```
- Full URL
```
http://localhost:3000/api/hope
```
- Request Body
 ```js
  {
  "title": "Daily Strength",
  "scripture": "Philippians 4:13",
  "message": "God gives me strength.",
  "dateCreated": "2026-02-22",
  "isFavorite": true
}
  ```
  Response 201
  ```js
  {
  "id": 16,
  "title": "Daily Strength",
  "scripture": "Philippians 4:13",
  "message": "God gives me strength.",
  "dateCreated": "2026-02-22",
  "isFavorite": true
}
  ```
## Conclusion

In this milestone, the Faith Quest REST API was successfully developed using Express, TypeScript, and a MySQL relational database. The application supports full CRUD functionality and follows RESTful design principles. Environment variables were implemented to securely manage database configuration settings, and Postman was used to test each endpoint. The API returns appropriate HTTP status codes and demonstrates proper separation of concerns through a layered architecture consisting of routes, controllers, services, and database modules. Overall, the system meets all project requirements and provides a scalable foundation for future enhancements.
