import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './hero.css';
import './banner.css';


class Banner extends Component {

    componentDidMount() {
      var secUI = document.querySelector(".timerText__sec2");
      var minUI = document.querySelector(".timerText__mins2");
      var hourUI = document.querySelector(".timerText__hours2");

      //init vars to control timer and sumTimers

      var sec = 59;
      var min = 59;
      var hours = 23;

      var countSeconds = 0;
      var countMinites = 0;
      // eslint-disable-next-line
      var countHours = 0;

      // i count until 59 bacause i also use 00,, so 59 + (1) = 60
      function myTimer() {

        sec -= 1;
        countSeconds += 1;

        if (countSeconds > 59) {
          countSeconds = 0;
          sec = 59;
          countMinites += 1;
          min -= 1;
        }

        if ( countMinites > 59 ) {
          countMinites = 0;
          min = 59;
          countHours += 1;
          hours -= 1;
        }

      //render UI clock results

        if (sec < 10) {
          secUI.textContent = '0' + sec;
        } else {
          secUI.textContent = sec;
        }

        if (min < 10) {
          minUI.textContent = '0'+ min;
        } else {
          minUI.textContent = min;
        }

        if (hours < 10) {
          hourUI.textContent = '0' + hours;
          if ( hours === 0 ) {
              if ( min  === 0 && sec === 0) {
                  clearClock();
              }
          }
        } else {
          hourUI.textContent = hours;
        }

      }; //myTimer function End

      //assign it to a variable so i can use the clearInterval method
      var miClock = setInterval(myTimer, 1000);

      //clear the Interval

      function clearClock() {
        clearInterval(miClock);
      };
    }

    render() {
      return (
        <div className="banner">
          <Container className="container-fluid banner--border">

            <Row>
                <Col xs={false} md="7">
                    <h1 className="banner__title">JOIN THE GAME  WITH<br></br>65% ADDED CREDIT</h1>
                    <p className="banner__text">For 24 hours only our new players are offered the opportunity to receive an added 65% credit on their first deposit!</p>
                </Col>
                <Col xs={false} md="5" className="banner__timer">
                  <div className="timerWrapper">
                      <p className="timerText"><span className="timerText__hours2">23</span><span className="timerText__hours--small">hr</span> : <span className="timerText__mins2">59</span><span className="timerText__mins--small">min</span> : <span className="timerText__sec2">59</span><span className="timerText__sec--small">sec</span></p>
                  </div>
                </Col>

            </Row>

          </Container>

      </div>
     );
   }

}

export default Banner;











/*
<!--banner article section-->
  <article className="banner">

    <div className="container-fluid banner--border">

      <div className="row">

        <div className="col-md-7">
          <h1 className="banner__title">JOIN THE GAME  WITH<br>65% ADDED CREDIT</h1>
          <p className="banner__text">For 24 hours only our new players are offered the opportunity to receive an added 65% credit on their first deposit!</p>
        </div>

        <div className="col-md-5 banner__timer">
          <div className="timerWrapper">
            <p className="timerText"><span className="timerText__hours">23</span><span className="timerText__hours--small">hr</span> : <span className="timerText__mins">59</span><span className="timerText__mins--small">min</span> : <span className="timerText__sec">59</span><span className="timerText__sec--small">sec</span></p>
          </div>
        </div>

      </div> <!--row end-->

    </div> <!--container end-->

  </article>
*/
