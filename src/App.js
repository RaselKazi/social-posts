import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Comments from './components/Comments/Comments';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import PostsDetail from './components/PostsDetail/PostsDetail';



function App() {
  return (
    <div>
    <Header></Header>
    <Router>
    
      
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/comment/:postId">
          <PostsDetail></PostsDetail>
        </Route>
        <Route path="*">
            <NoMatch></NoMatch>
          </Route>
      </Switch>
    
  </Router>
  </div>
  );
}

export default App;
