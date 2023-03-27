import React from 'react';
import "./Cart.css"

const Cart = ({ cart }) => {
     let total = 0;
     let shippingCharge = 0
     for (const product of cart) {
          total = total + product.price;
          shippingCharge = shippingCharge + product.shipping;
     }
     const tax = total * 5 / 100;
     const grandTotal = total + shippingCharge + tax;
     return (
          <div className='cart'>
               <h4>Cart Container</h4>
               <p>Selected Items: {cart.length}</p>
               <p>Total Price:${total}</p>
               <p>Total Shipping Charge: ${shippingCharge}</p>
               <p>Tax:${tax.toFixed(2)}</p>
               <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
          </div>
     );
};

export default Cart;