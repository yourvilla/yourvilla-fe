import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Layout from "./layout";
import { useQuery } from "react-query";
import { getUserFn } from "./services/Users";
import { useDispatch } from "react-redux";
import { setUserData } from "./Redux/Actions/UserData";
import { routerData } from "./config/routes";
import Themes from "./Themes/theme";

function App() {
  const dispatch = useDispatch();

  useQuery(["user"], getUserFn, {
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: localStorage.getItem("token") === null ? false : true,
    onSuccess: (res) => {
      dispatch(setUserData(res?.data[0]));
    },
  });

  console.log("Hi")


  return (
    <div>
      <BrowserRouter>
        <Themes>
          <div id="main">
            <Routes>
              {routerData.map((route) => {
                return (
                  <Route
                    key={route.id}
                    exact
                    path={route.path}
                    element={<Layout component={route.component} />}
                  />
                );
              })}
            </Routes>
          </div>
        </Themes>
      </BrowserRouter>
    </div>
  );
}

export default App;
