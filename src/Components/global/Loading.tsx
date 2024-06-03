import React from "react";
import LoaderCard from "./LoaderCard";

const Loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-[15px]">
      {[...Array(4)].map((_el, index) => (
        <LoaderCard />
      ))}
    </div>
  );
};

export default Loading;
