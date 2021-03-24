import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import { BsChevronRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
function User() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <ul>
      {user.length === 0 ? (
        <li>Loading...</li>
      ) : (
        <li>
          <div className={style.userAvatar}>
            <img src={user.picture.thumbnail} alt="" />
          </div>
          <div className={style.userName}>
            {user.name.first},{user.dob.age}
          </div>
          <div>
            <Link to="/user-detail">
              <IconContext.Provider
                value={{
                  size: "20px",
                  color: "#97a2ac"
                }}
              >
                <div>
                  <BsChevronRight />
                </div>
              </IconContext.Provider>
            </Link>
          </div>
        </li>
      )}
    </ul>
  );
}

export default User;
