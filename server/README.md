```md
SignUp Mutation(addUser)
```

```javascript
mutation addUser(
$username: String!
    $password: String!
    $email: String!
 $houseNumber: String
    $streetName: String
    $postalCode: String
  	$state: String
    $country: String
    $city: String
  ) {
    addUser(
      input:
      {
      username: $username,
      password:$password,
email: $email,

houseNumber: $houseNumber,
streetName: $streetName,
postalCode: $postalCode,
state: $state,
country: $country,
city: $city,
}
) {
token
user {
username
_id
email

streetName
houseNumber
postalCode
state
country
city

      }
    }
}
```

# Query Variables

```javascript
{
"email": "rajni@techfriends.dev",
"password": "12345678",
"username": "rajni",
"houseNumber": "23",
"streetName": "ashford",
"postalCode": "5307",
"state": "SA",
"country": "Australia",
"city": "parkside"
}
```

# Result

```javascript
{
  "data": {
    "addUser": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoicmFqbmkiLCJlbWFpbCI6InJham5pQHRlY2hmcmllbmRzLmRldiIsIl9pZCI6IjYxYjk0Y2I1ZGJlYTI2MmRkMmZlNDRmOCJ9LCJpYXQiOjE2Mzk1MzM3NDksImV4cCI6MTYzOTU0MDk0OX0.jIxetywYEobXiCa7nR2OaoBu-gF436abEZNJL4JtGho",
      "user": {
        "username": "rajni",
        "_id": "61b94cb5dbea262dd2fe44f8",
        "email": "rajni@techfriends.dev",
        "streetName": "ashford",
        "houseNumber": "23",
        "postalCode": "5307",
        "state": "SA",
        "country": "Australia",
        "city": "parkside"
      }
    }
  }
}
```

---

---

```md
Query login
```

```javascript
mutation login($email: String!, $password: String!) {
login(email: $email, password: $password) {
token
user {
_id
username
email


        houseNumber
        streetName
        postalCode
        state
        country
        savedWatchList{
          _id
          imdbId
          title
          poster
          resultType
          returnType
          releasedYear
          plotType

        }


      }
    }

}
```

**_Query Variables_**

```javascript

{
  "email": "rajni@techfriends.dev",
"password": "12345678"
}
```

**_Result_**

```javascript
{
  "data": {
    "login": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoicmFqbmkiLCJlbWFpbCI6InJham5pQHRlY2hmcmllbmRzLmRldiIsIl9pZCI6IjYxYjk0Y2I1ZGJlYTI2MmRkMmZlNDRmOCJ9LCJpYXQiOjE2Mzk1NDI3MzAsImV4cCI6MTYzOTU0OTkzMH0.cVlmsMoYR_Pw50MikDaKD46Ez6C-Fj1tDeJjXe1piuE",
      "user": {
        "_id": "61b94cb5dbea262dd2fe44f8",
        "username": "rajni",
        "email": "rajni@techfriends.dev",
        "houseNumber": "23",
        "streetName": "ashford",
        "postalCode": "5307",
        "state": "SA",
        "country": "Australia",
        "savedWatchList": [
          {
            "_id": "61b96f0c8ecb18313342579c",
            "imdbId": "tt0241527",
            "title": "Harry Potter and the Sorcerer's Stone",
            "poster": "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
            "resultType": "2001",
            "returnType": null,
            "releasedYear": "Daniel Radcliffe, Rupert Grint, Richard Harris",
            "plotType": "2001"
          }
        ]
      }
    }
  }
}
```

```javascript
query{
user(username:"rajni"){
_id
email
username
savedWatchList{
          _id
          imdbId
          title
          poster
          resultType
          returnType
          releasedYear
          plotType

        }
	}
}
```

Result

```javascript
{
  "data": {
    "user": {
      "_id": "61b94cb5dbea262dd2fe44f8",
      "email": "rajni@techfriends.dev",
      "username": "rajni",
      "savedWatchList": [
        {
          "_id": "61b96f0c8ecb18313342579c",
          "imdbId": "tt0241527",
          "title": "Harry Potter and the Sorcerer's Stone",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
          "resultType": "2001",
          "returnType": null,
          "releasedYear": "Daniel Radcliffe, Rupert Grint, Richard Harris",
          "plotType": "2001"
        },
        {
          "_id": "61b9712e8ecb1831334257a0",
          "imdbId": "tt0330373",
          "title": "Harry Potter and the Goblet of Fire",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg",
          "resultType": "2005",
          "returnType": null,
          "releasedYear": "Daniel Radcliffe, Emma Watson, Rupert Grint",
          "plotType": "2005"
        }
      ]
    }
  }
}
```
