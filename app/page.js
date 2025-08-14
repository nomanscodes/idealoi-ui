import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary" size="small">Small Secondary</Button>
      <Button variant="outline" size="large">Large Outline</Button>
    </div>
  );
}
