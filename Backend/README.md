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

# Captain Registration Endpoint

## POST /captains/register

### Description
This endpoint is used to register a new captain. It requires the captain's first name, last name, email, password, and vehicle details.

### Request Body
The request body should be a JSON object with the following properties:
- `fullname`: An object containing:
  - `firstname`: The captain's first name (minimum 3 characters, required)
  - `lastname`: The captain's last name (minimum 3 characters, optional)
- `email`: The captain's email address (must be a valid email, required)
- `password`: The captain's password (minimum 5 characters, required)
- `vehicle`: An object containing:
  - `color`: The vehicle's color (minimum 3 characters, required)
  - `plateNumber`: The vehicle's plate number (minimum 3 characters, required)
  - `capacity`: The vehicle's capacity (must be a number, required)
  - `vehicleType`: The vehicle's type (must be one of 'car', 'motorcycle', 'auto', required)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plateNumber": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Responses

#### Success
- **Status Code**: `201 Created`
- **Body**: A JSON object containing the authentication token and captain details.
  ```json
  {
    "token": "your_jwt_token",
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plateNumber": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

Example:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "captain": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plateNumber": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
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

# Captain Login Endpoint

## POST /captains/login

### Description
This endpoint is used to log in an existing captain. It requires the captain's email and password.

### Request Body
The request body should be a JSON object with the following properties:
- `email`: The captain's email address (must be a valid email, required)
- `password`: The captain's password (minimum 5 characters, required)

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
- **Body**: A JSON object containing the authentication token and captain details.
  ```json
  {
    "token": "your_jwt_token",
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plateNumber": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

Example:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "captain": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plateNumber": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
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

# Captain Profile Endpoint

## GET /captains/profile

### Description
This endpoint is used to retrieve the profile of the authenticated captain. It requires a valid JWT token.

### Headers
- `Authorization`: Bearer token (required)

### Responses

#### Success
- **Status Code**: `200 OK`
- **Body**: A JSON object containing the captain details.
  ```json
  {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plateNumber": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
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
  "email": "john.doe@example.com",
  "vehicle": {
    "color": "Red",
    "plateNumber": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
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

# Captain Logout Endpoint

## GET /captains/logout

### Description
This endpoint is used to log out the authenticated captain. It requires a valid JWT token.

### Headers
- `Authorization`: Bearer token (required)

### Responses

#### Success
- **Status Code**: `200 OK`
- **Body**: A JSON object containing a success message.
  ```json
  {
    "message": "logout Successfully✅"
  }
  ```

Example:
```json
{
  "message": "logout Successfully✅"
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
