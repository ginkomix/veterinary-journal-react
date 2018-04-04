import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import store from "./config/store";
import Start from "./pages/Start";
import Authentication from "./components/Authentication";
import { Switch, Route } from "react-router-dom";
import { account } from "./utils/accountsApi";

class App extends React.Component {
  componentWillMount() {
    account.initializeBd();
  }

  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/journal" component={Authentication} />
        </Switch>
      </Provider>
    );
  }
}

export default App;
