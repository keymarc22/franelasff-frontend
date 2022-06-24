import React from "react";

// components

import CardUsers from "components/Cards/CardUsers.js";

const Users = () => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardUsers />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Users;
