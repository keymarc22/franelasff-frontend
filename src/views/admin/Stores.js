import React from "react";

// components

import CardStores from "components/Cards/CardStores.js";

const Stores = () => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardStores />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Stores;
