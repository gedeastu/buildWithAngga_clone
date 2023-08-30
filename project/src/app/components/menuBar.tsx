"use client";
import React from "react";
import useToggle from "../hooks/toggleHook";
export default function MenuBar({
  DailyLink,
  ResourcesLink,
  ForCorporateLink,
}) {
  const { value, toggle } = useToggle();
  {
    value
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }
  return (
    <>
      <div id="menuBar" className="w-32">
        <button
          onClick={toggle}
          className="bg-[#E5E9F2] h-10 w-12 flex flex-row items-center justify-center rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6`}
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
        {value ? (
          <>
            <div className="bg-white opacity-100 rounded-tr-[5rem] rounded-tl-[5rem] fixed transition-all duration-500 z-50 w-screen h-[65%] bottom-0 left-0 md:h-0 md:opacity-0 md:-z-50">
              <button onClick={toggle} className="absolute right-10 top-12">
                close
              </button>
              <div id="links">
                <div id="daily">
                  <h1>Daily</h1>
                  <div
                    onClick={toggle}
                    className="cursor-pointer flex flex-row gap-10"
                    id="daily"
                  >
                    {DailyLink}
                  </div>
                </div>
                <div id="resources">
                  <h1>Resources</h1>
                  <div
                    onClick={toggle}
                    id="resouces"
                    className="cursor-pointer flex flex-row"
                  >
                    {ResourcesLink}
                  </div>
                </div>
                <div id="forCorporate">
                  <h1>For Corporate</h1>
                  <div
                    onClick={toggle}
                    id="resouces"
                    className="cursor-pointer flex flex-row"
                  >
                    {ForCorporateLink}
                  </div>
                </div>
              </div>
            </div>
            <div
              id="overlay"
              className="w-screen h-screen bg-black/50 transition-all opacity-100 duration-500 fixed left-0 top-0 md:opacity-0 md:-z-20"
            ></div>
          </>
        ) : (
          <>
            <div className="bg-white opacity-0 -z-50 rounded-tr-[5rem] rounded-tl-[5rem] fixed transition-all duration-500 w-screen h-[0rem] bottom-0 left-0"></div>
            <div
              id="overlay"
              className="w-screen h-screen bg-black/50 opacity-0 duration-500 -z-20 fixed left-0 top-0"
            ></div>
          </>
        )}
      </div>
    </>
  );
}
