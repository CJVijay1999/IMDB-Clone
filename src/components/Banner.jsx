import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[85vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage:
          "url(https://cf.autodeft2.pw/content/20230426/2aNgJQYkn2BDaBBs9D5q.jpg)",
      }}>
      <div className="text-white text-2xl text-center w-full bg-grey-900/60 p-3">
        Fast X
      </div>
    </div>
  );
}

export default Banner;
