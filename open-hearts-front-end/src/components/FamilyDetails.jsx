import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function FamilyDetails() {
  const { id } = useParams();
  const [family, setFamily] = useState(null);

  useEffect(() => {
    console.log('ID parameter:', id); // Log the value of id
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5001/families/${id}`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const resData = await res.json();
        console.log('API response:', resData); // Log the API response
        setFamily(resData);
      } catch (error) {
        console.error('Error fetching family details:', error);
      }
    };
    fetchData();
  }, [id]);


  
  if (!family) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{family.name}</h2>
      <img src={family.pic} alt={family.alias} />
      <div>
        <strong>Monthly Budget: ${family.monthlyBudget}</strong>
        <ul>
          <li>Groceries: ${family.groceries}</li>
          <li>Rent: ${family.rent}</li>
          <li>Utility Bills: ${family.utilityBills}</li>
          <li>Other: ${family.other}</li>
        </ul>
      </div>
      <p>{family.moreInfo}</p>
    </div>
  );
}

export default FamilyDetails;
