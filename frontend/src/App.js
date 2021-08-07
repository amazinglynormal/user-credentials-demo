import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Container } from "./components/Container";

const HomePage = lazy(() => import("./components/HomePage"));
const LogIn = lazy(() => import("./components/LogIn"));
const SignUp = lazy(() => import("./components/SignUp"));
const Profile = lazy(() => import("./components/Profile"));

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </Container>
    </Router>
  );
};
