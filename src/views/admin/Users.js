import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";

const Users = () => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Users;
