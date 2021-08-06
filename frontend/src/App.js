import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Container } from "./components/Container";
import { SignUp } from "./components/SignUp";
import { LogIn } from "./components/LogIn";
import { Profile } from "./components/Profile";
import { HomePage } from "./components/HomePage";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};
