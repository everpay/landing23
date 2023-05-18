import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    height: 100%;
    min-height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #e7e9f4;;
`;

export const Logo = styled.div`
  margin-left: -41px;
  margin-top: 1px;
`;


export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #1f1f30;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #1f1f30;
  font-weight: 700;
  font-size: 32px;

  justify-content: center;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
    background: hsla(0,0%,100%,.8);
    border-radius: 12px;
    box-shadow: 0 0 3px rgba(4,4,52,.09), 0 4px 8px rgba(4,4,52,.05), 0 6px 12px rgba(4,4,52,.02);
    width: 100%;
    max-width: 320px;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 20px 30px 20px 30px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 36px 36px;
  }
`;

export const FormH1 = styled.h1`
   align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;
    max-width: 360px;
    width: 100%;
  color: "#1f1f30";
  font-size: 32px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 36px;
  text-align: center;
`;
export const FormLabel = styled.label`
  margin-bottom: 10px;
  text-align: left;
  font-size: 14px;
  color: #1f1f30;
`;

export const FormInput = styled.input`
    align-items: center;
    background: linear-gradient(1turn,rgba(239,239,253,.1),rgba(239,239,253,.2)),#fff;
    border: 1px solid #e4e5fc;
    border-radius: 8px;
    box-sizing: border-box;
    color: #9d9db0;
    display: flex;
    flex-flow: row nowrap;
    padding: 9px 13px;
    width: 100%;
    margin-bottom: 32px;
`;
export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #1f1f30;
  font-size: 14px;
`;
