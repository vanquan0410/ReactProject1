import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout from '../src/components/layout/layout1/index';
function App() {
  return (
    <Router>
      <Switch>
        <Router exact path="/">
          <Layout>
          </Layout>
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
