import React from 'react'
import { initGA, logPageView } from '../utils/ga'
import ReactPixel from 'react-facebook-pixel'
import Head from 'next/head'

import Header from './header'
import Footer from './footer'

export default class Layout extends React.Component {

  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      ReactPixel.init('592531964472978');
      window.GA_INITIALIZED = true
    }
    logPageView()
    ReactPixel.pageView();     
  }
  render () {
    return (
      <div>
        <Head>
            <title>{this.props.title ? this.props.title + ` - ` : ''}ColdFront - events shaping the future of front-end.</title>
            <meta property="og:title" content={ (this.props.title ? this.props.title + ` - ` : ``) + `ColdFront`} />
            <meta property="og:description" content="Events shaping the future of front-end." />
            <meta property="og:url" content="https://coldfront.co/" />
            <meta property="og:site_name" content="ColdFront"/>
            <meta property="og:image" content="https://coldfront.co/static/images/social.png"/>
            <meta property="og:type" content="website"/>

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@coldfrontconf" />
            <meta name="twitter:creator" content="@coldfrontconf" />
            <meta name="twitter:title" content={ (this.props.title ? this.props.title + ` - ` : ``) + `ColdFront`} />
            <meta name="twitter:description" content="Events shaping the future of front-end." />
            <meta name="twitter:image:src" content="https://coldfront.co/static/images/social.png" />
        </Head>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}