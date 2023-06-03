import { Card } from '@blueprintjs/core'
import React from 'react'
import ButtonComponent from '../components/ButtonComponent'
import "./contact.css"
const Contact = () => {
  const displayRazorpay = async () => {
    var options = {
      key: "xxxxxxxxxxxxx", // Enter the Key ID generated from the Dashboard
      amount: 500, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "ankit",
      description: "Test Transaction",
      image: "",
      order_id: "order_LjwL1V4Qb9TjHI", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:5000/v1/payment-verify",
      prefill: {
        name: "aurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000"
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      }

    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  return (
    <div>
      <Card>
        <div >
          <p className="dialogContent m-b-2">Choose the plan that’s right for you</p>
          <div className="subscriptions-plan">
            <div className="plan">
              <div className="subscriptions-plan-header">
                <p>Everyday Subscription</p>{' '}
              </div>
              <p className="dialogContent m-b-2 payment-text">
                ₹10
                <p className="payment-inside">Allow 100 users</p>
                <p className="payment-inside">Everyday Subscription only</p>
                <ButtonComponent
                  className="apply"
                  type="submit"
                  intent="primary"
                  label="Pay"
                  onClick={displayRazorpay}
                />
              </p>
              <p className="dialogContent m-b-2 payment-body">Features</p>
              <ul className="subscriptions-features">
                <li>Access dashboard module</li>
                <li>Access inbox module</li>
              </ul>
            </div>
            <div className="plan">
              <div className="subscriptions-plan-header">
                <p>Monthly Subscription</p>{' '}
              </div>
              <p className="dialogContent m-b-2 payment-text">
                ₹199
                <p className="payment-inside">Allow 10000 users</p>
                <p className="payment-inside">Monthly Subscription only</p>
                <ButtonComponent
                  className="apply"
                  type="submit"
                  intent="primary"
                  label="Pay"
                  onClick={displayRazorpay}
                />
              </p>
              <p className="dialogContent m-b-2 payment-body">Features</p>
              <ul className="subscriptions-features">
                <li>Access dashboard module</li>
                <li>Access inbox module</li>
                <li>Access widget configration module</li>
                <li>Access bot configration module</li>
              </ul>
            </div>
            <div className="plan">
              <div className="subscriptions-plan-header">
                <p>Yearly Subscription</p>{' '}
              </div>
              <p className="dialogContent m-b-2 payment-text">
                ₹499
                <p className="payment-inside">Allow 100000 users</p>
                <p className="payment-inside">Yearly Subscription only</p>
                <ButtonComponent
                  className="apply"
                  type="submit"
                  intent="primary"
                  label="Pay"
                  onClick={displayRazorpay}
                />
              </p>
              <p className="dialogContent m-b-2 payment-body">Features</p>
              <ul className="subscriptions-features">
                <li>Access dashboard module</li>
                <li>Access inbox module</li>
                <li>Access widget configration module</li>
                <li>Access bot configration module</li>
                <li>Access integration module</li>
                <li>Access user module</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <ButtonComponent intent="primary" className="m-r-1" label="Cancel" />
        </div>
      </Card>
    </div>
  )
}

export default Contact