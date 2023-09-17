import React from 'react';

function CreditCardForm() {
  return (
    <div className='ccBackground'>
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="input-group">
              <label htmlFor="cardNumber" className="form-label">Card Number</label>
              <input type="text" className="form-control" id="cardNumber" placeholder="1234 5678 9012 3456" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-group">
              <label htmlFor="cardHolder" className="form-label">Cardholder Name</label>
              <input type="text" className="form-control" id="cardHolder" placeholder="John Doe" required />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="input-group">
              <label htmlFor="expiryDate" className="form-label">Expiration Date</label>
              <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-group">
              <label htmlFor="cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cvv" placeholder="123" required />
            </div>
          </div>
        </div>

        {/* Billing Information */}
        <div className="input-group">
          <label htmlFor="billingAddress" className="form-label">Billing Address</label>
          <input type="text" className="form-control" id="billingAddress" placeholder="123 Main St" required />
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="input-group">
              <label htmlFor="billingCity" className="form-label">City</label>
              <input type="text" className="form-control" id="billingCity" placeholder="New York" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-group">
              <label htmlFor="billingZip" className="form-label">ZIP Code</label>
              <input type="text" className="form-control" id="billingZip" placeholder="10001" required />
            </div>
          </div>
        </div>
        <div className='ccContainer'>
          <button type="psuedo submit" className="submit-button">
            <a href="#">     
               Submit Payment
            </a>
         {/* Add administrator's email */}
         </button>
        </div>
      </form>
    </div>
  );
}

export default CreditCardForm;
