import React from "react";

interface BackgroundWrapperProps {
  children: React.ReactNode;
}

export const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from-green-200/30 to-transparent min-h-screen w-full">
      {children}
    </div>
  );
};
