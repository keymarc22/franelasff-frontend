import React from "react";

// hooks

import { useGetItems } from "hooks/useGetItems";

// components

import CardStores from "components/Cards/CardStores.js";

const Stores = () => {
  const payload = useGetItems('http://localhost:3000/api/v1/stores');

  return (
    <React.Fragment>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardStores items={payload.items}/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Stores;
