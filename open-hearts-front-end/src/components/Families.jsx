import "../families.css"
import { Link } from 'react-router-dom';

const families = [
  {
    name: "jane Doe",
    ID: "1",
    alias: "Jane Doe",
    address: "111 Love Place",
    phone: "111-222-3333",
    email: "1234@1234.com",
    situation: "dire needs, homeless",
    monthlyBudget: "2400",
    groceries: "500",
    rent: "1500",
    transportation: "200",
    other: "200",
  },
  {
    name: "Jane Doe1",
    ID: "2",
    alias: "Jane Doe1",
    address: "112 Love Street",
    phone: "111-222-3334",
    email: "12345@12345.com",
    situation: "Homeless, learning disabled childe",
    monthlyBudget: "3500",
    groceries: "700",
    rent: "2000",
    transportation: "300",
    other: "500",
  },
  {
    name: "Jane Doe2",
    ID: "3",
    alias: "Jane Doe2",
    address: "113 Love Street",
    phone: "111-222-3335",
    email: "12346@12346.com",
    situation: "Parent with terrible depression, kids no clothing",
    monthlyBudget: "4100",
    groceries: "500",
    rent: "2500",
    transportation: "100",
    other: "1000",
  },
];

function Families() {
  let familiesFormatted = families.map((family) => {
    return (
      <div className="show-families">
       <div className="family-info">
        <h2>
          <a href={family.ID}>{family.alias}</a>
          <img src="https://th.bing.com/th?id=OIP.IQehT3nzWIi7bEck-XyvdQHaFH&w=300&h=207&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"></img>
        </h2>
        </div>
       <div className="description-family">
        <p>
         <strong>    Monthly Budget: ${family.monthlyBudget}</strong>
          <ul>
          <li>Groceries:${family.groceries}</li>
          <li>Rent:${family.rent}</li>
          <li>Transportation:${family.transportation}</li>
         <li> Other:${family.other}</li>
          </ul>
        </p>
        <p>{family.situation}</p>
        <Link to={`/family/${family.ID}`}>
        <button>Donate Now</button>
        </Link>
        </div>
      </div>
    );
  });

  return (
    <main>
      <h1>Our Families In Need</h1>
      <div className="families-container">
     {familiesFormatted}
     </div>
    </main>
  );
}

export default Families;
