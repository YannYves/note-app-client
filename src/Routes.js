import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import { animated, useTransition } from "react-spring";

function Routes() {
  const location = useLocation();

  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, width: "0%" },
    enter: { opacity: 1, width: "100%" },
    leave: { opacity: 0, width: "0%" },
  });
  return (
    <div className="Routes">
      {transitions.map(({ item: location, props, key }) => (
        <animated.div style={props} key={key}>
          <Switch location={location}></Switch>
          <Switch>
            <UnauthenticatedRoute exact path="/login">
              <Login />
            </UnauthenticatedRoute>
            <UnauthenticatedRoute exact path="/signup">
              <Signup />
            </UnauthenticatedRoute>
            <AuthenticatedRoute exact path="/settings">
              <Settings />
            </AuthenticatedRoute>
            <AuthenticatedRoute exact path="/notes/new">
              <NewNote />
            </AuthenticatedRoute>
            <AuthenticatedRoute exact path="/notes/:id">
              <Notes />
            </AuthenticatedRoute>
            <Route exact path="/">
              <Home />
            </Route>
            {/* Finally, catch all unmatched routes */}
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </animated.div>
      ))}
    </div>
  );
}

export default Routes;
