import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Icon,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Text,
} from "./ContactUsElements";

const Contact = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">
Contact us
            </Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Contact Us</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>
              New user?{" "}
              <Link to="/contact.php" style={{ color: "#01bf71" }}>
                Send Message
              </Link>
            </Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};
 


export default Contact;
