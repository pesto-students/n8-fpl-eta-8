import React from "react";
import firebase from "../../firebase";
import { useHistory } from "react-router";

export default function Home() {
  const history = useHistory();

  if (!firebase.getCurrentUsername()) {
    // not logged in
    history.push("/login");
    return null;
  }
  return <div>Home</div>;
}
