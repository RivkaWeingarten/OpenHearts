import React from "react";
import CreditCardForm from "./CreditCardForm";

function Donations() {
  return (
    <div>
      <h1 className="thank-you">Thank you for supporting our families!</h1>
      <img className='helping-hands' src={`${process.env.PUBLIC_URL}/helpinghands.jpg`} alt='helping hands' />
      <h2 className="donation-text">
        If you would like to make a donation that will be dispersed to our community's most immediate needs, you may lend a helping hand here. We appreciate your kindness and generosity.
      </h2>

      <CreditCardForm />
    </div>
  );
}

export default Donations;
