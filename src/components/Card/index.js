import React from "react";
import User from "../User";
import style from "./style.module.css";
import { FiMenu } from "react-icons/fi";
import { BsChevronRight, BsThreeDots } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
function Card() {
  return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <div className={style.cardTitle}>PROFILES</div>
        <div className={style.cardMenuIcon}>
          <IconContext.Provider
            value={{
              size: "30px",
              color: "#6374f3"
            }}
          >
            <FiMenu />
          </IconContext.Provider>
        </div>
      </div>
      <div className={style.cardBody}>
        <ul>
          <li>
            <div className={style.userAvatar}>
              <img
                src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
                alt=""
              />
            </div>
            <div className={style.userName}>Umut, 34</div>
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
        </ul>
      </div>
      <div className={style.cardFooter}>
        <button className={style.loadMoreBtn}>
          <IconContext.Provider
            value={{
              size: "50px"
            }}
          >
            <div>
              <BsThreeDots />
            </div>
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}

export default Card;
