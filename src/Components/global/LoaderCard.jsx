import React from "react";
import { Card, Skeleton } from "antd";

const LoaderCard = () => {
  return (
    <Card
      className="border rounded-lg shadow-lg mb-4 p-0 w-[300px]"
      hoverable
      cover={
        <Skeleton.Image
          className="w-full h-48 object-cover animate-pulse"
          style={{ width: "300px", height: "180px" }}
        />
      }
    >
      <Skeleton active title={{ width: "60%" }} paragraph={{ rows: 1 }} />
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <Skeleton.Avatar active size="small" shape="circle" />
          <Skeleton.Input style={{ width: 80 }} active size="small" />
        </div>
        <Skeleton.Button style={{ width: 100 }} active size="small" />
      </div>
    </Card>
  );
};

export default LoaderCard;
