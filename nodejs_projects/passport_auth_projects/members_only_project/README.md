# Members Only Project

## Overview

## Requirements (Features):

The app must have:

- The homepage displays all the messages
- Existing users can log in
- New users can sign up and then log in
- Users can post new messages (If they are logged in already - Page only accessible by registered users)
- Users can enter code to get membership status
- Users can become admins through ... ?
- Displayed messages include additional features and options based on user status (i.e. membership options, admin options)


## Plans

### Models In Database:

```
Message:
---------
Fields:
  - Title
  - Text
  - Timestamp
  - Author (i.e. User who wrote the message)

User:
-----
Fields:
  - Username
  - Password 
  - First Name
  - Last Name
  - Membership Status
  - Admin Status
```

### Routes

```
Application:
---------

Homepage ('/')
- GET

Sign Up ('/sign-up')
- GET
- POST

Log In ('/login')
- GET
- POST

Log Out ('/logout')
- GET

Membership ('/membership')
- GET
- POST

Admin ('/admin')
- GET
- POST

Add Message ('/add-message') -> Only accessible for logged in users
- GET (AUTH REQUIRED FOR ACCESS)
- POST (AUTH REQUIRED FOR ACCESS)

```


## Tasks

- [x] Build out rough plan for project
- [x] Build skeleton for project structure:
    - [x] routes
    - [x] models 
    - [x] views
    - [x] controllers 
    
- [x] Build and test basic express app without authentication
- [ ] Build out required Features as MVP 
    - [x] Build Authentication Feature (Need to test. Honestly should not have done this first)
    - [x] Build Login (Need to test. Honestly should have done this after
          building the sign-up feature. That way I can add some test accountsto the
          app to test login and authentication)
    - [x] Build Sign-up
    - [x] Build Add New Message Form
      - [x] Need to deal with error handling (404 errors, 401 errors)
    - [x] Build Build Membership Sign-up
    - [x] Build Build Admin sign-up
    - [x] Build home page with Messages being displayed
    - [ ] Build user access limitations for messages and pages
    - [x] Build user logout
- [ ] 
- [ ] 

---

## Test Data

```
User Accounts:
--------------

username: jamal
password: jamal
firstname: Jamal
lastname: Ahmed




```

---

## Bugs / Issues





---

## Meta Data

Started On: 2022-08-27

### References:

- [Members Only Project - The Odin Project](https://www.theodinproject.com/lessons/nodejs-members-only)
- []()
- []()
- []()
- []()

Reference Projects:
- [Reference Project Submission #1 - Github Repo](https://github.com/atifcppprogrammer/members-only)
- [Reference Project Submission #1 - Live Project](https://members-only-app-odin.herokuapp.com/)
