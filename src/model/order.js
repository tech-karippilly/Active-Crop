class Order{
    constructor({orderNumber,user,items,address,paymentMethod,receipt,totalAmount,discount,appliedCoupon}){
        this.orderNumber =orderNumber
        this.user = user._id
        this.items = items;
        this.shippingAddress ={
            fullName:user.getFullName(),
            address_1:address.address_line_1,
            address_2:address.address_line_2,
            city:address.city,
            postalCode:address.pincode,
            landmark: address.landmark,
            country: 'India',
            phone: address.phone,
            state: address.state
        };
        this.paymentMethod = paymentMethod;
        this.paymentStatus = 'Pending';
        this.totalAmount = totalAmount;
        this.receipt = receipt;
        this.discount = discount;
        this.appliedCoupon = appliedCoupon;
    }

    static createRazorpayOrder({razorPayOrder,user,cart,address,paymentMethod}){
        return new Order({
            orderNumber: razorPayOrder.id,
            user,
            items: cart.items,
            address,
            paymentMethod,
            receipt: razorPayOrder.receipt,
            totalAmount: cart.total_price,
            discount: cart.discount,
            appliedCoupon: cart.appliedCoupon ??''
        })
    }

    static createCODOrder({user,cart,address,paymentMethod,generateOrderNumber,generateReceiptNumber}){
        return new Order({
            orderNumber: generateOrderNumber(),
            user,
            items: cart.items,
            address,
            paymentMethod,
            receipt: generateReceiptNumber(),
            discount: cart.discount,
            totalAmount: cart.total_price,
            appliedCoupon: cart.appliedCoupon ??''
        })
    }
    static createWalletOrder({user, cart, address, paymentMethod, generateOrderNumber, generateReceiptNumber }){
        return new Order({
            orderNumber: cart.total_price !== 0 ? null : generateOrderNumber(),
            user,
            items: cart.items,
            address,
            paymentMethod,
            receipt: generateReceiptNumber(),
            totalAmount: cart.total_price,
            discount: cart.discount,
            appliedCoupon: cart.appliedCoupon ??''
        });
    }
}

export default Order