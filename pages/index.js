/* eslint-disable no-sequences */
/* eslint-disable react/jsx-curly-newline */
import React, { useState, useEffect } from 'react';
import storage from 'local-storage-fallback';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/header';
import styles from './index.module.css';

const GlobalStyle = createGlobalStyle`
body{
    background-color:${(props) =>
      props.theme.mode === 'dark' ? '#242f49' : '#fff'}; 
}   

h1{
  color: ${(props) =>
    props.theme.mode === 'dark' ? '#fff' : '#111'}!important;
}

li a{
  color: ${(props) =>
    props.theme.mode === 'dark' ? '#fff' : '#111'}!important;
}

.light{
  background: ${(props) =>
    props.theme.mode === 'dark' ? '#fff' : '#242f49'}!important;
}
}
.hamburger-inner,.hamburger-inner::before,.hamburger-inner::after{
  background: ${(props) =>
    props.theme.mode === 'dark' ? '#fff' : '#242f49'}!important;
}
`;

function getinitialTheme() {
  const savedTheme = storage.getItem('theme');
  return savedTheme ? JSON.parse(savedTheme) : { mode: 'light' };
}
function homepage() {
  const [theme, setTheme] = useState(getinitialTheme);
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    storage.setItem('theme', JSON.stringify(theme)), [theme];
  });

  return (
    <motion.div className={styles.main} exit={{ opacity: 0 }}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Container fluid className="homepage">
            <Row>
              <Header />
            </Row>
            <Row className={styles.row}>
              <Col className={styles.home}>
                <Row>
                  <div className={styles.intro}>
                    <Col xs={12} className="name">
                      <h1> NICK PAPOIKONOMOU</h1>
                    </Col>
                    <Col xs={12} className={styles.introh3}>
                      <h3>WEB DEVELOPER</h3>
                    </Col>
                    <Col xs={12} className={styles.introh3}>
                      <div className={styles.typewriter}>
                        <div className={styles.typewriterText}>
                          Twinkle, twinkle, little star.
                        </div>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <button
                        label="Light-button"
                        className="btn shadow-none light"
                        type="button"
                        onClick={(e) =>
                          setTheme(
                            theme.mode === 'dark'
                              ? { mode: 'light' }
                              : { mode: 'dark' }
                          )
                        }
                      />
                    </Col>
                  </div>
                </Row>
              </Col>
            </Row>
            <Row />
          </Container>
        </>
      </ThemeProvider>
    </motion.div>
  );
}

export default homepage;
