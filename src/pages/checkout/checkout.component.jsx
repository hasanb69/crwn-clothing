import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems,selectCartTotal} from '../../redux/car/cart.selector'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import './checkout.style.scss'
const CheckoutPage=({cartItems,total})=>{
    return(
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className='header-block'>
                    <span>PRODUCT</span>
                </div>
                <div className='header-block'>
                    <span>DESCRIPTION</span>
                </div>
                <div className='header-block'>
                    <span>QUANTITY</span>
                </div>
                <div className='header-block'>
                    <span>PRICE</span>
                </div>
                <div className='header-block'>
                    <span>REMOVE</span>
                </div>
            </div>
            {cartItems.map(cartitem=>(
                <CheckoutItem key={cartitem.id} cartItem={cartitem}/>
            ))}
            <div className='total'>

                <span>Total:${total}</span>
            </div>
        </div>
    )

}
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage)