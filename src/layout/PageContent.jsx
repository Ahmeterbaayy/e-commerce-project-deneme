import React from "react";

export default function PageContent({ children }) {
  return (
    <div className="flex w-full flex-col items-start flex-nowrap bg-[#fff] relative">
      {children}
    </div>
  );
}
