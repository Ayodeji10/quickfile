import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, login2 } from "../store/features/user";

function Login() {
  const user = useSelector((state) => state.user.value); // user inside the useSelector is the name of the slice

  const dispatch = useDispatch(); //dispatch takes in action

  return (
    <div>
      <h3>Login</h3>
      <button onClick={() => dispatch(login())}>login</button>
      <button
        onClick={() =>
          dispatch(login2({ name: "yemi", age: 19, years: ["2003"] }))
        }
      >
        login2
      </button>
      <p>username: {user.name}</p>
      <p>age; {user.age}</p>
      <p>Years</p>
      <ol>
        {user.years.map((year, i) => (
          <li key={i}>{year}</li>
        ))}
      </ol>
    </div>
  );
}

export default Login;
