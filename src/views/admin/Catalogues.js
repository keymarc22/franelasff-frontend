import React from "react";

// hooks

import { useGetItems } from "hooks/useGetItems";

// components

import CardCatalogues from "components/Cards/CardCatalogues.js";

const Catalogues = () => {
  const payload = useGetItems('http://localhost:3000/api/v1/catalogues');

  return (
    <React.Fragment>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardCatalogues items={payload.items} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Catalogues;
