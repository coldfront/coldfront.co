import Section from "./section";

export default ({ children }) => (
  <Section bright>
    <a name="events" />

    <div className="narrow events">
      <h3>Our events in 2019</h3>
    </div>

    <div className="narrow list">
      <div className="list-item bright masterclasses">
        <h4>ColdFront</h4>
        <h2>Masterclasses</h2>
        <p>
          Masterclasses lead by Smashing Magazine for the curious front-end
          developer and designer.
        </p>
        <p className="location">Copenhagen</p>
        <p className="date">June 3 & 4 2019</p>
        <a
          className="btn btn-primary btn-primary-shadow ticket"
          data-text="Our events"
          href="/events/summer-masterclasses"
        >
          Details
        </a>
      </div>

      <div className="list-item bright conf">
        <h4>ColdFront</h4>
        <h2>ColdFront 2019</h2>
        <p>
          Copehagen's front-end conference about the future of front-end and
          interfaces.
        </p>
        <p className="location">Copenhagen</p>
        <p className="date">November 26 + 27 + 28 2019</p>
        <a
          className="btn btn-primary btn-primary-shadow ticket"
          data-text="Our events"
          href="https://2019.coldfront.co"
        >
          Details
        </a>
      </div>

      <div className="list-item bright more">
        <p>Stay tuned...</p>
      </div>
    </div>

    <style jsx>
      {`
        .events {
          h3 {
            margin-bottom: 50px;
          }

          @media (max-width: 1000px) {
            padding: 0;
            h3 {
              font-size: 30px;
            }
          }
        }

        h4 {
          font-size: 13px;
        }

        .masterclasses {
          background-color: rgba(188, 52, 40, 0.4);
        }

        .conf {
          background-color: rgba(22, 19, 244, 0.4);
        }

        .more {
          display: flex;
        }

        .more p {
          align-self: flex-end;
        }

        .btn {
          margin: 30px 0;
        }

        .list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 20px;

          @media (max-width: 1000px) {
            grid-template-columns: repeat(1, 1fr);
          }

          .list-item {
            padding: 40px 40px;

            margin-bottom: 48px;

            .logos {
              max-width: 100%;
            }
          }
        }
      `}
    </style>
  </Section>
);
