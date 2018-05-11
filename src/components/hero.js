import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './hero.css'


class Hero extends Component {
  componentDidMount() {
    var secUI = document.querySelector(".timerText__sec");
    var minUI = document.querySelector(".timerText__mins");
    var hourUI = document.querySelector(".timerText__hours");

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
      <div className="text-center heroImg">
        <Container>
            <div className="paddingLogo">
              <img src={ require('../img/logo.png')} alt="Our company's logo, NAWinbet logo" width="216px" height="34px"/>
            </div>
            <h1 className="heroText">START TODAY AND GET 65% FREE BONUS</h1>
            <div className="subline">
              <p>Interested in Betting but have limited budget? <br></br> Why not use our added 65% credit bonus to increase your funds?</p>
            </div>
            <div className="timerWrapper">
              <p className="timerWrapper__text">Offer expires in:</p>
              <p className="timerText"><span className="timerText__hours">23</span><span className="timerText__hours--small">hr</span> : <span className="timerText__mins">59</span><span className="timerText__mins--small">min</span> : <span className="timerText__sec">59</span><span className="timerText__sec--small">sec</span></p>
            </div>
            <button className="btn2 btn--green ">
              <p className="btn__txt">CLAIM 65% BONUS*</p>
            </button>
            <p className="riskWarn">Keep in mind, the original Bonus Bet stake is not returned with your winnings<br></br> *Bonus Terms and Conditions Apply</p>
            <p className="maximize">Maximize your chances to Win</p>
        </Container>
    </div>
   );
 }

}

export default Hero;
