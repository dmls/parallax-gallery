import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './js/orientation-parallax';
import { Container, Col } from 'react-bootstrap';
import Top from './Components/Top';
import Bottom from './Components/Bottom';
import Bottom2 from './Components/Bottom2';
import Rellax from 'rellax';

window.isMobile = window.innerWidth > 992

ReactDOM.render(
  <React.StrictMode>
    {/* images */}
    {/* <Container fluid className="rellax my-5 pb-5" data-rellax-speed="1">
      <Top />
    </Container> */}

    <div className="py-5" />

    {/* black box */}
    <Container fluid className="rellax my-5 pt-5" data-rellax-speed="4" style={{'background-color': 'black', height: 400}}>
      <Col className="text-white">
      </Col>
    </Container>

    {/* more images */}
    <Container fluid className="rellax" data-rellax-speed="3">
      <Bottom />
    </Container>

    {/* black box */}
    {/* <Container fluid className="rellax my-5 pt-5" data-rellax-speed="4" style={{'background-color': 'black', height: 400}}>
      <Col className="text-white">
      </Col>
    </Container> */}

    {/* more images */}
    {/* <Container fluid className="rellax" data-rellax-speed="3">
      <Bottom2 />
    </Container> */}
  </React.StrictMode>,
  document.getElementById('root')
);

new Rellax('.rellax');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
