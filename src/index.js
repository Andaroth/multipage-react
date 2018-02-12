import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Pages
import Home from './Home.js';
import More from './More.js';
import NotFound from './NotFound.js';
// Rooter
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
	return (
		<Router>
      <div>
        <header>
          <h1>Axel Fiolle</h1>
          <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/More">More</Link></li>
            <li><Link to="/NotFound">NotFound</Link></li>
          </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/More' component={ More } />
          <Route component={ NotFound } />
        </Switch>
        <footer>
          <p>&copy; Axel Fiolle</p>
        </footer>
      </div>
    </Router>
	)
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
