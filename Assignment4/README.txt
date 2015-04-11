Author: Chris Padgett
Date:   4/11/2015
Class:  CSCI3800

Base URL: http://cpadgett-test.apigee.net/Assignment4

Proxy follows REST best practices

/movies
GET     Retrieves all movies
POST    Not supported
DELETE  Not supported

/movies/{id}
GET     Retrieves movie with corresponding id
POST    Creates a new movie or modifies an existing movie with corresponding id
DELETE  Deletes movie with corresponding id


Notes:
id is not uuid, since uuid is reserved