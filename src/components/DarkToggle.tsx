"use client";
import React, { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const DarkToggle: React.FC = () => {
  const initialDarkMode = sessionStorage.getItem("darkMode") === "true";
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    sessionStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-4 right-4 p-2 bg-indigo-600 text-white rounded-full"
      >
        {isDarkMode ? <CiLight /> : <CiDark />}
      </button>
    </div>
  );
};

export default DarkToggle;
