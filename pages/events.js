import Section from '../components/section'
import Layout from '../components/layout'
import Intro from '../components/intro'

import Events from '../components/events'

class events extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            speakers: []
        }
    }

    componentDidMount() {
    }

    render() {   
        return (
            <Layout title="Our events in 2019">

                <Section>
                    <div className="narrow">
                        <Events />
                    </div>

                </Section>


            </Layout>
        )
    }
}

export default events;
