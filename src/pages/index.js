import React from 'react';
import styled from 'styled-components';
import { injectIntl, Link } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import Head from '../components/Head';

import Heading1 from '../elements/Heading1';
import Heading2 from '../elements/Heading2';
import Button from '../elements/Button';

import graphicdesign from '../images/graphic-design.png';
import webdesign from '../images/web-design.png';
import branding from '../images/branding.png';
import photography from '../images/photography.png';

const HeroText = styled(Heading1)`
  margin-bottom: 25vh;

  @media (max-width: 849px) {
    margin-bottom: 17vh;
  }
`;

const HeroTextSpan = styled.span`
  background-image: linear-gradient(
    45deg,
    hsl(351, 100%, 63%),
    hsl(32, 100%, 54%)
  );
  padding: 0px 7px 2px 6px;
`;

const Services = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Service = styled.div`
  width: 48.5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2vw;
  margin-bottom: 3%;
  overflow: hidden;

  border-radius: 5px;
  box-shadow: 1px 1px 16px 5px hsla(0, 0%, 50%, 0.22);

  @media (max-width: 849px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4vw;
    margin-bottom: 3vh;
  }
`;

const ServiceImage = styled.img`
  height: 25vh;
  width: 25vh;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5%;
  margin-left: 10%;

  border: 2px solid var(--primary-color-light);

  @media (max-width: 849px) {
    height: 17vh;
    width: 17vh;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 2.5vh;
  }
`;

const ServiceDetails = styled.div`
  display: inline-block;
`;

const ServiceName = styled.h3`
  width: 100%;
  margin-bottom: 1vh;
  line-height: 1.5;

  font-size: 32px;
  background: -webkit-linear-gradient(
    45deg,
    hsl(351, 100%, 63%),
    hsl(32, 100%, 54%)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 849px) {
    font-size: 28px;
  }
`;

const Subservice = styled.h4`
  width: 100%;

  font-weight: 400;
  font-size: 19px;
  line-height: 1.4;
`;

const TextHome = styled.p`
  max-width: 28em;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15vh;

  font-size: 22px;
  line-height: 1.6;
  color: var(--primary-color-light);

  @media (max-width: 849px) {
    font-size: 19px;
  }
`;

function Index({ intl }) {
  return (
    <Layout>
      <Head title={intl.formatMessage({ id: 'home_title' })} />
      <HeroText>
        {intl.formatMessage({ id: 'hero_text' })}{' '}
        <HeroTextSpan>
          {intl.formatMessage({ id: 'hero_text_span' })}
        </HeroTextSpan>
        .
      </HeroText>
      <Heading2>
        {intl.formatMessage({ id: 'secondary_heading1' })}
      </Heading2>
      <Services>
      <Service>
          <ServiceImage src={webdesign} alt="diseño web" />
          <ServiceDetails>
            <ServiceName>
              {intl.formatMessage({ id: 'service2_name' })}
            </ServiceName>
            <Subservice>
              {intl.formatMessage({ id: 'service2_description1' })}
            </Subservice>
            <Subservice>
              {intl.formatMessage({ id: 'service2_description2' })}
            </Subservice>
            <Subservice>
              {intl.formatMessage({ id: 'service2_description3' })}
            </Subservice>
            <Subservice>
              {intl.formatMessage({ id: 'service2_description4' })}
            </Subservice>
            <Subservice>
              {intl.formatMessage({ id: 'service2_description5' })}
            </Subservice>
          </ServiceDetails>
        </Service>
        <Service>
          <ServiceImage src={branding} alt="branding" />
          <ServiceDetails>
            <ServiceName>
              {intl.formatMessage({ id: 'service3_name' })}
            </ServiceName>
            <Subservice>
              {intl.formatMessage({ id: 'service3_description1' })}
            </Subservice>
            <Subservice>
              {intl.formatMessage({ id: 'service3_description2' })}
            </Subservice>
            <Subservice>
              {intl.formatMessage({ id: 'service3_description3' })}
            </Subservice>
            <Subservice>
              {intl.formatMessage({ id: 'service3_description4' })}
            </Subservice>
            <Subservice>
              {intl.formatMessage({ id: 'service3_description5' })}
            </Subservice>
          </ServiceDetails>
        </Service>
        <Service>
          <ServiceImage src={graphicdesign} alt="diseño gráfico" />
          <ServiceDetails>
            <ServiceName>
              {intl.formatMessage({ id: 'service1_name' })}
            </ServiceName>
            <Subservice>
              {intl.formatMessage({ id: 'service1_description1' })}
            </Subservice>
            <Subservice>
              {intl.formatMessage({ id: 'service1_description2' })}
            </Subservice>
            <Subservice>
              {intl.formatMessage({ id: 'service1_description3' })}
            </Subservice>
            <Subservice>
              {intl.formatMessage({ id: 'service1_description4' })}
            </Subservice>
            <Subservice>
              {intl.formatMessage({ id: 'service1_description5' })}
            </Subservice>
          </ServiceDetails>
        </Service>
        <Service>
          <ServiceImage src={photography} alt="fotografia" />
          <ServiceDetails>
            <ServiceName>
              {intl.formatMessage({ id: 'service4_name' })}
            </ServiceName>
            <Subservice>
              {intl.formatMessage({ id: 'service4_description1' })}
            </Subservice>
            <Subservice>
              {intl.formatMessage({ id: 'service4_description2' })}
            </Subservice>
            <Subservice>
              {intl.formatMessage({ id: 'service4_description3' })}
            </Subservice>
            <Subservice>
              {intl.formatMessage({ id: 'service4_description4' })}
            </Subservice>
            <Subservice>
              {intl.formatMessage({ id: 'service4_description5' })}
            </Subservice>
          </ServiceDetails>
        </Service>
      </Services>
      <TextHome>
        {intl.formatMessage({ id: 'home_text1' })}
        <br />
        <br />
        {intl.formatMessage({ id: 'home_text2' })}{' '}
        <span role="img" aria-label="fire">
          🔥
        </span>
        .
      </TextHome>
      <Heading2>
        {intl.formatMessage({ id: 'secondary_heading2' })}
      </Heading2>
      <Link to="/c">
        <Button>{intl.formatMessage({ id: 'cta_button' })}</Button>
      </Link>
    </Layout>
  );
}

export default injectIntl(Index);
