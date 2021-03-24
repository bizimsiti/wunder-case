import React from "react";
import User from "../User";
import style from "./style.module.css";
import { FiMenu } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import { initSocket, subscripeToUser, disconnectSocket } from "../../service";

function Card() {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    initSocket();
    subscripeToUser((data) => {
      setUser(data);
    });
  }, [setUser, user]);
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
        <User />
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
