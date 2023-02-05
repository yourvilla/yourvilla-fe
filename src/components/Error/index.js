import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="flex h-[650px] justify-center">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="text-center">
            <h2 className="mb-8 font-extrabold text-9xl ">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              rel="noopener noreferrer"
              to="/"
              className="font-semibold px-8 py-2 pt-1 rounded-full bg-primary text-white"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
