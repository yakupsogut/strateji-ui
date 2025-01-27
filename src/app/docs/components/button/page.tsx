"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ButtonDoc() {
  return (
    <div className="container mx-auto py-10">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Button</h1>
          <p className="text-muted-foreground">
            Etkileşimli eylemler için kullanılan düğme bileşeni.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Örnekler</h2>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Varyantlar</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Boyutlar</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg">Large</Button>
              <Button size="default">Default</Button>
              <Button size="sm">Small</Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Durumlar</h3>
            <div className="flex flex-wrap gap-4">
              <Button disabled>Disabled</Button>
              <Button isLoading>Loading</Button>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Kullanım</h2>
          <Card className="p-6">
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`import { Button } from "@/components/ui/button"

// Temel kullanım
<Button>Click me</Button>

// Varyant ile kullanım
<Button variant="destructive">Delete</Button>

// Boyut ile kullanım
<Button size="lg">Large Button</Button>

// Özel durumlar
<Button disabled>Disabled</Button>
<Button isLoading>Loading</Button>`}</code>
            </pre>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Props</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">variant</h3>
                <p className="text-sm text-muted-foreground">
                  Type: &quot;default&quot; | &quot;destructive&quot; | &quot;outline&quot; | &quot;secondary&quot; | &quot;ghost&quot; | &quot;link&quot;
                </p>
              </div>
              <div>
                <h3 className="font-semibold">size</h3>
                <p className="text-sm text-muted-foreground">
                  Type: &quot;default&quot; | &quot;sm&quot; | &quot;lg&quot;
                </p>
              </div>
              <div>
                <h3 className="font-semibold">disabled</h3>
                <p className="text-sm text-muted-foreground">
                  Type: boolean
                </p>
              </div>
              <div>
                <h3 className="font-semibold">isLoading</h3>
                <p className="text-sm text-muted-foreground">
                  Type: boolean
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 