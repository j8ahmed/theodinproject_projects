# Inventory Management Application

> For this project you are going to create an Inventory management app for an imaginary store. It’s up to you what kind of business this is – you could be selling groceries, car parts, baby-toys, musical-instruments, ponies or anything!

I have decided to build an inventory management application for a **grocery store**. I am pressed for time and would like to focus on the core coding concepts more so than my creative vision. There are other ideas I would rather do but I am very comfortable with grocery stores.

## Requirements:

The app must have:

- Categories - All CRUD operations
- Items - All CRUD operations
- When a user goes to the home-page they can choose a category to view, and then get a list of every item in that category (Similar to the Local Library tutorial project)

## Plans

### Models needs in database for Grocery Store:

```
Category:
---------
Fields
  - name
  - description
  - Virtuals
    - url

Item:
-----
Fields:
  - name
  - price
  - category
  - description
  - quantity
  - Virtuals
    - url

```

### Routes

```
Category:
---------

Index
  - Homepage ('/')


Routes
  - create (construct)
    - GET
    - POST
  - read
    - GET all categories
    - Get one category
  - update
    - GET
    - POST
  - delete
    - GET
    - POST


Item:
-----

Routes
  - create (construct) 
    - GET
    - POST
  - read
    - GET all items
    - Get one item
  - update
    - GET
    - POST
  - delete
    - GET
    - POST
```

## Middleware

```

```

---

## Tasks

1. [x] Finish writing basic plans for the app.
2. [x] Construct file/folder structure skeleton for the app.
3. [x] Construct Routes and add to app initializer
4. [x] Construct Controllers skeleton
5. [x] Construct Models
   - [x] Populate the database with dummy data
6. [ ] Construct Views (Skeleton -> render from controller)
   - [x] List entries (items/categories)
   - [x] detail entry (items/categories)
   - [ ] form (items/categories)
7. [ ] Construct each handler in Controllers
   - [ ] Add Model info and view info to each item controller callback function
   - [ ] Add Model info and view info to each category controller callback function


---

## Bugs/Issues



---

## Meta Data

Started On: 2022-07-13

### References:

- [Project Page - The Odin Project](https://www.theodinproject.com/lessons/nodejs-inventory-application)
- [Project Repo - J8ahmed GitHub](https://github.com/j8ahmed/theodinproject_projects/tree/main/nodejs_projects/inventory_application)
- []()
- []()
- []()
- []()
- []()
