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

Membership ('/membership')
- GET
- POST

Add Message ('/add-message') -> Only accessible for logged in users
- GET (AUTH REQUIRED FOR ACCESS)
- POST (AUTH REQUIRED FOR ACCESS)

```


## Tasks

- [x] Build out rough plan for project
- [ ] Build skeleton for project structure:
    - [ ] routes
    - [ ] models 
    - [ ] views
    - [ ] controllers? (Not sure if I need to have separate controllers for this app. Is it big enough to warrant this?)
    
- [ ] Build and test basic express app 
- [ ] 
- [ ] 
- [ ] 

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
