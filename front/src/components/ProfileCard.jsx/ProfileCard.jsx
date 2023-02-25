import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";
import { userQuery } from '../../utils/data';
import { client } from '../../client';
import { useState, useRef, useEffect } from 'react';


const ProfileCard = () => {
  const ProfilePage = true;
  const [user, setUser] = useState();
  const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();


    useEffect(() => {
        const query = userQuery(userInfo?.sub);

        client.fetch(query).then((data) => {
            setUser(data[0]);
        });
    }, []);
    console.log(user?.userName);

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={user?.image} alt="" />
      </div>

      <div className="ProfileName">
        <span>{user?.userName}</span>
        <span>Cloud Practitioner</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>170</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>150</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
