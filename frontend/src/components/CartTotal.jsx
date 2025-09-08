import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    return (
        <div className="w-100">
            <div className="mb-3">
                <Title text1={"CART"} text2={"TOTALS"} />
            </div>
            <div className="d-flex flex-column gap-2 mt-2 text-sm">
                <div className="d-flex justify-content-between">
                    <p>SubTotal</p>
                    <p>Rs.{getCartAmount()}.00</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                    <p>Shipping Fee</p>
                    <p>Rs. {delivery_fee}.00</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                    <b>Total</b>
                    <b>Rs.{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
