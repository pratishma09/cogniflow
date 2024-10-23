import React from "react";

const Notification = ({ className, title }) => {
  return (
    <div className={`${className || ""} flex items-center p-4 pr-6 bg-n-9/40 `}>
      Notification
    </div>
  );
};

export default Notification;
