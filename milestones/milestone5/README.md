## Milestone 5

AA'Laysha Gibson


03-29-2026


## Introduction
FaithQuest is a devotional web application designed to help users create, view, update, and delete devotional entries in a simple and organized way. The purpose of the application is to provide a faith-based platform where users can manage devotionals that include a title, scripture, author, and message. The application uses a front-end web interface with navigation and forms, along with a back-end REST API connected to a database. This milestone focuses on the completed user interface and integration of full CRUD functionality. Users are able to move through the application using a Bootstrap navigation bar and perform all required operations on devotionals. The design of the application was updated as needed so that the report matches the software that was delivered.
 
 ## Requirements
 The application must allow users to perform full CRUD operations on a devotional entry. This means the user must be able to list all devotionals, create a new devotional, read the details of a devotional, update an existing devotional, and delete a devotional. The application must also include navigation between pages and use a Bootstrap NavBar for a professional and user-friendly layout. The front end must communicate with the REST API so data can be stored and retrieved from the database. The final application should reflect the design described in this report, and any differences should be noted as known issues or future improvements.

 ## sitemap
 ```
                 [ Home ]
                   |
        -------------------------
        |                       |
 [ Devotional List ]     [ Create Devotional ]
        |
   -------------
   |     |     |
[View] [Edit] [Delete]
```
## wireframe
```
------------------------------------------------------
| NAVBAR                                             |
| FaithQuest | Home | Devotionals | Create           |
------------------------------------------------------

|                Devotional List                     |
------------------------------------------------------
| ID | Title   | Scripture   | Author   | Actions    |
------------------------------------------------------
| 1  | Hope    | Jer 29:11   | Aalay    | [V][E][D]  |
| 2  | Faith   | Heb 11:1    | Aalay    | [V][E][D]  |
------------------------------------------------------

|                 [ Create Devotional ]              |
------------------------------------------------------

```
## Database design
```
+----------------------+
|     Devotionals      |
+----------------------+
| id (PK)              |
| title                |
| scripture            |
| author               |
| message              |
+----------------------+
```
## class diagram
```
+----------------------+
| DevotionalComponent  |
+----------------------+
| display list         |
| display details      |
+----------------------+

+----------------------+
| CreateComponent      |
+----------------------+
| create devotional    |
+----------------------+

+----------------------+
| EditComponent        |
+----------------------+
| update devotional    |
+----------------------+

+----------------------+
| DeleteComponent      |
+----------------------+
| delete devotional    |
+----------------------+

+----------------------+
| FaithQuestService    |
+----------------------+
| getAll()             |
| getById()            |
| create()             |
| update()             |
| delete()             |
+----------------------+

           ↓

+----------------------+
| API Controller       |
+----------------------+
| routes               |
| logic                |
+----------------------+

           ↓

+----------------------+
| Database             |
+----------------------+
| devotionals table    |
+----------------------+
```
## Rest endpoints
|Method|Endpoint|Description|
|---|---|---|
| GET    | /entries       | Retrieve a list of all devotionals |
| GET    | /entries/:id   | Retrieve one devotional by ID      |
| POST   | /entries       | Create a new devotional            |
| PUT    | /entries/:id   | Update an existing devotional      |
| DELETE | /entries/:id   | Delete a devotional                |


## API Example API Request
```
GET /entries
GET /entries/1
```
```
{
  "title": "Hope",
  "scripture": "Jeremiah 29:11",
  "author": "Aalaysha Gibson",
  "message": "This devotional reminds us that God has plans to give us hope and a future."
}


{
  "title": "Hope in God",
  "scripture": "Jeremiah 29:11",
  "author": "Aalaysha Gibson",
  "message": "This updated devotional reminds users to trust God’s plan during difficult times."
}
```
## Conclusion
In conclusion, the FaithQuest application successfully meets the requirements of this milestone by implementing a working web application with full CRUD functionality. Users can navigate the application through a Bootstrap NavBar and manage devotional entries through the interface. The project demonstrates the use of front-end components, REST API integration, and database interaction. While some improvements can still be made in areas such as validation and visual design, the current version provides a strong foundation for future development and enhancement.