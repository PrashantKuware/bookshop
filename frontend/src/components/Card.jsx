import React from "react";
import axios from "axios"; 
import toast from "react-hot-toast";


function Card({ item }) {

const handleOpenRazorpay = (data) =>{
const options = {
  key: "rzp_test_yyqnL8LODiJRYo", 
    amount: data.amount, 
    currency: data.currency,
    name: "BookStore App", 
    description: "Test Transaction",
    order_id: data.id, 
    handler: function (response){
      toast.success(`Payment ID: ${response.razorpay_payment_id}\nOrder ID: ${response.razorpay_order_id}\nSignature: ${response.razorpay_signature}`);
        axios.post('http://localhost:4000/verify', { res: response })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });

    },
    
}
const rzp = new window.Razorpay(options)
rzp.open()
}

  const handlePayment = async (amount) => {
    const _data = { amount };
    try {
      const res = await axios.post('http://localhost:4000/orders', _data);
      console.log(res.data);
      handleOpenRazorpay(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="mt-4 my-5 p-3 cursor-pointer">
        <div className="card bg-base-100 w-93 shadow-xl hover:scale-105 duration-300 dark:bg-slate-100 dark:text-black">
          <figure>
            <img src={item.image} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">₹ {item.price}</div>
              <div
                className="px-3 py-2 rounded-badge border-[2px] cursor-pointer hover:bg-pink-500 hover:text-white"
                onClick={() => handlePayment(item.price)}
              >
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
