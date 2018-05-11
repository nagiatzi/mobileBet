import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import './footer.css';


class Footer extends Component {

    render() {
      return (
        <div className="myFooter">

        <Container className="footer--container resetPadding">

          <Row className="footer__row">

            <Col xs={false} md="6">
              <p className="footerTitle">Risk warning:</p>
              <p className="footer__mainText">
                Betting and playing in our casino is highly speculative and carries a high level of risk. It is possible to lose all your capital. This may not be suitable for everyone and you should ensure that you understand the risks involved. Seek independent advice if necessary using the phone provided above. Speculate only with funds that you can afford to lose. For more information, please refer to our <span className="footer--whiteText">General Risk Disclosure.</span> Greek Markets and NAWinbet are registered trademarks of NAWinbet Holding PLC.  NAWinbet PLC is authorized and regulated by the Greek Securities and Exchange Commission(the "GreSEC", license no. <span className="footer--whiteText">299/13</span> and registration no. <span className="footer--whiteText">GRE 400152.</span></p>
                <p className="footer--subline"> The address of NAWinbet PLC is  NAWinbet PLC, Pythagoras 7, 69132 Komotini, Greece. For complaints please email us at: <span className="footer--whiteText"> <email>complaints@NAWinbet.com</email></span>
                </p>
            </Col>

            <Col xs={false} md="6">
                <Row className="resetPadding">
                    <Col xs={false} sm="6" lg="4" className="offset-lg-2">
                        <ul className="firstList resetPadding">
                            <li className="footerTitle--2">Legal</li>
                            <li>Privacy Policy</li>
                            <li>Disclaimer</li>
                            <li>Terms and Conditions</li>
                            <li>Complaints</li>
                            <li>Jurisdictions</li>
                        </ul>
                    </Col>

                    <Col xs={false} sm="6" className="resetPadding">
                        <ul className="secondList resetPadding">
                            <li><img src={require("../img/logo3.png")} alt="naWinbet" className="logo3" /></li>
                            <li><img src={require("../img/appstore.png")} alt="appStore Logo" className="socialMedia" /> Get it on <span className="footer--whiteText">App Store</span></li>
                            <li><img src={require("../img/googleplay.png")} alt="GooglePlay logo" className="socialMedia" />Get it on <span className="footer--whiteText">Google Play</span></li>
                            <li><img src={require("../img/twitter.png")} alt="twiiter logo" className="socialMedia" />Follow us <span className="footer--whiteText">Twitter</span></li>
                            <li><img src={require("../img/facebook.png")} alt="Facebook logo" className="socialMedia" />Like us on <span className="footer--whiteText">Facebook</span></li>
                        </ul>
                    </Col>

                </Row>

             </Col>

          </Row>


            <div className="decorativeDiv"></div>

            <div className="finalList">

                    <ul>
                        <li className="visa"><img src={require("../img/l1.png")} alt="visa icon" /></li>
                        <li className="l2"><img src={require("../img/l2.png")} alt="our money payment methods icon" /></li>
                        <li className="l2"><img src={require("../img/l3.png")} alt="our money payment methods icon" /></li>
                        <li className="l2"><img src={require("../img/l4.png")} alt="our money payment methods icon" /></li>
                        <li className="l5"><img src={require("../img/l5.png")} alt="our money payment methods icon" /></li>
                        <li className="l4"><img src={require("../img/l6.png")} alt="our money payment methods icon" /></li>
                        <li className="l3"><img src={require("../img/l7.png")} alt="our money payment methods icon" /></li>
                        <li className="l3"><img src={require("../img/l8.png")} alt="our money payment methods icon" /></li>
                    </ul>

           </div>

        </Container>

      </div> //div to be returned --end
     );

   } //render --end

} //className --end

export default Footer;


/*
<!-- Footer *************************************************************-->
<footer className="myFooter">

<Col xs={false} md="8" className="offset-md-2">
  <img src={require('../img/86.png')}  className="eikonidio" alt="1st icon of our trade" />

  <div className="container footer--container resetPadding">

      <div className="row footer__row">

            <div className="col-md-6">
              <p className="footerTitle">Risk warning:</p>
              <p className="footer__mainText">
                Betting and playing in our casino is highly speculative and carries a high level of risk. It is possible to lose all your capital. This may not be suitable for everyone and you should ensure that you understand the risks involved. Seek independent advice if necessary using the phone provided above. Speculate only with funds that you can afford to lose. For more information, please refer to our <span className="footer--whiteText">General Risk Disclosure.</span> Greek Markets and NAWinbet are registered trademarks of NAWinbet Holding PLC.  NAWinbet PLC is authorized and regulated by the Greek Securities and Exchange Commission(the "GreSEC", license no. <span className="footer--whiteText">299/13</span> and registration no. <span className="footer--whiteText">GRE 400152.</span></p>
                <p className="footer--subline"> The address of NAWinbet PLC is  NAWinbet PLC, Pythagoras 7, 69132 Komotini, Greece. For complaints please email us at: <span className="footer--whiteText"> <email>complaints@NAWinbet.com</email></span>
                </p>
            </div> <!-- 1st outer col -->

            <div className="col-md-6">

                <div className="row resetPadding">

                  <div className="col-sm-6 col-lg-4 offset-lg-2 ">
                    <ul className="firstList resetPadding">
                      <li className="footerTitle--2">Legal</li>
                      <li>Privacy Policy</li>
                      <li>Disclaimer</li>
                      <li>Terms and Conditions</li>
                      <li>Complaints</li>
                      <li>Jurisdictions</li>
                    </ul>
                  </div>

                  <div className="col-sm-6 resetPadding">
                    <ul className="secondList resetPadding">
                      <li><img src="img/logo3.png" alt="image with paying methods available" className="logo3"></li>
                      <li><img src="img/appstore.png" alt="image with paying methods available"> Get it on <span className="footer--whiteText">App Store</span></li>
                      <li><img src="img/googleplay.png" alt="image with paying methods available">Get it on <span className="footer--whiteText">Google Play</span></li>
                      <li><img src="img/twitter.png" alt="image with paying methods available">Follow us <span className="footer--whiteText">Twitter</span></li>
                      <li><img src="img/facebook.png" alt="image with paying methods available">Like us on <span className="footer--whiteText">Facebook</span></li>
                    </ul>
                  </div>

                </div> <!-- inner row end -->

            </div> <!-- 2nd outer col -->


      </div> <!-- row -->

      <div className="decorativeDiv"></div>

      <div className="finalList">
        <ul>
          <li className="visa"><img src="img/l1.png" alt="visa icon"></li>
          <li className="l2"><img src="img/l2.png" alt="our money payment methods icon"></li>
          <li className="l2"><img src="img/l3.png" alt="our money payment methods icon"></li>
          <li className="l2"><img src="img/l4.png" alt="our money payment methods icon"></li>
          <li className="l5"><img src="img/l5.png" alt="our money payment methods icon"></li>
          <li className="l4"><img src="img/l6.png" alt="our money payment methods icon"></li>
          <li className="l3"><img src="img/l7.png" alt="our money payment methods icon"></li>
          <li className="l3"><img src="img/l8.png" alt="our money payment methods icon"></li>
        </ul>
      </div>

  </div> <!-- container-->

</footer>

*/
