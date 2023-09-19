import "../families.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Families() {
  const [families, setFamilies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5001/families");
      const resData = await res.json();
      setFamilies(resData);
    };
    fetchData();
  }, []);

  let familiesFormatted = families.map((family) => {
    console.log(family._id);
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
          </p>
          <ul>
            <li>Groceries: ${family.food}</li>
            <li>Rent: ${family.rent}</li>
            <li>Transportation: ${family.utilityBills}</li>
            <li>Other: ${family.other}</li>
          </ul>
          <p>{family.moreInfo}</p>

          <button>
            <a href={`/families/${family._id}`} rel="donate button">
              Donate Now
            </a>
          </button>

          <Link to={`/family/${family._id}`} key={family._id}>
            <button>Donate Now</button>
          </Link>
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
