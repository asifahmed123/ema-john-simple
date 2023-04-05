import React from 'react';
import "./Cart.css"

const Cart = ({ cart }) => {
     let total = 0;
     let shippingCharge = 0
     let quantity = 0;

     for (const product of cart) {
          // if(product.quantity === 0){
          //      product.quantity = 1
          // }
          product.quantity = product.quantity || 1;
          total = total + product.price * product.quantity;
          shippingCharge = shippingCharge + product.shipping;
          quantity = quantity + product.quantity
     }
     const tax = total * 5 / 100;
     const grandTotal = total + shippingCharge + tax;
     return (
          <div className='cart'>
               <h4>Cart Container</h4>
               <p>Selected Items: {quantity}</p>
               <p>Total Price:${total}</p>
               <p>Total Shipping Charge: ${shippingCharge}</p>
               <p>Tax:${tax.toFixed(2)}</p>
               <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
          </div>
     );
};

export default Cart;