import React from "react";
import style from "./style.module.css";
import { GiMale, GiFemale } from "react-icons/gi";
import { BsChevronLeft } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
function UserDetail() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      {user.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className={style.card}>
          <div className={style.cardHeader}>
            <div className={style.cardMenuIcon}>
              <Link to="/">
                <IconContext.Provider
                  value={{
                    size: "20px",
                    color: "#97a2ac"
                  }}
                >
                  <div>
                    <BsChevronLeft />
                  </div>
                </IconContext.Provider>
              </Link>
            </div>
            <div className={style.cardTitle}>MY PROFILE</div>
          </div>
          <div className={style.cardBody}>
            <ul>
              <li>
                <div className={style.userAvatar}>
                  <img src={user.picture.large} alt="" />
                </div>
                <div className={style.userName}>
                  <span style={{ fontSize: "16px", color: "#b1b8c5" }}>
                    Name
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#6374f3"
                    }}
                  >
                    {user.name.first} {user.name.last}
                  </span>
                </div>
              </li>
              <li>
                <div className={`${style.gender} ${style.listItem}`}>
                  <span>Gender</span>
                  <span className={style.genderIcon}>
                    {user.gender === "female" ? <GiFemale /> : <GiMale />}
                  </span>
                </div>
              </li>
              <li>
                <div className={`${style.age} ${style.listItem}`}>
                  <span>Age</span>
                  <span>{user.dob.age}</span>
                </div>
              </li>
              <li>
                <div className={`${style.email} ${style.listItem}`}>
                  <span>Email</span>
                  <span>{user.email}</span>
                </div>
              </li>
              <li>
                <div className={`${style.phone} ${style.listItem}`}>
                  <span>Phone</span>
                  <span>{user.phone}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default UserDetail;
