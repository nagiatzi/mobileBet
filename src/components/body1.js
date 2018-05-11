import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './body1.css';


class Body1 extends Component {

    render() {
      return (
        <div className="text-center black2Bg">
          <Container>
              <div className="bodyElement bodyElement__1">
                  <p className="bodyElement__title">DEPOSIT</p>
                  <p className="bodyElement__text"> <span className="bodyElement__text--green">Fund</span><br />your account in a few clicks and choose to pay with <br />more than 50 international and local payment methods</p>
              </div>

              <div className="bodyElement bodyElement__2">
                  <p className="bodyElement__title">RECEIVE BONUS</p>
                  <p className="bodyElement__text"> <span className="bodyElement__text--green">65%</span> <br/>of the amount you deposited will be automatically added <br />to your acount balance and can be used straight away</p>
              </div>

              <div className="bodyElement bodyElement__3">
                  <p className="bodyElement__title">TRADE OUT</p>
                  <p className="bodyElement__text bodyElement__text--last"> <span className="bodyElement__text--green">Win</span><br /> process of placing a bet on the opposite outcome to a bet you have already placed<br />thanks to our machine learning algorithm</p>
              </div>
          </Container>
      </div>
     );
   }

}

export default Body1;
