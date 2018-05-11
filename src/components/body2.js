import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import './body2.css';
import './hero.css';


class Body2 extends Component {

  componentWillMount() {
      var isMobile = false; //initiate as false
      // device detection
      if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
          || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))
      {
          isMobile = true;
      }
      console.log(isMobile);

      if (isMobile) {
        document.getElementsByTagName('video').removeAttribute("autoplay");
      }

  } //componentWillMount --end


    render() {
      return (
        <div className="body2 text-center">
            <div className="fullscreen-bg">
              <video loop muted autoPlay  id="myVideo" className="fullscreen-bg">
                <source src= {require("../video/sport.mp4")} type="video/mp4" />
                <source src= {require("../video/sport.mp4")} type="video/ogv" />
                <source src= {require("../video/sport.mp4")} type="video/webm" />
              </video>
            </div>

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
