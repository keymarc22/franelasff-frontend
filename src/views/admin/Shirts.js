import React from "react";

// components

import CardShirts from "components/Cards/CardShirts.js";

const Shirts = () => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardShirts />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Shirts;
