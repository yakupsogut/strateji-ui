"use client";

import { Card } from "@/components/ui/card";
import { StratejiButton } from "@/components/ui/strateji-button";
import { Globe, File, Monitor } from "lucide-react";

export default function StratejiButtonDoc() {
  return (
    <div className="container mx-auto py-10">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Strateji Button</h1>
          <p className="text-muted-foreground">
            Modern ve özelleştirilebilir Strateji UI düğme bileşeni.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Örnekler</h2>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Varyantlar</h3>
            <div className="flex flex-wrap gap-4">
              <StratejiButton variant="primary">Primary</StratejiButton>
              <StratejiButton variant="secondary">Secondary</StratejiButton>
              <StratejiButton variant="outline">Outline</StratejiButton>
              <StratejiButton variant="text">Text</StratejiButton>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Boyutlar</h3>
            <div className="flex flex-wrap items-center gap-4">
              <StratejiButton size="small">Small</StratejiButton>
              <StratejiButton size="normal">Normal</StratejiButton>
              <StratejiButton size="medium">Medium</StratejiButton>
              <StratejiButton size="large">Large</StratejiButton>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">İkonlu Kullanım</h3>
            <div className="flex flex-wrap gap-4">
              <StratejiButton icon={<Globe className="w-4 h-4" />}>
                Globe Icon
              </StratejiButton>
              <StratejiButton variant="secondary" icon={<File className="w-4 h-4" />}>
                File Icon
              </StratejiButton>
              <StratejiButton variant="outline" icon={<Monitor className="w-4 h-4" />}>
                Monitor Icon
              </StratejiButton>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Tam Genişlik</h3>
            <div className="space-y-4">
              <StratejiButton fullWidth>Tam Genişlik Button</StratejiButton>
              <StratejiButton variant="secondary" fullWidth>
                Tam Genişlik Secondary
              </StratejiButton>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Durumlar</h3>
            <div className="flex flex-wrap gap-4">
              <StratejiButton disabled>Disabled</StratejiButton>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Kullanım</h2>
          <Card className="p-6">
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`import { StratejiButton } from "@/components/ui/strateji-button"

// Temel kullanım
<StratejiButton>Click me</StratejiButton>

// Varyant ile kullanım
<StratejiButton variant="primary">Primary</StratejiButton>
<StratejiButton variant="secondary">Secondary</StratejiButton>
<StratejiButton variant="outline">Outline</StratejiButton>
<StratejiButton variant="text">Text</StratejiButton>

// Boyut ile kullanım
<StratejiButton size="small">Small</StratejiButton>
<StratejiButton size="normal">Normal</StratejiButton>
<StratejiButton size="medium">Medium</StratejiButton>
<StratejiButton size="large">Large</StratejiButton>

// İkonlu kullanım
<StratejiButton icon={<Globe className="w-4 h-4" />}>
  Globe Icon
</StratejiButton>

// Tam genişlik
<StratejiButton fullWidth>Tam Genişlik</StratejiButton>

// Disabled durumu
<StratejiButton disabled>Disabled</StratejiButton>`}</code>
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
                  Type: &quot;primary&quot; | &quot;secondary&quot; | &quot;outline&quot; | &quot;text&quot;
                </p>
              </div>
              <div>
                <h3 className="font-semibold">size</h3>
                <p className="text-sm text-muted-foreground">
                  Type: &quot;small&quot; | &quot;normal&quot; | &quot;medium&quot; | &quot;large&quot;
                </p>
              </div>
              <div>
                <h3 className="font-semibold">fullWidth</h3>
                <p className="text-sm text-muted-foreground">
                  Type: boolean
                </p>
              </div>
              <div>
                <h3 className="font-semibold">icon</h3>
                <p className="text-sm text-muted-foreground">
                  Type: React.ReactNode
                </p>
              </div>
              <div>
                <h3 className="font-semibold">disabled</h3>
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