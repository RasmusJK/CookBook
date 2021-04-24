import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import Home from './components/Home';
import Liked from "./components/Liked";
import MyRecipes from "./components/MyRecipes";
import BottomNav from "./components/BottomNav";
import TopBar from "./components/TopBar";

const App = () => {
  return (
      <Router>
    <div className="App">


        <Switch>
        <Route path="/" exact>
            <TopBar name="Home"/>
            <Home name="Home" />
        </Route>
        <Route path="/liked">
            <TopBar name="Liked"/>
            <Liked name="Liked"/>

        </Route>
        <Route path="/myRecipes" >
            <TopBar name="My recipes"/>
            <MyRecipes name="My recipes"/>
        </Route>

        </Switch>



      <BottomNav/>

    </div>
      </Router>
  );
}

export default App;
