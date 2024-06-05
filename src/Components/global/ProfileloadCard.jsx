import React from "react";
import { Card, Skeleton } from "antd";

const LoaderCard = () => {
  return (
    <Card
      className="border rounded-lg shadow-lg  flex h-32 overflow-x-hidden"
      hoverable
      cover={
        <Skeleton.Image
          className="w-full object-cover animate-pulse"
          style={{ width: "100px", height: "127px" }}
        />
      }
    >
      <div className="flex flex-col justify-between ml-2">
        <div className="flex items-center gap-3 flex-col">
          <Skeleton.Input style={{ width: 200 }} active size="small" />
          <Skeleton.Input style={{ width: 200 }} active size="small" />
        </div>
      </div>
    </Card>
  );
};

export default LoaderCard;
