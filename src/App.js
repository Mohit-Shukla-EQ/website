import "./App.css";
import Page from 'components/Page/Page';
import SimpleNavbar from "./components/Navbars/Simple-NavBar/Simple-Navbar";
import Articles from "components/Articles/Articles";
import centeredHeroDocumentation from "components/Centered-Hero/documentation";
import TextImageColumnsHeroDocumentation from "components/Text-Image-Columns-Hero/documentation"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

import log from './libraries/Log' 

function App() {
  log.write(0, "App", "App")

  return (
    <div className="App">
      <SimpleNavbar />
      <Router>
        <div>
          <Switch>
            <Route path="/docs/concepts/:id" children={<Docs />} />
            <Route path="/docs/:id" children={<Docs />} />
            <Route path="/page/:id" children={<Pages />} />
            <Route path="/component/centered-hero" >
              <div>
                {centeredHeroDocumentation}
              </div>
            </Route>
            <Route path="/component/text-image-columns-hero" >
            <div>
                {TextImageColumnsHeroDocumentation}
              </div>
            </Route>
            <Route path="/">
              <Page  pageId="home-page" />
            </Route>
            
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Docs() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  log.write(0, "App", "Docs", id)
  return (
    <div>
      <Articles pageId={id} />
    </div>
  );
}

function Pages() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  log.write("Inside App.js function Pages. id: ", id)
  return (
    <div>
      <Page pageId={id} />
    </div>
  );
}

export default App;
