import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import "../styles/savedList.css";
import DashboardImage from "../images/login-bg.jpg";

function SavedList() {
  const { username: userParam } = useParams();

  console.log("userParam", userParam);

  const { loading: userLoading, data: userData } = useQuery(
    userParam ? QUERY_USER : QUERY_ME,
    {
      variables: { username: userParam },
    }
  );
  console.log("userData is", userData);
  const user = userData?.me || userData?.user || {};
  console.log("###################" + user.username);
  console.log("Whole User is ", user);

  return (
    <section className="coach-cards">
      <div>Testing</div>
      <div className="max-width-stuDashboard">
        {userLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="coach-columns-2">
            Finished Loading
            {user.savedWatchList.map((watchlist) => (
              <div className="coach-row-2">
                <div className="coach-profile-col-2">
                  <img src={DashboardImage} alt="" />
                </div>
                <div className="coach-description-col">
                  <ul>
                    <li>Sport :{watchlist.title}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default SavedList;

{
  /* <li>Coachname : {program.coachname}</li>
                    <li>Session starts on :{program.classTime}</li>
                    <li>Class Size: {program.classDay}</li>
                    <li>Start Date: {program.sessionStartDate}</li> */
}
