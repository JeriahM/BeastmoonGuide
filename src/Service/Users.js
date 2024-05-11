/* import Parse from "parse"; */

// update to axios
export const createUser = (newUser) => {
  /* const user = new Parse.User();

  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("username", newUser.email);

  console.log("User: ", user);

  return user
    .signUp()
    .then((newUserSaved) => {
      alert(
        `${newUserSaved.get("firstName")}, you successfully registered!`
      );
      return newUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    }); */
};

// update to axios
export const loginUser = (currUser) => {
  /* const user = new Parse.User();

  user.set("password", currUser.password);
  user.set("username", currUser.email);

  console.log("User: ", user);
  console.log();
  return user.logIn(user.username, user.password)
    .then(() => {
      alert(
        `${user.get("firstName")}, welcome to the world of Wizard101!`
      );
      return Parse.User.become(user.getSessionToken());
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    }) */
};

// update to axios
export const logoutUser = (currUser) => {
  /* return Parse.User.logOut()
  .catch((error) => {
    alert(`Error: ${error.message}`);
  }); */
};

// update to axios
export const checkUser = () => {
  /* return Parse.User.current()?.authenticated; */
};

