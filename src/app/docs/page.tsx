"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";

const components = [
  {
    name: "Button",
    description: "Etkileşimli düğme bileşeni",
    href: "/docs/components/button",
  },
  {
    name: "Alert",
    description: "Bildirim ve uyarı bileşeni",
    href: "/docs/components/alert",
  },
  {
    name: "Toast",
    description: "Geçici bildirim bileşeni",
    href: "/docs/components/toast",
  },
  {
    name: "Card",
    description: "İçerik kartı bileşeni",
    href: "/docs/components/card",
  },
];

export default function DocsPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Strateji UI Dokümantasyonu</h1>
          <p className="text-muted-foreground">
            Modern ve kullanımı kolay React bileşenleri koleksiyonu
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {components.map((component) => (
            <Link key={component.name} href={component.href}>
              <Card className="p-6 hover:bg-muted/50 transition-colors">
                <h2 className="font-semibold">{component.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {component.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 