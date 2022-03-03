import Heading from './components/Heading.js';
import Section from './components/Section.js';

export default function App() {
  return (
    <Section>
      <Heading>Title</Heading>
      <Section >
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading >Sub-heading</Heading>
          <Heading >Sub-sub-heading</Heading>
          <Section>
            <Heading >Sub-sub-sub-heading</Heading>
            <Heading >Sub-sub-sub-heading</Heading>
            <Heading >Sub-sub-sub-heading</Heading>
            <Heading >Sub-sub-sub-sub-heading</Heading>
        </Section>
       </Section>
      </Section>
    </Section>
  );
}
