# User Registration Endpoint

## POST /users/register

### Description
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body
The request body should be a JSON object with the following properties:
- `fullname`: An object containing:
  - `firstname`: The user's first name (minimum 3 characters, required)
  - `lastname`: The user's last name (minimum 3 characters, optional)
- `email`: The user's email address (must be a valid email, required)
- `password`: The user's password (minimum 5 characters, required)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: `201 Created`
- **Body**: A JSON object containing the authentication token and user details.
  ```json
  {
    "token": "your_jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

Example:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Validation Errors
- **Status Code**: `400 Bad Request`
- **Body**: A JSON object containing the validation errors.
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 5 characters long",
        "param": "password",
        "location": "body"
      },
      {
        "msg": "Firstname must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      }
    ]
  }
  ```

#### Server Errors
- **Status Code**: `500 Internal Server Error`
- **Body**: A JSON object containing the error message.
  ```json
  {
    "error": "Error message"
  }
  ```

# User Login Endpoint

## POST /users/login

### Description
This endpoint is used to log in an existing user. It requires the user's email and password.

### Request Body
The request body should be a JSON object with the following properties:
- `email`: The user's email address (must be a valid email, required)
- `password`: The user's password (minimum 5 characters, required)

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: `200 OK`
- **Body**: A JSON object containing the authentication token and user details.
  ```json
  {
    "token": "your_jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

Example:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Validation Errors
- **Status Code**: `400 Bad Request`
- **Body**: A JSON object containing the validation errors.
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 5 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Server Errors
- **Status Code**: `500 Internal Server Error`
- **Body**: A JSON object containing the error message.
  ```json
  {
    "error": "Error message"
  }
  ```

# User Profile Endpoint

## GET /users/profile

### Description
This endpoint is used to retrieve the profile of the authenticated user. It requires a valid JWT token.

### Headers
- `Authorization`: Bearer token (required)

### Responses

#### Success
- **Status Code**: `200 OK`
- **Body**: A JSON object containing the user details.
  ```json
  {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

Example:
```json
{
  "_id": "60d0fe4f5311236168a109ca",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

#### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Body**: A JSON object containing the error message.
  ```json
  {
    "error": "Unauthorized"
  }
  ```

#### Server Errors
- **Status Code**: `500 Internal Server Error`
- **Body**: A JSON object containing the error message.
  ```json
  {
    "error": "Error message"
  }
  ```

# User Logout Endpoint

## GET /users/logout

### Description
This endpoint is used to log out the authenticated user. It requires a valid JWT token.

### Headers
- `Authorization`: Bearer token (required)

### Responses

#### Success
- **Status Code**: `200 OK`
- **Body**: A JSON object containing a success message.
  ```json
  {
    "message": "User logged out"
  }
  ```

Example:
```json
{
  "message": "User logged out"
}
```

#### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Body**: A JSON object containing the error message.
  ```json
  {
    "error": "Unauthorized"
  }
  ```

#### Server Errors
- **Status Code**: `500 Internal Server Error`
- **Body**: A JSON object containing the error message.
  ```json
  {
    "error": "Error message"
  }
  ```
