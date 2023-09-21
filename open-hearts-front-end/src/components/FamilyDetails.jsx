import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleCreditCardForm from './SingleCreditCardForm'; 

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

  const style = {
    lineHeight: '2.5',
  };

  return (
    <div>
      <h2 style={style}>{family.name}</h2>
      <img style src={family.pic} alt={family.alias} style={style} />
      <div style={style}>
        <strong>Monthly Budget: ${family.monthlyBudget}</strong>
        <p>Groceries: ${family.groceries}</p>
        <p>Rent: ${family.rent}</p>
        <p>Utility Bills: ${family.utilityBills}</p>
        <p>Other: ${family.other}</p>
      </div>
      <p style={style}>{family.moreInfo}</p>
      <SingleCreditCardForm family={family} /> {/* Pass the family object as a prop */}
    </div>
  );
}

export default FamilyDetails;
