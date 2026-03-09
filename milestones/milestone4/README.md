## Milestone 4 Design Report Update

Author: AA’Laysha Gibson

Course: CST-391

Milestone 4 – Angular Application Integration

Date: March 2026

## Introduction
Integrating the Angular frontend application with the previously created FaithQuest REST API is the goal of Milestone 4. Earlier milestones describe the development of the backend API using Node.js, Express, TypeScript, and MySQL. This milestone aims to develop a working user interface using Angular, which connects to the FaithQuest API, and enables users to perform CRUD operations via a web application.
The frontend client is the Angular application which accesses the backend API endpoints. Users have the ability to see, create, modify, and remove data through the application interface. To improve application usability and accessibility, Angular routing and a Bootstrap navigation bar were employed.

This milestone shows the culmination of a full-stack web application, with the Angular frontend and the FaithQuest REST API backend.

## Requirements
### Functional Requirements

The FaithQuest application must allow users to manage product data through the Angular user interface. The system must support the following operations:

View a list of products

View product details

Create a new product

Update an existing product

Delete a product

The application must also include navigation using Angular routing and a Bootstrap navigation bar.
### Technical Requirements

The backend must be developed using Node.js, Express, and TypeScript with a MySQL database. The API must follow RESTful design principles and support CRUD operations using the HTTP methods GET, POST, PUT, and DELETE.

The frontend must be built using Angular and communicate with the FaithQuest API using HttpClient services.
### System Requirements

The application must run in a web browser with the Angular application running on localhost:4200 and the FaithQuest API running on localhost:5000.
## sitemap
```plain text
FaithQuest Application
|
├── Home
│
├── Products
│   ├── Product List
│   ├── Product Details
│   ├── Create Product
│   ├── Edit Product
│   └── Delete Product
│
├── About
│
└── Navigation Bar
    ├── Home
    ├── Products
    ├── Create Product
    └── About
```

