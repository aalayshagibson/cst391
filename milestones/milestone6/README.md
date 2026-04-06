## Milestone 6 – Faith Quest Application

Author: Aalaysha Gibson
Date: 04/05/26


## Introduction

Faith Quest is a full stack web application designed for kids and teens ages 10–18 to help them grow in their faith through daily devotionals. The application allows users to create, read, update, and delete devotionals in a simple and user-friendly interface. The frontend was built using Angular and Bootstrap to provide a clean and responsive design. The backend was developed using Node.js, Express, and TypeScript, with a MySQL database storing all devotional data.

## Requirements
Allow users to create devotionals
Allow users to view all devotionals
Allow users to view a single devotional
Allow users to update devotionals
Allow users to delete devotionals
Provide a responsive and user-friendly interface
Use REST API principles
Connect to a MySQL database
Handle errors properly

## Sitemap
```
Home (/)
 ├── List Devotionals
 ├── Create Devotional (/create)
 ├── View Devotional (/display/:id)
 ├── Edit Devotional (/edit/:id)
 └── Delete Devotional (/delete/:id)
```

## Wireframe
```
---------------------------------
| Navbar (Home | Create | GCU)  |
---------------------------------
|         Faith Quest           |
|   List of Devotionals         |
|  --------------------------   |
|  | Title | Date | Actions |   |
|  --------------------------   |
|   [View] [Edit] [Delete]      |
---------------------------------
```

## Database Design
```
Devotionals Table
-------------------------
| id (INT, PK)          |
| title (VARCHAR)       |
| scripture (VARCHAR)   |
| message (TEXT)        |
| created_at (DATE)     |
-------------------------
```
## Class Diagrams
```
Devotional
-------------------------
id: number
title: string
scripture: string
message: string
created_at: date
-------------------------

DevotionalService
-------------------------
getAll()
getById(id)
create(devotional)
update(id, devotional)
delete(id)
-------------------------
```
## REST Endpoints

| Method | Endpoint        | Description              |
|--------|---------------|--------------------------|
| GET    | /entries       | Get all devotionals      |
| GET    | /entries/:id   | Get one devotional       |
| POST   | /entries       | Create a devotional      |
| PUT    | /entries/:id   | Update a devotional      |
| DELETE | /entries/:id   | Delete a devotional      |

## API example
```
[
  {
    "id": 1,
    "title": "Hope",
    "scripture": "Jeremiah 29:11",
    "message": "God has a plan for your life full of hope and purpose.",
    "created_at": "2026-03-01"
  },
  {
    "id": 2,
    "title": "Faith",
    "scripture": "Hebrews 11:1",
    "message": "Faith is trusting God even when you cannot see the outcome.",
    "created_at": "2026-03-02"
  }
]
```
## Conclusion
In conclusion, the Faith Quest application shows that I can build a full stack web app from start to finish. It includes a frontend, backend, and database all working together. During this project, I learned how to connect everything, fix errors, and follow REST API design. I also improved my problem-solving and coding skills.This project helped me feel more confident in my abilities and better prepared for real-world web development.
