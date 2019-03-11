import Section from "./section";

var headingText = "Future of front-end and interfaces";

export default () => (
  <Section clean wide>
    <div className="splash">
      <div className="inner">
        <div className="fade" />
        <div className="text">
          <h2>
            We organizes events shaping the future of front-end and interfaces
            in Copenhagen, Denmark.
          </h2>

          <a
            className="btn btn-primary btn-primary-shadow ticket"
            data-text="Our events"
            href="/#events"
          >
            Our events <i className="fas fa-arrow-down" />
          </a>
        </div>

        <div className="social">
          <blockquote>
            "I always go to Coldfront with the expectation of learning a couple
            of nice little things, and get home being unable to sleep because of
            all the cool new things I've learned"
          </blockquote>
          <p>Thomas Grinderslev, EduLab</p>
          <img src="/static/images/quotes/thomas-grinderslev.jpg" />
        </div>
      </div>

      <style jsx>
        {`
          .splash {
            position: relative;
            box-sizing: border-box;
            padding-top: 100px;
            margin-left: -17px;
            margin-right: -17px;

            min-height: 500px;

            background-image: url("/static/images/coldfront_2018_1.jpg");
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;

            @media (max-width: 1000px) {
              margin-left: 0;
              margin-right: 0;
              padding-top: 170px;
            }

            .inner {
              padding-left: 117px;
              padding-right: 117px;
            }

            @media (max-width: 1000px) {
              .inner {
                padding-left: 17px;
                padding-right: 17px;
              }

              h2 {
                font-size: 30px;
              }

              .social {
                display: none;
              }
            }

            .fade {
              position: absolute;
              top: 0;
              bottom: 0;
              right: 0;
              left: 0;
              opacity: 1;
              background: rgba(0, 0, 0, 0.6);
              z-index: 1;
            }

            .text {
              padding: 0 80px 0 0;
              max-width: 580px;
              float: left;
              position: relative;
              z-index: 2;
            }

            h2 {
              margin-bottom: 40px;
            }

            .date {
              font-size: 20px;
              margin-bottom: 50px;
            }

            .title {
              width: 520px;
              margin-right: auto;
              margin-left: auto;

              @media (max-width: 1000px) {
                width: auto;
                max-width: 350px;
              }
            }

            .ticket {
              margin-bottom: 100px;
            }

            .social {
              float: right;
              padding: 20px 0;
              text-align: center;
              font-size: 16px;

              position: relative;
              z-index: 2;
            }

            .social img {
              height: 60px;
              width: 60px;
              border-radius: 60px;
            }

            blockquote {
              max-width: 300px;
              font-weight: bold;
            }
            .img {
              width: 100%;
            }

            .btn-splash {
              margin-top: 40px;

              a {
                .fa-arrow-right {
                  margin-left: 10px;
                }
              }

              button {
                background-color: #8f23f5;
                border: none;
                color: white;
                border-radius: 0;
                padding: 6%;
                width: 100%;

                a {
                  color: white;

                  &:hover {
                    text-decoration: none;
                  }
                }
              }

              p {
                color: #8f23f5;
                font-size: 20px;
                line-height: 2.6;
                letter-spacing: 0.7px;
              }
            }
          }
        `}
      </style>
    </div>
  </Section>
);
