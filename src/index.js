import React from 'react';
import ReactDOM from 'react-dom';
// CSS
import './assets/css/App.css';
import './assets/css/Mobile.css';
// Compo
import Header from './components/Header';
import Footer from './components/Footer';
// Pages
import Home from './pages/Home';
import More from './pages/More';
import NotFound from './pages/NotFound';
// Rooter
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
	return (
		<Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/More' component={ More } />
          <Route component={ NotFound } />
        </Switch>
        <Footer />
      </div>
    </Router>
	)
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
