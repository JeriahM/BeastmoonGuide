import React from "react";

const AuthForm = ({ user, onChange, onSubmit, isLogin }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        {!isLogin && (
          <div>
            <label>First Name</label>
            <br />
            <input
              type="text"
              value={user.firstName}
              onChange={onChange}
              name="firstName"
              placeholder="first name"
              required
            />
          </div>
        )}
        {!isLogin && (
          <div>
            <label>Last Name</label>
            <br />
            <input
              type="text"
              value={user.lastName}
              onChange={onChange}
              name="lastName"
              placeholder="last name"
              required
            />
          </div>
        )}
        {" "}
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            value={user.email}
            onChange={onChange}
            name="email"
            placeholder="email"
            required
          />
        </div>{" "}
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            value={user.password}
            onChange={onChange}
            name="password"
            placeholder="password"
            min="0"
            required
          />
        </div>
        <div>
          <button type="submit" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
