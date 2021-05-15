import Hero from "./components/landing/Hero.js"
import Sign from "./components/login/Sign.js"
import Form from "./components/signup/Form.js"
import MarcheForm from "./components/account/marche/Acc.js"
import Marche from "./components/account/Service-march/marche.js"
import Commandes from "./components/account/commandes/Acc.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/' exact component={Hero} />
          <Route exact path='/login' exact component={Sign} />
          <Route exact path='/signup' exact component={Form} />
          <Route exact path='/marche' exact component={Marche} />
          <Route exact path='/commande' exact component={Commandes} />
          <Route exact path='/marche-form/:id' exact component={MarcheForm} />
        </Switch>
      </Router>
      
  );
}

export default App;
