import paintings from "./paintings.json";
import PaintingsList from "./components/PaintingsList";
import Section from "./components/Section";

export default function App() {
  return (
    <div>
      <Section title="Топ недели">
        <PaintingsList items={paintings} />
      </Section>
      <Section title="Лучшее"></Section>
    </div>
  );
}
