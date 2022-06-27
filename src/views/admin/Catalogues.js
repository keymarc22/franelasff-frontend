import React from "react";

// components

import CardCatalogues from "components/Cards/CardCatalogues.js";

const Catalogues = () => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardCatalogues />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Catalogues;
