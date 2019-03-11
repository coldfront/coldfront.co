import Section from "../../components/section";
import Layout from "../../components/layout";
import Intro from "../../components/intro";

export default () => (
  <Layout title="ColdFront Masterclasses">
    <Section>
      <Intro
        title="ColdFront Masterclasses"
        text="We are proud to be able to offer our first ColdFront Masterclasses in the spring of 2019 lead by Smashing Magazine for the curious front-end
        developer and designer."
      />
    </Section>
    <Section bright>
      <div className="narrow">
        <h2>Masterclasses with Smashing Magazine</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elit
          orci, dapibus non felis eu, vestibulum bibendum tellus. Fusce nec diam
          tortor. Quisque ut rutrum eros, sed convallis neque. Etiam suscipit
          tortor ac congue fringilla. Nullam eu facilisis risus. Integer urna
          est, semper vel venenatis sit amet, tempus vel augue. Donec convallis
          nisi ligula, egestas auctor ante fringilla sed. Duis faucibus accumsan
          sapien, sed iaculis elit faucibus quis. Quisque bibendum justo ut
          ipsum ultrices tempor. Suspendisse potenti. Sed vitae enim molestie
          dui pulvinar gravida eu nec tellus. Mauris gravida mi nec volutpat
          bibendum. Cras scelerisque aliquet lorem, quis pellentesque turpis
          maximus at. Fusce porta tincidunt ligula non pretium.
        </p>

        <p>
          Morbi vel orci augue. Praesent lobortis orci id elit rutrum rhoncus.
          Sed orci erat, posuere id hendrerit sit amet, egestas a mauris.
          Pellentesque quis nisl tincidunt lacus luctus hendrerit. Etiam tortor
          arcu, volutpat sit amet sapien in, semper cursus nisl. Curabitur
          eleifend purus nisl, et pulvinar nulla elementum sed. Sed sed purus id
          nulla congue interdum in vitae nunc.
        </p>

        <a
          className="btn btn-primary btn-secondary-shadow ticket glitch"
          data-text="Tickets and pricing"
          href="https://ti.to/coldfront/coldfront-marsterclass-2019"
        >
          Tickets and pricing
        </a>
      </div>
    </Section>
  </Layout>
);
