import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, skills, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            {subtitle || "I'm the Unknown Developer."}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={750} distance="30px">
          {isMobile ? <SkillsList skills={skills} /> : <SkillsShowcase skills={skills} />}
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <a className="cta-btn cta-btn--hero" href="#about">
              {cta || 'Know more'}
            </a>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

const SkillsShowcase = ({ skills = {} }) => {
  return (
    <div className="hero-skills" style={{ textAlign: 'left' }}>
      <table className="hero-skills__table">
        {Object.entries(skills).map(([category, items]) => (
          <tr>
            <td className="hero-skills__category">{category}</td>
            <td className="hero-skills__items">
              {items.map((item) => (
                <div className="hero-skills__item">{item}</div>
              ))}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

const SkillsList = ({ skills = {} }) => {
  return (
    <div className="hero-skills-list">
      {Object.entries(skills).map(([category, items]) => (
        <div className="hero-skills-list__container">
          <h3 className="hero-skills-list__category">{category}</h3>
          <div className="hero-skills-list__items">
            {items.map((item) => (
              <span className="hero-skills__item">{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Header;
