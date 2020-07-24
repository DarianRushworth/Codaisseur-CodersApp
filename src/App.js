import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PostPages from './pages/PostPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route 
          path="/post/:id"
          component={PostPages}
          />
          <Route 
          exact path="/" 
          component={HomePage}
          />
        </Switch>
      </header>
    </div>
  );
}

export default App;
