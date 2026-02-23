## Milestone 2 
AA'Laysha Gibson

02-21-2026
## Introduction 
Faith Quest is a fun and interactive web application designed for kids and teens ages 10–18 
to store, organize, and manage daily devotionals and Bible verses. Users can create, view, 
update, and delete their entries while tracking their spiritual growth. The back end will be 
built using Express.js and Node.js, connected to a MySQL database. Two separate front
end applications will be developed using Angular and React, both sharing the same API 
and features. 
## Functionality Requirements  
• As a user, I want to add a devotional so I can save my thoughts and prayers. 
• As a user, I want to view all devotionals so I can browse my entries. 
• As a user, I want to edit a devotional so I can update information. 
• As a user, I want to delete a devotional so I can remove old entries. 
• As a user, I want to mark favorites so I can quickly find important devotionals. 
• As a user, I want the app to be simple and fun so I will use it daily. 

## UI Sitemap  
```
FaithQuest UI
|
+-- /  (Home: Devotionals List)
|    |
|    +-- /devotionals/new        (Create Devotional)
|    |
|    +-- /devotionals/:id        (Devotional Details)
|          |
|          +-- /devotionals/:id/edit   (Edit Devotional)
|
+-- /favorites (optional - could be a filter instead)
```
## Wireframe 
```
 +--------------------------------------------------+
| FaithQuest                                       |
+--------------------------------------------------+
| Search: [________________________] (Search)      |
| Filter: ( All )  ( Favorites )                   |
+--------------------------------------------------+
| [Card] Title: Daily Strength        [★] [View]   |
|       Scripture: Philippians 4:13                |
|       Preview: God gives me strength...          |
+--------------------------------------------------+
| [Card] Title: Peace in Storms       [☆] [View]   |
|       Scripture: John 14:27                      |
|       Preview: Trust God in uncertainty...       |
+--------------------------------------------------+
|                 ( + New Devotional )             |
+--------------------------------------------------+
```
## Databases design 
```
+-------------------------------+
|           devotional          |
+-------------------------------+
| PK  id : INT (auto increment) |
|     title : VARCHAR(150)      |
|     scripture : VARCHAR(80)   |
|     notes : TEXT              |
|     dateCreated : DATETIME    |
|     isFavorite : BOOLEAN      |
+-------------------------------+
```
## Class Diagrams
```+---------------------------+
|        Devotional         |
+---------------------------+
| - id: number              |
| - title: string           |
| - scripture: string       |
| - notes: string           |
| - dateCreated: Date       |
| - isFavorite: boolean     |
+---------------------------+

           uses
Controller  --->  Service  --->  Repository/DB

+------------------------------+       +------------------------------+       +------------------------------+
|     DevotionalController     |       |       DevotionalService      |       |     DevotionalRepository     |
+------------------------------+       +------------------------------+       +------------------------------+
| + getAll()                   |       | + getAll()                   |       | + findAll()                  |
| + getById(id)                |       | + getById(id)                |       | + findById(id)               |
| + create(data)               |       | + create(data)               |       | + insert(data)               |
| + update(id, data)           |       | + update(id, data)           |       | + update(id, data)           |
| + delete(id)                 |       | + delete(id)                 |       | + delete(id)                 |
+------------------------------+       +------------------------------+       +------------------------------+

```

## Rest Endpoints


|METHOD|URL|WHAT IT DOES|
|--|--|--|
|GET|/api/devotionals |Get all devotionals|
|GET|/api/devotionals/5 |Get one devotional|
|POST|/api/devotionals |Create new devotional|
|PUT|/api/devotionals/5 |Update devotional |
|DELETE|/api/devotionals/5 |Delete devotional|
 ## API Example API Requests
 - HTTP Method: POST
 ```
 http://localhost:3000/devotionals
 ```
 - Request Body
 ```JS
 {
  "title": "Daily Strength",
  "scripture": "Philippians 4:13",
  "notes": "God gives me strength.",
  "isFavorite": true
}
 ```
 - Successful Response
 ```JS
 {
  "id": 1,
  "title": "Daily Strength",
  "scripture": "Philippians 4:13",
  "notes": "God gives me strength.",
  "dateCreated": "2026-02-22T17:00:00.000Z",
  "isFavorite": true
}
 ```
 ## Conclusion
Milestone 2 allows for development on the original project proposal by incorporating the interdisciplinary team’s feedback on the system design. With the FaithQuest REST API, designers have most clearly defined the structured organization of endpoints aligned to REST standard practices. Updated wireframes, sitemaps, database design, and class diagrams illustrate interface and architectural end design development and are a sign of success along the journey to development.


