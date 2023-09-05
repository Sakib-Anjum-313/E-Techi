import React, { createContext, useState } from "react";

export const UserCourseInfoContext = createContext();

const UserCourseInfoProvider = ({ children }) => {
  const userInfo = {
    userName: "sakib",
    points: 20,
    videoWatched: 5,
    testGiven: 5,
    continueWatching: 6,
  };

  const [userCourseInfo, setUserCourseInfo] = useState(userInfo);

  const courseInfo = { userCourseInfo, setUserCourseInfo };

  return (
    <UserCourseInfoContext.Provider value={courseInfo}>
      {children}
    </UserCourseInfoContext.Provider>
  );
};

export default UserCourseInfoProvider;
