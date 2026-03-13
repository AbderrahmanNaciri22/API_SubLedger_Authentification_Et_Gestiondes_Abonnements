# SubLedger API

Backend API for managing digital subscriptions with authentication, authorization, and role-based access control.

## Overview

SubLedger is a FinTech backend service that allows users to manage their digital subscriptions.  
The system provides secure authentication using JWT and separates access between **users** and **administrators**.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt
- Joi

## Features

### Authentication

Users can register and log in.

**Registration**
- name
- email (unique)
- password (hashed using bcrypt)

**Login**
- email
- password

After successful login, the server returns a **JWT token** used to access protected routes.

### Authorization

Two roles exist:

**User**
- manage personal subscriptions

**Admin**
- access administrative routes
- manage users

Authorization is handled through middleware.

### Authentication Middleware

The middleware:

- verifies the JWT token
- identifies the authenticated user
- blocks requests with missing or invalid tokens

### Admin Authorization Middleware

Additional middleware checks:

- if the authenticated user has **admin privileges**
- blocks non-admin access to admin routes

## Subscription Model

Each subscription contains:

- `name`
- `price`
- `billingCycle` (monthly | yearly)
- `createdAt`
- `userId`

## Subscription Routes

| Method | Endpoint | Middleware | Description |
|------|------|------|------|
| GET | `/subscriptions` | authMiddleware, authAdminVerify | Get all subscriptions (admin) |
| POST | `/subscriptions` | verifySubscriptionInputWithJoi, authMiddleware | Create subscription |
| GET | `/subscriptions/mysubscription` | authMiddleware | Get subscriptions of logged user |
| GET | `/subscriptions/:id` | authMiddleware | Get subscription details |
| PUT | `/subscriptions/:id` | authMiddleware | Update subscription |
| DELETE | `/subscriptions/:id` | authMiddleware | Delete subscription |

## User Routes

| Method | Endpoint | Middleware | Description |
|------|------|------|------|
| POST | `/users` | verifyAdminRoleBeforeAjpute_lessthan_2, verifyUserInputWithJoi | Create user |
| GET | `/users/admin` | authMiddleware, authAdminVerify | Get all users |
| GET | `/users/:id` | authMiddleware, authAdminVerify | Get user by id |
| PUT | `/users/:id` | authMiddleware | Update user |
| DELETE | `/users/:id` | authMiddleware, authAdminVerify | Delete user |

## Authentication Route

| Method | Endpoint | Description |
|------|------|------|
| POST | `/login` | User login |

Returns a **JWT token** if credentials are valid.

## Input Validation

Validation handled with **Joi**.

Examples:

**User**
- valid email
- required password
- name required

**Subscription**
- name required
- price > 0
- billingCycle must be `monthly` or `yearly`

Errors returned as structured JSON responses.

## Project Structure



![Project Screenshot](images/class.png)
![Project Screenshot](images/usecase.png)





Pour install tout depandances principales : 
    npm install express mongoose bcrypt jsonwebtoken dotenv cors morgan
    
Validation.

npm install joi

Sécurité.

npm install helmet express-rate-limit

Dépendances développement.

npm install --save-dev nodemon

