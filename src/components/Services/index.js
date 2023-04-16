import React from "react";
import {
  ServicesCard,
  ServicesBreak,
  ServicesContainer,
  ServicesTopLineH2,
  ServicesTopLineP,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import Icon4 from "../../images/svg-4.svg";
import Icon5 from "../../images/svg-5.svg";
import Icon6 from "../../images/svg-6.svg";

const Services = () => {
  return (
    <ServicesContainer id="services">
<ServicesTopLineH2>Scale your business with Everpay</ServicesTopLineH2>
      <ServicesH1>Solutions For All Businesses Types</ServicesH1>
      <ServicesTopLineP>Save time and money with accepting borderless payments, subscription billing, managing invoices, accepting alternative payment methods, payout management, and much more. All from one account.</ServicesTopLineP>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Global Payments</ServicesH2>
          <ServicesP>Accept customer payments from 173+ countries worldwide.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Reduce Churn</ServicesH2>
          <ServicesP>Boost subscription revenue 10% monthly, cut churn rate to 1%.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>No Hidden Fees</ServicesH2>
          <ServicesP>Enjoy the lowest transfer fees with straight transparent pricing.</ServicesP>
        </ServicesCard> 
      </ServicesWrapper>
       <ServicesBreak></ServicesBreak>   
       <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>All In One Place</ServicesH2>
          <ServicesP>Scale faster, No need for apps, separate accounts or software.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Global Payouts</ServicesH2>
          <ServicesP>Save time and costs with our real-time crypto payouts solution.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Data Security</ServicesH2>
          <ServicesP>Protect your processing, business and keep sensitive data secure.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
