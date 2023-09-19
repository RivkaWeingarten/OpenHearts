import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddFamily() {
  const navigate = useNavigate();

  const [family, setFamily] = useState({
    name: "",
    pic: "https://th.bing.com/th?id=OIP.IQehT3nzWIi7bEck-XyvdQHaFH&w=300&h=207&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    alias: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    moreInfo: "",
    monthlyBudget: "",
    food: "",
    rent: "",
    utilityBills: "",
    other: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch(`http://localhost:5001/families`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(family),
    });

    navigate("/families");
  }

  return (
    <main>
      <h1>Add a New Family</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Family Name</label>
          <input
            required
            value={family.name}
            onChange={(e) => setFamily({ ...family, name: e.target.value })}
            className="form-control"
            id="name"
            name="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="alias">Enter your Nickname here</label>
          <input
            required
            value={family.alias}
            onChange={(e) => setFamily({ ...family, alias: e.target.value })}
            className="form-control"
            id="alias"
            name="alias"
            defaultValue={family.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pic">Picture</label>
          <input
            value={family.pic}
            onChange={(e) => setFamily({ ...family, pic: e.target.value })}
            className="form-control"
            id="pic"
            name="pic"
            defaultValue="https://th.bing.com/th?id=OIP.IQehT3nzWIi7bEck-XyvdQHaFH&w=300&h=207&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
          />
        </div>

    
        <div className="form-group">
          <label htmlFor="address1">Address 1</label>
          <input
            required
            value={family.address1}
            onChange={(e) => setFamily({ ...family, address1: e.target.value })}
            className="form-control"
            id="address1"
            name="address1"
            placeholder="Enter address here"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address2">Address 2</label>
          <input
            value={family.address2}
            onChange={(e) => setFamily({ ...family, address2: e.target.value })}
            className="form-control"
            id="address2"
            name="address2"
            placeholder="Enter address line 2 here. (optional)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            value={family.city}
            onChange={(e) => setFamily({ ...family, city: e.target.value })}
            className="form-control"
            id="city"
            name="city"
            placeholder="Enter city here"
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            value={family.state}
            onChange={(e) => setFamily({ ...family, state: e.target.value })}
            className="form-control"
            id="state"
            name="state"
            placeholder="Enter State here"
          />
        </div>

        <div className="form-group">
          <label htmlFor="zip">Zip Code</label>
          <input
            value={family.zip}
            onChange={(e) => setFamily({ ...family, zip: e.target.value })}
            className="form-control"
            id="zip"
            name="zip"
            placeholder="zip"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            value={family.phone}
            onChange={(e) => setFamily({ ...family, phone: e.target.value })}
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Enter Phone Number where we can reach you"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            value={family.email}
            onChange={(e) => setFamily({ ...family, email: e.target.value })}
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter Email address where we can reach you"
          />
        </div>

        <div className="form-group">
          <label htmlFor="moreInfo">More Info</label>
          <input
            value={family.moreInfo}
            onChange={(e) => setFamily({ ...family, moreInfo: e.target.value })}
            className="form-control"
            id="moreInfo"
            name="moreInfo"
            placeholder="Describe your situation in a few words"
          />
        </div>

        <div className="form-group">
          <label htmlFor="monthlyBudget">Monthly Expenses</label>
          <input
            value={family.monthlyBudget}
            onChange={(e) =>
              setFamily({ ...family, monthlyBudget: e.target.value })
            }
            className="form-control"
            id="monthlyBudget"
            name="monthlyBudget"
            placeholder="Estimated Monthly Budget"
          />
        </div>

        <div className="form-group">
          <label htmlFor="food">Food Expense</label>
          <input
            value={family.food}
            onChange={(e) => setFamily({ ...family, food: e.target.value })}
            className="form-control"
            id="food"
            name="food"
            placeholder="What is your estimated monthly budget for food?"
          />
        </div>

        <div className="form-group">
          <label htmlFor="rent">Rent Expense</label>
          <input
            value={family.rent}
            onChange={(e) => setFamily({ ...family, rent: e.target.value })}
            className="form-control"
            id="rent"
            name="rent"
            placeholder="What is your estimated monthly budget for rent"
          />
        </div>

        <div className="form-group">
          <label htmlFor="utilityBills"> Utilities Expenses</label>
          <input
            value={family.utilityBills}
            onChange={(e) =>
              setFamily({ ...family, utilityBills: e.target.value })
            }
            className="form-control"
            id="utilityBills"
            name="utilityBills"
            placeholder="What is your estimated monthly budget for utilities"
          />
        </div>

        <div className="form-group">
          <label htmlFor="other"> Other Expenses</label>
          <input
            value={family.other}
            onChange={(e) => setFamily({ ...family, other: e.target.value })}
            className="form-control"
            id="other"
            name="other"
            placeholder="What is your estimated monthly budget for other expenses"
          />
        </div>
        {/* <div className="form-group">
					<label htmlFor="city">City</label>
					<input
						value={place.city}
						onChange={e => setPlace({ ...place, city: e.target.value })}
						className="form-control"
						id="city"
						name="city"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="state">State</label>
					<input
						value={place.state}
						onChange={e => setPlace({ ...place, state: e.target.value })}
						className="form-control"
						id="state"
						name="state"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="cuisines">Cuisines</label>
					<input
						value={place.cuisines}
						onChange={e => setPlace({ ...place, cuisines: e.target.value })}
						className="form-control"
						id="cuisines" name="cuisines" required />
				</div> */}
        <input className="btn btn-primary" type="submit" value="Add Family" />
      </form>
    </main>
  );
}

export default AddFamily;
