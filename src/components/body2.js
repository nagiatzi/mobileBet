import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import './body2.css';
import './hero.css';


class Body2 extends Component {





    render() {
      return (
        <div className="body2 text-center">

          <Container className="container--body2">
              <h1 className="body2__title">Why we beat the Competition</h1>

              <Row>
                  <Col xs={false} md="2" className="offset-md-1 packageContainer">
                    <img src={require('../img/85.png')}  className="eikonidio" alt="1st icon of our trade" />
                    <p className="img__caption">We Have the Best Odds Out There</p>
                  </Col>
                  <Col xs={false} md="2" className="packageContainer">
                    <img src={require('../img/86.png')}  className="eikonidio" alt="1st icon of our trade" />
                    <p className="img__caption">Monitor Easily your Betting History</p>
                  </Col>
                  <Col xs={false} md="2" className="packageContainer">
                    <img src={require('../img/87.png')}  className="eikonidio" alt="1st icon of our trade" />
                    <p className="img__caption">You Can Cash Out 24/7</p>
                  </Col>
                  <Col xs={false} md="2" className="packageContainer">
                    <img src={require('../img/88.png')}  className="eikonidio" alt="1st icon of our trade" />
                    <p className="img__caption">Free Indicators to Help you Trade out</p>
                  </Col>
                  <Col xs={false} md="2" className="packageContainer">
                    <img src={require('../img/89.png')}  className="eikonidio" alt="1st icon of our trade" />
                    <p className="img__caption">250+ Live Options and Tables</p>
                  </Col>
              </Row>

              <div className="buttonContainer">
                <button className="btn2 btn--green btn--body2">
                  <p className="btn__txt">START PLAYING WITH 65%<br></br>EXTRA CREDIT </p>
                </button>
              </div>
              <p className="riskWarn riskWarn--body2">Your capital is at risk</p>

          </Container>
          <div className="disclaimer text-center">

              <Container className="disclaimer--container">
                  <p className="disclaimer__text">*Please note that playing in NAWinbet carries a high level of losing your capital <br></br>This may not be suitable for everyone and you should ensure that you understand the risks involved. If you need support call the Greek Gambling Addiction Line at <tel>+30697441</tel>.</p>
                  <img src={require('../img/red.png')} alt="" className="redElement" />
              </Container>

          </div>

      </div>
     );
   }

}

export default Body2;
