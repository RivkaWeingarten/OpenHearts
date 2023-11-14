import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function SingleCreditCardForm({ family }) {
  const [donor, setDonor] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [donationSubmitted, setDonationSubmitted] = useState(false); // Added state for donation confirmation
  // const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      donor,
      donationAmount: parseFloat(donationAmount), 
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}families/${family._id}/donation`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (response.ok) {
        console.log("Donation submitted successfully");
        setDonationSubmitted(true); 
       
      } else {
        console.error("Failed to submit donation");
      }
    } catch (error) {
      console.error("Error submitting donation:", error);
    }

    setDonor("");
    setDonationAmount("");
  };

  return (
    <div className="ccBackground">
      {donationSubmitted ? ( // Render confirmation message if donationSubmitted is true
        <div>
          <p>Your gift of {donationAmount} has been received.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="input-group">
                <label htmlFor="donor" className="form-label">
                  Donor Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={donor}
                  id="donor"
                  placeholder="John Doe"
                  onChange={(e) => setDonor(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <label htmlFor="donationAmount" className="form-label">
                  Donation Amount
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={donationAmount}
                  id="donationAmount"
                  placeholder="Enter Donation Amount"
                  onChange={(e) => setDonationAmount(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <label htmlFor="cardNumber" className="form-label">
                  Card Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="input-group">
                <label htmlFor="expiryDate" className="form-label">
                  Expiration Date
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="expiryDate"
                  placeholder="MM/YY"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <label htmlFor="cvv" className="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cvv"
                  placeholder="123"
                />
              </div>
            </div>
          </div>

          {/* Billing Information */}
          <div className="input-group">
            <label htmlFor="billingAddress" className="form-label">
              Billing Address
            </label>
            <input
              type="text"
              className="form-control"
              id="billingAddress"
              placeholder="123 Main St"
            />
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="input-group">
                <label htmlFor="billingCity" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="billingCity"
                  placeholder="New York"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <label htmlFor="billingZip" className="form-label">
                  ZIP Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="billingZip"
                  placeholder="10001"
                />
              </div>
            </div>
          </div>
          <div className="ccContainer">
            <button type="submit" className="submit-button">
              Submit Payment
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default SingleCreditCardForm;
