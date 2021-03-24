import React from "react";
import style from "./style.module.css";
import { GiMale, GiFemale } from "react-icons/gi";
import { BsChevronLeft } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

function UserDetail() {
  return (
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
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt=""
              />
            </div>
            <div className={style.userName}>
              <span style={{ fontSize: "16px", color: "#b1b8c5" }}>Name</span>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#6374f3"
                }}
              >
                Umut Özdem
              </span>
            </div>
          </li>
          <li>
            <div className={`${style.gender} ${style.listItem}`}>
              <span>Gender</span>
              <span className={style.genderIcon}>
                <GiMale />
                <GiFemale />
              </span>
            </div>
          </li>
          <li>
            <div className={`${style.age} ${style.listItem}`}>
              <span>Age</span>
              <span>34 years old</span>
            </div>
          </li>
          <li>
            <div className={`${style.email} ${style.listItem}`}>
              <span>Email</span>
              <span>example@gmail.com</span>
            </div>
          </li>
          <li>
            <div className={`${style.phone} ${style.listItem}`}>
              <span>Phone</span>
              <span>0534-451-0000</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserDetail;
