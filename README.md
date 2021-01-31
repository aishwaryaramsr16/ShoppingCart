# MOO Shopping Basket Frontend Coding Test
## Contents
* [Instructions](#instructions)
* [Requirements](#requirements)
* [Getting Started](#getting-started)
* [REST API](#rest-api)

## Instructions
We've supplied a skeleton React application that's intended to implement a basic shopping cart experience. A list of products is displayed on the page, along with a button to add a product to the cart.

The functionality to add a product to the cart has not yet been implemented.

We'd like you to implement the Add to Cart functionality. When the button is clicked it should:

1. Add the product to the customer's cart.
2. Display the updated contents of the cart on the page.

We've supplied a fully functional `REST API` for you to develop against. The documentation for this can be found below. Please implement the functionality consuming the API.

We've also supplied some initial tests, which should be passing on submission. Added functionality should also be covered by tests.

### How long should I spend on it?
We would suggest spending around 2 hours hours to complete the exercise.

### Things we're looking for
* Well structured readable code
* Making use of React and the Javascript language
* Tests
* Commit history that we can access with good quality commit messages

### Stretch goals (if you have time)
* Styling the UI
* Incrementing items in the cart

## Requirements
* Docker
* Node v8 or above

## Getting started
### Install

Make sure that you have Docker installed and running and then run:

```sh
npm install
```

### Start
To start the app:
```sh
npm run docker:start
```

The app is dockerised and this will spin up the backend api and start the front end application on [http://localhost:3000](http://localhost:3000). It uses Webpack Dev Server which will automatically refresh the page when you change a file.

The backend api will be running at [http://localhost:4567](http://localhost:4567)

### Tests
Run the tests:
```sh
npm test
```

Run the tests in watch mode:
```sh
npm run test:watch
```

Run the tests and generate a coverage report:
```sh
npm run test:coverage
```

## REST API
The following api endpoints are available:

* [Create a new cart](#create-a-new-cart)
* [Get an existing cart](#get-an-existing-cart)
* [Clear a cart](#clear-a-cart)
* [Add an item to a cart](#add-an-item-to-a-cart)
* [Increment quantity of item in a cart](#increment-quantity-of-item-in-a-cart)
* [Decrement quantity of item in a cart](#decrement-quantity-of-item-in-a-cart)
* [Delete an item from a cart](#delete-an-item-from-a-cart)

##### Create a new cart
- Method: POST
- Path: `/cart`
- Response Body:

```JSON
    {
        "cartId": 1,
        "cartItems": {}
    }
```

##### Get an existing cart:
- Method: POST
- Path: `/cart/<int:cart_id>`
- Response Body:

```JSON
    {
        "cartId": 1,
        "cartItems": {
          "1": {
            "itemId": 1,
            "quantity": 1
          }
        }
    }
```

##### Clear a cart
- Method: POST
- Path: `/cart/<int:cart_id>/clear`
- Responds with 204 No Content and an empty body


##### Add an item to a cart:
- Method: POST
- Path: `/cart/<int:cart_id>/item/<int:item_id>`
- Request Body:

```JSON
    {
      "quantity": 1
    }
```

- Response Body:

```JSON
    {
        "cartId": 1,
        "cartItems": {
          "1": {
            "itemId": 1,
            "quantity": 1
          }
        }
    }
```

##### Increment quantity of item in a cart:
- Method: POST
- Path: `cart/<int:cart_id>/item/<int:item_id>/increment`
- Response Body:

```JSON
    {
        "cartId": 1,
        "cartItems": {
          "1": {
            "itemId": 1,
            "quantity": 2
          }
        }
    }
```

##### Decrement quantity of item in a cart:
- Method: POST
- Path: `/cart/<int:cart_id>/item/<int:item_id>/decrement`
- Response Body:

```JSON
    {
        "cartId": 1,
        "cartItems": {
          "1": {
            "itemId": 1,
            "quantity": 1
          }
        }
    }
```

##### Delete an item from a cart:
- Method: DELETE
- Path: `/cart/<int:cart_id>/item/<int:item_id>`
- Responds with 204 No Content and an empty body
