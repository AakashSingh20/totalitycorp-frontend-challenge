
# Techstack
- React.js
- Bootstrap




## Features

- Product Listing

- Filter section 

- Cart management

- Checkout




## Approach

#### 1. Products listing
Products are being fetched from a json file which consists of an array filled with 12 objects and are distributed to the frontend using the context API.

#### 2. Filter
Products list is filtered based on the categories available within the json object. We simply equate the selected category with the category available in the json object and then map it. Same approach is followed for the price range.

#### 3. Cart
For adding a particular product in the cart we take the id of the selected product using the onclick function and append that id to the cart array. And in the cart segment we simply map the products with the respected id.

#### 4. Increment and Decrement
This is done by using the onclick function which increments or decrements the qantity value which is by default set to 1.

#### 5. Remove item from cart
By using the onclick function we take the id of the element and then remove that particular element from the cart array and then display.

#### 6. Checkout
We add the price of all the products whose id was stored in the cart array. If the element is repeated twice, we multiply it by the number of repeatations and then add the final sum.

