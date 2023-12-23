# URL_SORTNER

**Published postman documentation of BookStore Api**
`https://documenter.getpostman.com/view/25896599/2s9Ykrc11G`

**Deployed Link**
`https://url-sortner.onrender.com`


## Description

- This project is a backend development project  in this project  i used Node.js, Express.js, and MongoDB. The goal is to create a RESTful API for a URL shortener service, transforming long URLs into concise versions. The service should encompass the following key functionalities:

 ## Key Functionalities

1. **URL Shortening:**
   - Users can submit a lengthy URL through a POST request to `/shortUrl`.
   - The API will generate a unique short URL for the provided original URL and store it in the database.
   - The response to the user's request includes both the original and shortened URLs.

2. **Access Shortened URLs:**
   - Users can access the original URL by visiting the generated short URL.

3. **User Authentication:**
   - Basic user registration and login functionalities are implemented to ensure secure access to the service.

## Requirements
- Node.js (version X.X.X)
- MongoDB (version X.X.X)
- express (version X.X.X)
- mongoose (version X.X.X)
- jsonwebtoken(version X.X.X)
- dotenv(version X.X.X)
- passport(version X.X.X)
- passport-jwt(version X.X.X)
- shortid(version X.X.X)
- bcryptjs(version X.X.X)
- nodemon(version X.X.X)
- shortid(version X.X.X)

## Setup

1. Make sure you have Node.js, Express, and MongoDB installed on your system.
2. Clone the repository: `git clone https:https://github.com/Indrajeet790/URL_SORTNER`
3. Install the dependencies: `npm install`
4. Start the server: `npm start`
5. The API will be available at `http://localhost:8000`.

## APIS(Accessible While Production)

- POST `https://url-sortner.onrender.com/users/signUp` - User can signUp.
- POST `https://url-sortner.onrender.com/users/signIn` - User can signIn through 
email and password
- POST `https://url-sortner.onrender.com/url/shortUrl` - get  shorted url
- GET `https://url-sortner.onrender.com/url/KTBoGqo9j` - Access Original Url

## APIS(Accessible While Development)
## Endpoints

- POST `/users/signUp` - User can register itself
- POST `/users/signIn` - user can signIn
- POST `/url/shortUrl` - post a url and get a shortUrl
- Get `/url/:originalUrl` - access original url after shorted
 
