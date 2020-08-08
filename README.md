# Online Inventory Application
This is a special project that makes use of the [backend server](https://github.com/Ee-Chee/Inventory-App-Backend-Restful-API) from the last inventory-app project to implement NgRx on frontend. Similar to https://github.com/Ee-Chee/Inventory-CRUD-App, it is used to display all the available items from inventory and their corresponding amount. The only difference is that it is implemented at userid = 5. This project is not deployed. 

## Features
1) Not login and registration required and it targets a single user, which has the id of 5.

2) NgRx. A root store and two feature stores, i.e. goods store (entity feature store module) that is used to store all goods in the inventory and quantity array (standard feature store module) store that is used to store quantity of each items/Goods. Actions, reducers, effects, selectors are created to manage the stores (loading, error, data retrieving, data update).

3) Reuse the RESTful-API backend server from the previous inventory-app project. Postgresql database as the dialect of Sequelize library.


**_NOTES_**:
* Coding technologies: Nodejs Express, Sequelize, Postgresql, Angular 8, NgRx, RxJs, HTML, CSS, Javascript, Bootstrap 4, ng-bootstrap, template-driven angular form. 
