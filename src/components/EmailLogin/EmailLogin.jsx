import React from "react";
import Toggle from "@mui/material/Switch";
import { EmailLoginTitle } from "./EmailLoginStyle";
import { useRouteMatch, Route, Switch, useHistory } from "react-router-dom";
import SignIn from "components/SignIn/SignIn";
import SignUp from "components/SignUp/SignUp";

export default function EmailLogin() {
  const [checked, setChecked] = React.useState(false);
  const history = useHistory();

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      history.push(url + "/register");
    } else {
      history.push(url);
    }
  };

  const { url, path } = useRouteMatch();

  return (
    <div>
      <EmailLoginTitle>
        Log In
        <Toggle
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        Sign Up
      </EmailLoginTitle>
      <Switch>
        <Route exact path={`${path}`}>
          <SignIn />
        </Route>
        <Route path={`${path}/register`}>
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}
