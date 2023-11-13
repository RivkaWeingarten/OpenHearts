import "../families.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// require("dotenv").config();

function Families() {
  const [families, setFamilies] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}families`);
      // const res = await fetch(`http://localhost:5001/api/families`);
      const resData = await res.json();
      setFamilies(resData);
    };
    fetchData();
  }, []);

  let familiesFormatted = families.map((family) => {
  
    let sumDonations = family.donations.reduce((tot, c) => {
      return tot + c.donationAmount;
    }, 0);
    let totalDonation = Math.round(sumDonations);

    let donation = (
      <p style={{ color: "purple" }}>
        ${totalDonation} raised for this family
      </p>
    );
    //
    return (
      <div className="show-families">
        <div className="family-info">
          <h2>
            <a href={family._id}>{family.name}</a>
            <img src={family.pic}></img>
          </h2>
        </div>
        <div className="description-family">
          <p>
            <strong> Monthly Budget: ${family.monthlyBudget}</strong>
            <span>{donation}</span>
          </p>
          <ul>
            <li>Groceries: ${family.food}</li>
            <li>Rent: ${family.rent}</li>
            <li>Utilities: ${family.utilityBills}</li>
            <li>Other: ${family.other}</li>
          </ul>
          {/* <p>{family.moreInfo}</p> */}

          <Link to={`/families/${family._id}`} key={family._id}>

            <button>Donate Now</button>
          </Link>
          {/* <button
            style={{ backgroundColor: "white", width: "20px" }}
            onClick={handleDelete}
            className="btnEditDelete"
          >
            &#10060;
          </button> */}
        </div>
      </div>
    );
  });

  return (
    <main>
      <h1>Our Families In Need</h1>
      <div className="families-container">{familiesFormatted}</div>
    </main>
  );
}

export default Families;
