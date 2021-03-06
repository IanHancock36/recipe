import './App.css'
import {BrowserRouter, Switch , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path ="/">
          <Home/>
        </Route>
        <Route exact path ="/create">
          <Create/>
        </Route>
        <Route exact path ="/search">
          <Search/>
        </Route>
        {/* gives a route param to indenify which id and or recipe */}
        <Route exact path ="/recipes/:id">
          <Recipe/>
        </Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App
