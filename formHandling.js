const formHandling = (request, response, users) => {
  // 2 paths login and registration
  // State 1: input: email button1: login  button2: register
  // State 2: input: pass  button1: submit button2: back
  // State 3: input: none  button1: logout button2: none
  //using cookie value to determine state
  const email = request.cookies["email_validated"];
  const pass = request.cookies["pass_validated"];
  const userID = request.cookies["user_id"];
  //State 1: ask for email
  if (!email && !pass) {
    for (user of users) {
      if (request.body.input === user.email) {
        response.cookie("user_id", user.id);
        response.cookie("email_validated", true);
        response.send("email validated");
        return;
      }
    }
    response.status(401).send("Incorrect e-mail");
  }

  //State 2: ask for password
  else if (email && !pass) {
    for (user of users) {
      if (
        // need to make number to work
        Number(userID) === Number(user.id) &&
        request.body.input === user.password
      ) {
        response.cookie("pass_validated", "true");
        // response.send({text:'password validated',name:user.name});
        response.send("password validated");
        return;
      }
    }
    response.status(401).send("invalid password");
  } else {
    //State 3: user logged in
    // response.send('user is logged in');
    response.send({ text: "password validated", name: user.name });
    return;
  }
};

module.exports = {
  formHandling
};
