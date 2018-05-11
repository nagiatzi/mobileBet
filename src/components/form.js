import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { database } from './firebase';
import './form.css';



class Form extends Component {

  constructor(props) {
    super(props);

    this._initState = {
        name: "",
        email: "",
        subject: "",
        text: "",
      }

    this.state = this._initState;

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._resetState = this._resetState.bind(this);
  }

    componentDidMount() {
      this.dataRef = database.ref('/FormData');
    }

    handleChange(event) {
      this.setState({name: event.target.value});
    }

    handleChangeMail(event) {
      this.setState({email: event.target.value});
    }

    handleChange2(event) {
      this.setState({subject: event.target.value});
    }

    handleChangeText(event) {
      this.setState({text: event.target.value});
    }

    _resetState() {
       this.setState(this._initState);
    }

    handleSubmit(event) {
      console.log('A name was submitted: ' + this.state.name + 'and the subject is ' + this.state.subject + ' with email  ' + this.state.email + 'and the text is ' + this.state.text);
      event.preventDefault();
      this.dataRef.child("user").push(this.state.name + " " + this.state.subject + " mail:" + this.state.email + " keimeno  " + this.state.text);
      alert("Thank you for contacting us  " +this.state.name + " we will get back to you soon!");
      this._resetState();
    }

    render() {
      return (
        <div className="text-center form--background" id="contact" >

        <Container>

          <Row>
            <Col xs={false} sm="12">
            <h1 className="form__title">Contact us</h1>
            <p className="marginB formIntro"> If you have any questions, or need more information please do not hesitate to contact us by calling <a href="tel:+306974419053"> (+30) 6974419053</a> or by completing the form above:</p>
            </Col>
          </Row>

          <Row>

              <Col xs={false} md="8" className="offset-md-2">
                    <form id="contact" className="row contact-form " onSubmit={this.handleSubmit} >

                        <Col xs={false} sm="6">
                            <div className="form-field-wrapper">
                                <input id="form-name" type="text" name="form-name" value={this.state.name} placeholder="Your Name" onChange={this.handleChange} />
                            </div>
                        </Col>

                        <Col xs={false} sm="6">
                            <div className="form-field-wrapper">
                                <input id="form-email" type="email" name="form-email" value={this.state.email} onChange={this.handleChangeMail} placeholder="Email" required />
                            </div>
                        </Col>

                        <Col xs={false} sm="12">
                            <div className="form-field-wrapper">
                                <input id="form-subject" type="text" value={this.state.subject} name="form-subject" placeholder="Subject" onChange={this.handleChange2}/>
                            </div>
                        </Col>

                        <Col xs={false} sm="12">
                            <div className="form-field-wrapper">
                                <textarea id="form-message" rows="5" name="form-message" value={this.state.text} onChange={this.handleChangeText} placeholder="Your Message"></textarea>
                            </div>
                        </Col>

                        <Col xs={false} sm="12">
                            <button className="btn2 btn--green form__btn" type="submit" id="form-submit" name="submit">Send Message</button>
                        </Col>

                    </form>

              </Col>

          </Row>

        </Container>

      </div> //div to be returned --end
     );

   } //render --end

} //class --end

export default Form;
