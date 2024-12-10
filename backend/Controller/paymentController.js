import Razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config(); // Loading environment variables

// Get the key and secret from environment variables
const KEY_ID = process.env.KEY_ID;
const KEY_SECRET = process.env.KEY_SECRET;

// Create the payment controller
const paymentController = {};

// Create an order using Razorpay
paymentController.orders = (req, res) => {
    let instance = new Razorpay({
        key_id: KEY_ID,
        key_secret: KEY_SECRET,
    });

    const options = {
        amount: req.body.amount * 100, // Amount in paise (smallest unit of currency)
        currency: "INR",
    };

    // Create the order with Razorpay
    instance.orders.create(options, function (err, order) {
        if (err) {
            return res.status(500).send({ code: 500, message: "Server Error" });
        }
        return res.status(200).send({ code: 200, message: "Order Created", data: order });
    });
};

// Verify payment
paymentController.verify = (req, res) => {
    
    let body = req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;
    var expectedSignature = crypto.createHmac('sha256', KEY_SECRET)
    .update(body.toString())
    .digest('hex');
    if(expectedSignature === req.body.response.razorpay_signature){
        res.send({code : 200, mesage: 'sign valid'});
    }
    else{
        res.send({code : 500, mesage: 'sign Invalid'});
    }

};

// Export the payment controller
export default paymentController;
