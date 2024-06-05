import React from "react";
import { Card, Skeleton } from "antd";

const LoaderCard = () => {
  return (
    <div
      className="border rounded-lg shadow-lg  flex h-[90px] overflow-hidden">
      <Skeleton.Image
        className="w-full object-cover animate-pulse"
        style={{width: "100px", height: "90px"}}
      />
      <div className="flex flex-col justify-center ml-2 gap-4 w-full pr-4">
          <Skeleton.Input style={{width:'100%'}} className="w-full" active size="small"/>
          <Skeleton.Input style={{width:'100%'}} active size="small"/>
      </div>
    </div>
  );
};

export default LoaderCard;
