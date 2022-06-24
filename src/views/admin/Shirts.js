import React from "react";

// hooks

import { useGetItems } from "hooks/useGetItems";

// components

import CardShirts from "components/Cards/CardShirts.js";

const Shirts = () => {
  const payload = useGetItems('http://localhost:3000/api/v1/shirts');

  return (
    <React.Fragment>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardShirts items={payload.items}/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Shirts;
