"use client";

import { Card } from "@/components/ui/card";

export default function InstallationPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Kurulum</h1>
          <p className="text-muted-foreground">
            Strateji UI'yı projenize nasıl ekleyeceğinizi öğrenin.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">NPM ile Kurulum</h2>
          <Card className="p-6">
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>npm install strateji-ui</code>
            </pre>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Styles Kurulumu</h2>
          <Card className="p-6">
            <p className="mb-4">
              Stil dosyasını projenizin ana dosyasında import edin:
            </p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>import "strateji-ui/styles.css";</code>
            </pre>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Dokümantasyonu Görüntüleme</h2>
          <Card className="p-6">
            <p className="mb-4">
              Dokümantasyonu local'de görüntülemek için aşağıdaki komutu çalıştırın:
            </p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>npx strateji-docs</code>
            </pre>
            <p className="mt-4 text-sm text-muted-foreground">
              Bu komut, dokümantasyon sunucusunu başlatacak ve tarayıcınızda otomatik olarak açılacaktır.
            </p>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Tailwind CSS Yapılandırması</h2>
          <Card className="p-6">
            <p className="mb-4">
              tailwind.config.js dosyanıza aşağıdaki yapılandırmayı ekleyin:
            </p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`module.exports = {
  content: [
    // ...
    "./node_modules/strateji-ui/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("tailwindcss-animate")
  ],
}`}</code>
            </pre>
          </Card>
        </div>
      </div>
    </div>
  );
} 