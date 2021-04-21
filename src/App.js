import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import Home from './components/Home';
import Liked from "./components/Liked";
import MyRecipes from "./components/MyRecipes";
import BottomNav from "./components/BottomNav";


function App() {
  return (
      <Router>
    <div className="App">
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/liked" component={Liked} />
        <Route path="/myRecipes" component={MyRecipes} />
        </Switch>



      <BottomNav/>

    </div>
      </Router>
  );
}

export default App;
