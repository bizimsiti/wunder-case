import "./App.css";
import { UserProvider } from "./contexts/UserContext";

import Card from "./components/Card";
import UserDetail from "./components/UserDetail";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <Switch>
        <Route path="/user-detail" component={UserDetail} />
        <Route path="/" component={Card} />
      </Switch>
    </UserProvider>
  );
}

export default App;
