'use strict';


/**
 *
 * no response value expected for this operation
 **/
exports.productsGET = function() {
  return new Promise(function(resolve, reject) {
    const response = {
      "data": [
        {
          "id": 1,
          "type": "products",
          "attributes": {
            "name": "Product #1 Name",
            "description": "Product #1 Description"
          }
        }
      ]
    }
    resolve(response);
  });
}


/**
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.productsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    const response = {
      "data": {
        "id": 1,
        "type": "products",
        "attributes": {
          "name": "Product #1 Name",
          "description": "Product #1 Description"
        }
      }
    }
    resolve(response);
  });
}


/**
 *
 * no response value expected for this operation
 **/
exports.usersGET = function() {
  return new Promise(function(resolve, reject) {
    const response = {
      "data": [
        {
          "id": 1,
          "type": "users",
          "attributes": {
            "email": "hello@bornfight.com"
          }
        }
      ]
    }
    resolve(response);
  });
}


/**
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.usersIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    const response = {
      "data": {
        "id": 1,
        "type": "users",
        "attributes": {
          "email": "hello@bornfight.com"
        }
      }
    }
    resolve(response);
  });
}

