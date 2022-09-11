import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUserDetails } from "./store/reducers/users";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const { data, isLoading, errors } = useSelector((state) => state?.counter);

  return (
    <div className="main_container">
      <h1 className="heading">Redux Example</h1>
      <div className="buttonCont">
        <button className="button" onClick={() => dispatch(fetchUserDetails())}>
          Fetch user Comments
        </button>
      </div>

      {isLoading ? (
        <p>....Loading....</p>
      ) : (
        <div>
          {data?.map((e) => (
            <div>
              <h1 className="title">{e.title}</h1>
              <p className="body">{e.body}</p>
              <p>{e.id}</p>
              <hr />
            </div>
          ))}
        </div>
      )}

      {errors ? <p>{errors.message}</p> : ""}
    </div>
  );
};

export default App;
