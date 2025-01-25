import { Button } from "@/lib/strateji-ui";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold">Strateji UI Bileşen Test Sayfası</h1>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Button Bileşenleri</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="destructive">Destructive Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg">Large Button</Button>
            <Button size="default">Default Size</Button>
            <Button size="sm">Small Button</Button>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button disabled>Disabled Button</Button>
            <Button isLoading>Loading Button</Button>
          </div>
        </section>
      </div>
    </main>
  );
}
