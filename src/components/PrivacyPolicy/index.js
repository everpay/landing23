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
} from "./PrivacyPolicyElements";

const PrivacyPolicy = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/"><Logo><img src='https://res.cloudinary.com/lmj6rf6tz/image/upload/v1681518139/img/LogoSqr.png' width={42} height={42} alt='Everpay'/></Logo>
             Everpay</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Privacy policy</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>
              New user?{" "}
              <Link to="/signup" style={{ color: "#01bf71" }}>
                Apply now
              </Link>
            </Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export const SignUp = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/"><Logo><img src='https://res.cloudinary.com/lmj6rf6tz/image/upload/v1681518139/img/LogoSqr.png' width={42} height={42} alt='Everpay'/></Logo>
             Everpay</Icon>
       
      </FormWrap>
    </Container>
  );
};

export default PrivacyPolicy;
