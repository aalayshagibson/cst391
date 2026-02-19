# Milestone 1 

- AA'Laysha Gibson 
- 02-17-2026



- This is milestone 1 ...

## introduction 

Faith Quest is a fun and interactive web application designed to help kids and teens store, organize, and manage their daily devotionals and favorite Bible verses in one place. The app allows users to easily add, view, edit, and delete their entries while tracking their spiritual growth. It will use a REST API built with Express.js and Node.js, connected to a MySQL database. Two front-end versions will be created using Angular and React. Both 
versions will use the same back-end system and provide the same features, allowing me to compare the frameworks while giving users a simple and positive experience. 


## Functionality Requirements  
- As a user, I want to create an account so I can save my devotionals securely. 
- As a user, I want to add a new devotional or Bible verse so I can record my thoughts 
and reflections. 
- As a user, I want to view a list of all my devotionals so I can easily browse my 
entries. 
- As a user, I want to open a devotional to read the full details. 
- As a user, I want to edit a devotional so I can update or improve my notes. 
- As a user, I want to delete a devotional so I can remove entries I no longer need. 
- As a user, I want to mark devotionals as favorites so I can quickly find the ones that 
mean the most to me. 
- As a user, I want to search or filter devotionals by title or date so I can find specific 
entries faster. 
- As a user, I want the app to be simple and fun to use so I feel encouraged to use it 
daily. 
- As a developer, I want both the Angular and React front ends to connect to the 
same API built with Express.js, so both versions share the same functionality. 


## UI Sitemap  
```
Home / Devotional List
        |
        +-------------------+
        |                   |
   Add Devotional      View Devotional
                            |
                     +------+------+
                     |             |
                  Edit          Delete
                            
Favorites Page
Search Results Page

 ```

## UI Wireframe Low fidelty 
```
+------------------------------------------------+
| FaithConnect Devotional Manager                |
+------------------------------------------------+
| [ Search __________ ]   [ Add Devotional ]     |
+------------------------------------------------+
| Title      | Date     | Favorite | Actions     |
|------------|----------|----------|-------------|
| Dev 1      | 1/10/26  |   ★      | Edit Delete |
| Dev 2      | 1/11/26  |          | Edit Delete |
+------------------------------------------------+

+------------------------------------+
| Add / Edit Devotional              |
+------------------------------------+
| Title:        [_______________]    |
| Scripture:    [_______________]    |
| Notes:        [_______________]    |
| Date:         [__ / __ / ____]     |
| Favorite:     [ ]                  |
|                                    |
|        [ Save ]   [ Cancel ]       |
+------------------------------------+

+------------------------------------+
| Devotional Details                 |
+------------------------------------+
| Title: Daily Strength              |
| Scripture: Philippians 4:13        |
| Notes: Reflection text here...     |
| Date: 01/10/2026                   |
| Favorite: Yes                      |
|                                    |
|   [ Edit ]   [ Delete ]   [ Back ] |
+------------------------------------+
```
##  Risk /Unknowns  
- Learning how to use both Angular and React may take extra time since they work 
differently.
- The front-end apps might have trouble connecting correctly to the REST API built 
with Express.js. 
- There could be issues setting up or connecting to the MySQL database. 
- Managing time may be challenging because the project uses several technologies 
at once. 
- Adding too many extra features could slow progress and make the project harder to 
finish on time. 
- Differences between front-end and back-end validation could cause small bugs or 
data errors.

## conclusion
This project proposal presents the design and planning of Faith Quest, a web application that assists children and teenagers in storing, organizing, reflecting on their overall daily devotionals, and managing their collection of Bible verses. The proposal details the application’s initial database design, a UI sitemap, and wireframes and UML models that illustrate the application’s defined scope. The planned REST API, along with providing CRUD (create, read, update, delete) functionality for devotionals, will be able to manage devotionals in a consistent and reliable manner. The development of two front ends using Angular and React will demonstrate functionality in a distinct manner while providing the same front end components. Overall, this proposal aims to provide a solid foundation for an application that is user-friendly, entertaining, and uplifting to one’s spirit.


