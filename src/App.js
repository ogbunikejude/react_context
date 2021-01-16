import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {React, useState, useEffect } from 'react'
import axios from 'axios'
import About from './About';
import './App.css';
import Home from './home';
import { Context } from './Context';

function App() {
  const [posts,setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setPosts(res.data))
        .catch(err=> console.log(err))
    }, []);
  return (
    <Context.Provider value={posts}>
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <Home posts={posts} /> This also works and allows to pass props manually down to lower level */}
            <Home />
          </Route>
          <Route exact path="/about">
            {/* <About posts={posts}/> */}
            <About />
          </Route>
        </Switch>
      </Router>
      {/* <p>This is my page</p> */}
    </div>
    </Context.Provider>
  );
}

export default App;
