import "./App.css";
import io from "socket.io-client";
import Card from "./components/Card";
import UserDetail from "./components/UserDetail";
import { Route, Switch } from "react-router-dom";
/* const socket = io("wss://wunder-provider.herokuapp.com", {
  transports: ["websocket"]
});
socket.on("connect", () => {
  console.log("connected");
});
socket.on("userList", (data) => {
  console.log(data.results[0].gender);
}); */
function App() {
  return (
    <div>
      <Switch>
        <Route path="/user-detail">
          <UserDetail />
        </Route>

        <Route path="/">
          <Card />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
