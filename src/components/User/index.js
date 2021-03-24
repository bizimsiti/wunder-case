import React from "react";

import { BsChevronRight } from "react-icons/bs";
import { IconContext } from "react-icons";
function User() {
  return (
    <div className="user">
      <div className="user-avatar">
        <img
          src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
          alt=""
        />
      </div>
      <div className="user-name">Umut, 34</div>
      <div className="user-detail-icon">
        <IconContext.Provider
          value={{
            size: "40px"
          }}
        >
          <div>
            <BsChevronRight />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default User;
