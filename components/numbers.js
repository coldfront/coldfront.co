import Section from './section'

export default ({ children }) => (

    <Section className="">

        <div className="narrow">
            <h3>ColdFront by the numbers</h3>
        </div>

        <div className="narrow by-the-numbers">

            <div className="facts">
                <ul>
                    <li>
                        <strong>6</strong>
                        <span>years</span>
                    </li>

                    <li>
                        <strong>10</strong>
                        <span>events</span>
                    </li>

                    <li>
                        <strong>100+</strong>
                        <span>speakers</span>
                    </li>

                    <li>
                        <strong>2.000+</strong>
                        <span>attendees</span>
                    </li>


                </ul>




            
            </div>

            <div className="description">
                <p>ColdFront, founded in 2014, has since it's inception taken a holistic look at the front-end industry and organized events that's been on the forefront of what's next.</p>

                <p>The front-end role has evolved, and yet our conferences are still focused around a religious set of technologies.</p>
                
                <p>With ColdFront we are changing that by focusing on the challenges of building a modern interface and a front-end that runs everywhere.</p>

                <p>
                    <a className="btn btn-primary btn-primary-shadow" data-text="More about us" href="/about">More about us</a>
                </p>
            </div>
        
        </div>

        <style jsx>{`
            .by-the-numbers {
                display: flex;

                @media (max-width: 1000px) {
                    display: block;
                
                }

                .facts {
                    width: 300px;
                    margin-top: 30px;
                
                    li {
                        list-style: none;
                        font-size: 14px;
                        
                        strong {
                            display: inline-block;
                            width: 140px;
                            text-align: right;
                            font-size: 40px;
                            padding-right: 10px;
                        }

                    }

                }

                .description {
                    flex: 1;
                    padding-top: 20px;

                    .btn {
                        margin-top: 40px;
                    }
                }
            }
          `}
        </style>
    </Section>
)