## wireframes
```Plain text
Home Page Wireframe
--------------------------------------------------
| FaithQuest NavBar                              |
| Home | Products | Create Product | About       |
--------------------------------------------------
|                                                |
|           Welcome to FaithQuest                |
|                                                |
|   Manage product information through the       |
|   Angular frontend connected to the API.       |
|                                                |
|   [ View Products ]                            |
|                                                |
--------------------------------------------------
```
```plain text
PRODUCT List Page Wireframe
--------------------------------------------------
| FaithQuest NavBar                              |
| Home | Products | Create Product | About       |
--------------------------------------------------
|                Product List                    |
--------------------------------------------------
| ID | Name        | Description   | Price | Actions |
|----------------------------------------------------|
| 1  | Bible Study | Study Guide   | 19.99 | View/Edit/Delete |
| 2  | Devotional  | Daily Reading | 12.99 | View/Edit/Delete |
| 3  | Journal     | Prayer Notes  |  9.99 | View/Edit/Delete |
--------------------------------------------------
|                [ Add New Product ]             |
--------------------------------------------------
```
```Plain text
Edit Product Page Wireframe
--------------------------------------------------
| FaithQuest NavBar                              |
| Home | Products | Create Product | About       |
--------------------------------------------------
|                Edit Product                    |
--------------------------------------------------
| Product Name:        [ FAITH QUEST ]           |
| Description:         [ Beginner resource   ]   |
| Price:               [ 19.99              ]    |
| Category:            [ Books              ]    |
|                                                |
|            [ Update Product ] [ Cancel ]       |
--------------------------------------------------
```
```
Product Details Page Wireframe
--------------------------------------------------
| FaithQuest NavBar                              |
| Home | Products | Create Product | About       |
--------------------------------------------------
|              Product Details                   |
--------------------------------------------------
| Product ID:          1                         |
| Product Name:        FAITH Quest               |
| Description:         Beginner study resource   |
| Price:               $19.99                    |
| Category:            Books                     |
|                                                |
|         [ Edit ] [ Delete ] [ Back ]           |
--------------------------------------------------
```
```plain text
Delete Product Page Wireframe
--------------------------------------------------
| FaithQuest NavBar                              |
| Home | Products | Create Product | About       |
--------------------------------------------------
|               Delete Product                   |
--------------------------------------------------
| Are you sure you want to delete this product?  |
|                                                |
| Product Name: Faith quest                      |
|                                                |
|          [ Confirm Delete ] [ Cancel ]         |
--------------------------------------------------
```
## database Design
|Field Name|Data Type|Constraints|Description|
|--|--|--|--|
id|INT|Primary Key, Auto Increment|Unique product ID|
|name|VARCHAR(100)|Not Null|Name of the product|
|description|VARCHAR(255)|Not Null|Description of the product|
|price|DECIMAL(10,2)|Not Null|Product price|
|category|VARCHAR(100)|Nullable|Product category|
 ## class diagrams
 ```plain text
 +--------------------------------------------------+
|                     Product                      |
+--------------------------------------------------+
| - id: number                                     |
| - name: string                                   |
| - description: string                            |
| - price: number                                  |
| - category: string                               |
+--------------------------------------------------+
| + constructor()                                  |
+--------------------------------------------------+


+--------------------------------------------------+
|                 ProductService                   |
+--------------------------------------------------+
| - apiUrl: string                                 |
| - http: HttpClient                               |
+--------------------------------------------------+
| + getProducts(): Observable<Product[]>           |
| + getProductById(id: number): Observable<Product>|
| + createProduct(product: Product): Observable<any>|
| + updateProduct(id: number, product: Product): Observable<any>|
| + deleteProduct(id: number): Observable<any>     |
+--------------------------------------------------+


+--------------------------------------------------+
|              ProductListComponent                |
+--------------------------------------------------+
| - products: Product[]                            |
| - service: ProductService                        |
+--------------------------------------------------+
| + ngOnInit(): void                               |
| + loadProducts(): void                           |
| + viewProduct(id: number): void                  |
| + editProduct(id: number): void                  |
| + deleteProduct(id: number): void                |
+--------------------------------------------------+


+--------------------------------------------------+
|            ProductDetailComponent                |
+--------------------------------------------------+
| - product: Product                               |
| - service: ProductService                        |
+--------------------------------------------------+
| + ngOnInit(): void                               |
| + loadProduct(id: number): void                  |
+--------------------------------------------------+


+--------------------------------------------------+
|            CreateProductComponent                |
+--------------------------------------------------+
| - product: Product                               |
| - service: ProductService                        |
+--------------------------------------------------+
| + saveProduct(): void                            |
+--------------------------------------------------+


+--------------------------------------------------+
|             EditProductComponent                 |
+--------------------------------------------------+
| - product: Product                               |
| - service: ProductService                        |
+--------------------------------------------------+
| + loadProduct(id: number): void                  |
| + updateProduct(): void                          |
+--------------------------------------------------+


+--------------------------------------------------+
|            DeleteProductComponent                |
+--------------------------------------------------+
| - product: Product                               |
| - service: ProductService                        |
+--------------------------------------------------+
| + loadProduct(id: number): void                  |
| + confirmDelete(): void                          |
+--------------------------------------------------+


+--------------------------------------------------+
|               ProductController                  |
+--------------------------------------------------+
| + getAllProducts(req, res): void                 |
| + getProductById(req, res): void                 |
| + createProduct(req, res): void                  |
| + updateProduct(req, res): void                  |
| + deleteProduct(req, res): void                  |
+--------------------------------------------------+


+--------------------------------------------------+
|                ProductRepository                 |
+--------------------------------------------------+
| + findAll(): Product[]                           |
| + findById(id: number): Product                  |
| + create(product: Product): Product              |
| + update(id: number, product: Product): Product  |
| + delete(id: number): boolean                    |
+--------------------------------------------------+
 ```
 ## Rest Endpoints
 |HTTP Method|Endpoint|Purpose|
|--|--|--|
|GET|/products|Retrieve all products|
|GET|/products/:id|Retrieve one product by ID|
|POST|/products|Create a new product|
|PUT|/products/:id|Update an existing product by ID|
|DELETE|/products/:id|Delete a product by ID|
 ## api Example api requests
  EXAMPLE REQUEST
```HTTP
GET /products

GET /products/1

POST /products
Content-Type: application/json
```

```JSON
{
  "name": "Faith Quest"
  "description": "A guide for beginner Bible study",
  "price": 19.99,
  "category": "Books"
}
```
Product update 
```http
PUT /products/1
Content-Type: application/json
```
```json
{
  "name": "Bible Study Guide",
  "description": "An updated guide for beginner Bible study",
  "price": 21.99,
  "category": "Books"
}
```
```http
DELETE /products/1
```
example response 
```json
{
  "id": 1,
  "name": "Bible Study Guide",
  "description": "A guide for beginner Bible study",
  "price": 19.99,
  "category": "Books"
}
```
 ## conclusion
 In Milestone 4, we aimed to merge the frontend application made in Angular with the backend FaithQuest API to provide the users with a fully functional website. To make this possible, the Angular application communicates with a REST API, which provides various user-database product interactions, such as creating, reading, updating, and deleting. Various Angular components, services, and routing were used so that the application developed a user-friendly interface to manage products.This milestone showed the integration of a frontend framework and a backend API to complete a full-stack web application. Also, the Bootstrap toolbar and the REST API endpoints allowed the frontend to communicate with the database and improved the application organization and usability.
Still, a few minor improvements could be made.

