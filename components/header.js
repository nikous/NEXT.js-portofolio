/* eslint-disable prefer-const */
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import { render } from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      closed: true,
      active: true,
    };
  }

  mobileNav() {
    this.setState((prevState) => ({ closed: !prevState.closed }));
  }

  change() {
    this.setState((prevState) => ({ active: !prevState.active }));
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    let close = this.state.closed
      ? 'Navbarmobile d-block d-md-none'
      : ' Navbarmobileclose d-block d-md-none';
    // eslint-disable-next-line react/destructuring-assignment
    let opened = this.state.active
      ? ' btn shadow-none not-open'
      : '  btn shadow-none open';
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <div className="container-fluid my-4 ">
          <div className="row">
            <div className="col-4">
              <div className="nav-logo float-left">
                <Link href="/index">
                  <a>Logo</a>
                </Link>
              </div>
            </div>
            <div className="col-8">
              <div className="nav-buttons float-right d-none d-md-block">
                <ul className="list inline ">
                  <li className="list-inline-item pr-3">
                    <Link href="/About">
                      <a>About me</a>
                    </Link>
                  </li>
                  <li className="list-inline-item pr-3">
                    <Link href="/Contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li className="list-inline-item pr-3">
                    <Link href="/Portofolio">
                      <a>Portofolio</a>
                    </Link>
                  </li>
                  <li className="list-inline-item ">
                    <Link href="/Blog">
                      <a>Blog</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="button  float-right d-block d-md-none">
                <button
                  className={opened}
                  label="hamburger"
                  type="button"
                  id="nav-icon1"
                  onClick={(e) => {
                    this.mobileNav();
                    this.change();
                  }}
                >
                  <span />
                  <span />
                  <span />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile">
          <div className={close}>
            <ul className="list-group mobilelist">
              <li className="list-group-item pr-3">
                <Link href="#">
                  <a>About me</a>
                </Link>
              </li>
              <li className="list-group-item pr-3">
                <Link href="/Contact">
                  <a>Contact</a>
                </Link>
              </li>
              <li className="list-group-item pr-3">
                <Link href="/Portofolio">
                  <a>Portofolio</a>
                </Link>
              </li>
              <li className="list-group-item ">
                <Link href="/Blog">
                  <a>Blog</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
