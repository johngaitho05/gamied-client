import React from "react";
import ProfileloadCard from "./ProfileloadCard";
const Loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 px-[15px]">
      {[...Array(4)].map((_el, index) => (
        <ProfileloadCard key={index} />
      ))}
    </div>
  );
};

export default Loading;
