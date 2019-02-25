
import Section from '../components/section'
import Layout from '../components/layout'
import Intro from '../components/intro'

export default () => (
    <Layout title="Why ColdFront?">
        <Section>
            <Intro
                title="Why ColdFront?"
                text="The front-end role has evolved, and yet our conferences are still focused around a religious set of technologies. With ColdFront we are changing that by focusing on the challenges of building a modern interface and a front-end that runs everywhere."
                img="/static/images/splash-panel2.jpg"
            />
        </Section>
        <Section bright>
            <div className="narrow">
                <h2>A holistic take on front-end and interfaces</h2>
                <p>ColdFront organizes unique international events for front-end and mobile developers in Copenhagen, Denmark. The front-end role has evolved, and building modern interfaces requires you to be present on many platforms regardless of the technology.</p>

                <p>At Coldfront we are taking a look at the entire stack by throwing events for everyone who are passionate about building front-ends and interfaces. So whether you are a iOS, Android, mobile, web, frontender or something in between, ColdFront is the place to be.</p>
             
                <a className="btn btn-primary btn-secondary-shadow ticket glitch" data-text="Read more on Medium" href="https://medium.com/@auchenberg/coldfront-and-the-need-for-a-holistic-front-end-conference-that-spans-across-communities-and-866831649a8f">
                    Read our Medium article <i className="fas fa-arrow-right"></i>
                </a>
            </div>
        </Section>
    </Layout>
)
