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
