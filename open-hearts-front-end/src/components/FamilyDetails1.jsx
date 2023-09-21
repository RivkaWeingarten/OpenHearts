import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SingleCreditCardForm from "./SingleCreditCardForm";
function FamilyDetails1() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [family, setFamily] = useState(null);

  useEffect(() => {
    console.log("ID parameter:", id); // Log the value of id
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5001/families/${id}`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const resData = await res.json();
        console.log("API response:", resData); // Log the API response
        setFamily(resData);
      } catch (error) {
        console.error("Error fetching family details:", error);
      }
    };
    fetchData();
  }, [id]);
  // handle delete every donation had to be deleted.
  async function handleDelete(e) {
    e.preventDefault();
    const confirmed = window.confirm(
      `Are you sure you want ${family.name} to be deleted?`
    );

    if (confirmed) {
      for (const donation of family.donations) {
        await fetch(
          `http://localhost:5001/families/${family._id}/donation/${donation._id}`,
          {
            method: "DELETE",
          }
        );
      }
      await fetch(`http://localhost:5001/families/${family._id}`, {
        method: "DELETE",
      });
      navigate("/families");
    }
  }

  if (!family) {
    return <div>Loading...</div>;
  }

  let sumDonations = family.donations.reduce((tot, c) => {
    return tot + c.donationAmount;
  }, 0);
  let totalDonation = Math.round(sumDonations);
  let percent = Math.round((sumDonations / family.monthlyBudget) * 100);
  let donation = (
    <h2 style={{ color: "purple" }}>
      ${totalDonation} raised for this family.{" "}
    </h2>
  );

  return (
    <main>
      <div className="editDelete">
        <div className="edit-delete">
        <a style={{color:"maroon"}}> For administrative use only! </a>
          <a
            style={{ color: "maroon", textDecoration: "none" }}
            href={`/families/${family._id}/edit`}
            className="btnEditDelete"
          >
            <span> Edit ✏️ </span>
          </a>
          <a
            style={{ color: "maroon", textDecoration: "none" }}
            onClick={handleDelete}
            className="btnEditDelete"
          >
           <span> Delete &#10060; </span>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <img src={family.pic} alt={family.name} />

          <h3 className="location">
            from {family.city}, {family.state}
          </h3>
          <p>{family.moreInfo}</p>
        </div>
        <div className="col-sm-4">
          <div>
            <h1>{family.name}</h1>
          </div>
          {donation}
          <h2 style={{ color: "purple" }}>{percent}% of total budget</h2>
          <h2>Total Budget ${family.monthlyBudget}</h2>

          <p>Groceries: ${family.food}</p>
          <p>Rent: ${family.rent}</p>
          <p>Utility Bills: ${family.utilityBills}</p>
          <p>Other: ${family.other}</p>
        </div>

        <hr />
      </div>
      <SingleCreditCardForm family={family} />{" "}
      {/* Pass the family object as a prop */}
    </main>
  );
}

export default FamilyDetails1;
