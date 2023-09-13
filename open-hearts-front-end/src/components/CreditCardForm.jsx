import React from 'react';

function CreditCardForm() {
  return (
    <div className="container mt-5">
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Card Number</label>
              <input type="text" className="form-control" id="cardNumber" placeholder="1234 5678 9012 3456" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="cardHolder" className="form-label">Cardholder Name</label>
              <input type="text" className="form-control" id="cardHolder" placeholder="John Doe" required />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="expiryDate" className="form-label">Expiration Date</label>
              <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cvv" placeholder="123" required />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit Payment</button>
      </form>
    </div>
  );
}

export default CreditCardForm;
