import React, {Suspense} from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AuthUserContextProvider from './contexts/AuthUserContextProvider';
import ItemsContextProvider from './contexts/ItemsContextProvider';
import ScrollToTop from './helpers/ScrollToTop';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/style.css'


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<h3>Loading...</h3>}> 
    <Router>
      <ScrollToTop />
      <Switch>
        <AuthUserContextProvider>
          <ItemsContextProvider>
            <App />
          </ItemsContextProvider>
        </AuthUserContextProvider>
      </Switch>
    </Router>
    </Suspense>
    </React.StrictMode>,
  document.getElementById('root')
);


