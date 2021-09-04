import "./App.css";
import HomePage from "./components/Pages/Home-Page/home-page";
import SimpleNavbar from "./components/Navbars/Simple-NavBar/Simple-Navbar";
import About from "./components/About/About";
import Articles from "components/Articles/Articles";
import Article from "components/Articles/Article";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SimpleNavbar />
      <Router>
        <div>
          {/*         <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            {/*           <Route path="/docs">
            <Docs />
          </Route> */}
            <Route path="/docs/concepts/:id" children={<Child />} />
            <Route path="/docs/:id" children={<Child />} />
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <Articles pageId={id} />
    </div>
  );
}

export default App;
