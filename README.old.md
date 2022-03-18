# ARt

## descriptions

A dressing room for your wall to try various different art pieces, users might not know how something looks and the AR implementation would help the buyer to demo the art display.

This would help buyers plan out their art rooms
* How the piece fits a room
* No need for measurements
* Easy interior design
* Sellers Focus more on Creating instead of answering questions because the user would be able to see how it looks.


Team Members
* Gerard Compion
* Nader Nasr
* Armin Glavovic

## User Stories

As a User 
I want to buy Art online
Because there is a wider selection online

As a User 
I want to be able to tell how a art piece in my home
Because I want to be able to tell how a art piece looks in my room before buying

As a user 
Im drawn to Ar because it is a exciting new concept 
because It's a new way to shop

As a user 
I want to be able to sell my Art online 
because i have a wider market by selling it online 

As a user
Not needing to develope a website for my Art
Because its work that takes away from me building Art

As a user 
I want to have more information in regards to what im buying 
because i do not enjoy going through customer service

As a user 
I want to have a clear and easy experience shopping online
because i want a streamlined purchasing process

As a user 
I want to see what other users think of a art piece
because it would reassure me of the quality 

As a user 
I would like to know what kind of material is being used
because i have an aesthetic or personal preference 


## ERD
____________

* Users

  * primary key INT
  * Email
  * Phone
  * username
  * password
  * timestamp
  * Address
___________
* Orders
  * primary key INT
  * customer_id
  * cart_id
____________
* Cart
  * primary key 
  * created_at
  * user_id, FK
  * product_id, FK
  * shipping address
  * price, int
____________
* Product
  * primary key
  * name 
  * description
  * picture
  * created_at
____________
* Reviews
  * primary key
  * review
  * product id FK
  * user_id FK
  * rating
  * created_at 
____________
* Categories
  * primary id
  * category
  * product id fk
______
* Merchant
  * user_id
  * product_id
