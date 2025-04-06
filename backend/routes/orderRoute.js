import express from 'express'
import {placeOrder,placeOrderRazorpay,placeOrderStripe,allOrders,userOrders,updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
const orderRouter=express.Router()
import authUser from '../middleware/auth.js'

// admin features 
orderRouter.post('list',adminAuth,allOrders)
orderRouter.post('status',adminAuth,updateStatus)

// payment features 
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)


// user features 
orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter