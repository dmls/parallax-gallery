import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './js/orientation-parallax';
import { Container } from 'react-bootstrap';
import Top from './Components/Top';
import Bottom from './Components/Bottom';
import Rellax from 'rellax';

ReactDOM.render(
  <React.StrictMode>
    {/* images */}
    <Container fluid className="rellax my-5 pb-5" data-rellax-speed="1">
      <Top />
    </Container>

    <div className="py-4" />

    {/* black box */}
    <Container fluid className="rellax my-5 pt-5" data-rellax-speed="4" style={{'background-color': 'black', width: '100%', height: 400}}>
      I’m super fast!!
    </Container>

    {/* more images */}
    <Container fluid className="rellax" data-rellax-speed="3">
      <Bottom />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

new Rellax('.rellax');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
