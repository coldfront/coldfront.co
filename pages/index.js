import Splash from '../components/splash'
import Section from '../components/section'
import WideSection from '../components/wideSection'
import NewsletterForm from '../components/newsletterForm'
import Partners from '../components/partners'
import ByTheNumbers from '../components/numbers'

import Events from '../components/events'

import Footer from '../components/footer'
import Layout from '../components/layout'

export default () => (
  <Layout>
        <Splash />

        <Events />

        <Section>
            <div className="newsletter-wrapper narrow">
                <h3>Don't miss out! Get the latest news</h3>
                <p>We have a many exciting events planned for 2019, so sign up to stay in the loop and get the announcements before everyone else!</p>
                <NewsletterForm />
            </div>
        </Section>

        <ByTheNumbers />

        <Partners />
        
  </Layout>
)
