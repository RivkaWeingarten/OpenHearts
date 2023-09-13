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
      <div>
        <h2>
          <a href={family.ID}>{family.alias}</a>
        </h2>
        <p>
          Monthlyn Budget: {family.monthlyBudget}
          Groceries:{family.groceries}
          Rent:{family.rent}
          Transportation:{family.transportation}
          Other:{family.other}
        </p>
        <p>{family.situation}</p>
        <button>Donate Now</button>
      </div>
    );
  });

  return (
    <main>
      <h1>Our Families In Need</h1>
     {familiesFormatted}
    </main>
  );
}

export default Families;
