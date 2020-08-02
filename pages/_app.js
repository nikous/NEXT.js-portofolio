/* eslint-disable react/jsx-props-no-spreading */
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { AnimatePresence } from 'framer-motion';
import App from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    );
  }
}

export default MyApp;
