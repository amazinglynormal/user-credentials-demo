import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Container } from "./components/Container";
import { SignUp } from "./components/SignUp";
import { LogIn } from "./components/LogIn";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route exact path={["/", "/login"]}>
            <LogIn />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};
