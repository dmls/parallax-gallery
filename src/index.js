import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Rellax from 'rellax';

ReactDOM.render(
  <React.StrictMode>
    {/* images */}
    <div class="rellax"  style={{'background-color': 'red', width: 400, height: 400}}>
      I’m that default chill speed of "-2"
    </div>

    {/* black box */}
    <div class="rellax" data-rellax-speed="7" style={{'background-color': 'blue', width: 400, height: 400}}>
      I’m super fast!!
    </div>

    {/* more images */}
    <div class="rellax" data-rellax-speed="-4" style={{'background-color': 'green', width: 400, height: 400}}>
      I’m extra slow and smooth
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

var rellax = new Rellax('.rellax');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
