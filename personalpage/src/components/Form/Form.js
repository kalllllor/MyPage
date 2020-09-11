import React, { Component } from "react";
import styled from "components/Form/Form.module.scss";
import Button from "components/atoms/Button/Button";
import Input from "components/atoms/Input/Input";
import Textarea from "components/atoms/Textarea/Textarea";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      name: ``,
      email: ``,
    };
  }

  render() {
    const { message, name, email } = this.state;
    console.log(message);
    return (
      <div className={styled.Wrapper}>
        <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
          <div className={styled.InputWrapper}>
            <Textarea
              onChange={(e) => this.setState({ message: e.target.value })}
              name="message"
              className="input message-input"
              type="text"
              value={message}
              required
            />
            <span className={styled.bar} />
            <label>Your Message</label>
          </div>
          <div className={styled.InputWrapper}>
            <Input
              required
              onChange={(e) => this.setState({ name: e.target.value })}
              name="name"
              className="input message-name"
              type="text"
              value={name}
            />
            <span className={styled.bar} />
            <label>Your Name</label>
          </div>
          <div className={styled.InputWrapper}>
            <Input
              required
              onChange={(e) => this.setState({ email: e.target.value })}
              name="email"
              className="input message-email"
              type="text"
              value={email}
            />
            <span className={styled.bar} />
            <label>Your Email</label>
          </div>
          <div className="contact__button">
            <Button wide type="submit" className={styled.Button}>
              Send
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
