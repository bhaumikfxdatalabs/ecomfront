import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registration } from "../store/actions/auth";

const Registration = props => {
  const { register, errors, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(registration(data));
    props.history.push("/");
  };
  return (
    <div className="d-flex justify-content-center mt-2 pt-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            ref={register({ required: true })}
          />
          {errors.email && "please enter your email"}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            ref={register({
              required: true,
              minLength: 5,
              maxLength: 10,
              pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
            })}
          />
          {errors.password &&
            errors.password.type === "required" &&
            "Your input is required"}
          {errors.password &&
            errors.password.type === "maxLength" &&
            "Your input exceed maxLength"}
          {errors.password &&
            errors.password.type === "minLength" &&
            "Your input exceed maxLength"}
          {errors.password &&
            errors.password.type === "pattern" &&
            "Your password should be valid"}
        </div>

        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
