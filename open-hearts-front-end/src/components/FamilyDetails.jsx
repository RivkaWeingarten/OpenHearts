import React from 'react';
import { useParams } from 'react-router-dom';
import Families from "./Families";

function FamilyDetails() {
  // Get the family ID from the URL params
  const { id } = useParams();

  // Find the family with the matching ID in your `families` array
  const family = Families.find((item) => item.ID === id);

  if (!family) {
    // Handle the case when the family with the specified ID is not found
    return <div>Family not found</div>;
  }

  // Render the family's detailed information
  return (
    <div>
      <h2>{family.alias}</h2>
      {/* Display other family details here */}
    </div>
  );
}

export default FamilyDetails;
