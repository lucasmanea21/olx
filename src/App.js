import './App.css';
import { Fragment, useEffect} from 'react';
import Home from './pages/Home'
import Signin from './pages/Signin'
import {Switch,Route,useLocation} from 'react-router-dom'

function App( ) {
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

  return (
    <Fragment>
      <ScrollToTop />
      <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/signin' exact component={Signin} />
      </Switch>
    </Fragment>
  );
}

export default App;
