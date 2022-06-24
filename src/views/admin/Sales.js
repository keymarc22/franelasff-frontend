import React from "react";

// components

import CardSales from "components/Cards/CardSales.js";

const Sales = () => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardSales />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Sales;
