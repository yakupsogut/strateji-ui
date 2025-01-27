"use client";

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonDoc() {
  return (
    <div className="container mx-auto py-10">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Skeleton</h1>
          <p className="text-muted-foreground">
            Sayfa yüklenirken içerik yerleşimini gösteren yükleme durumu bileşeni.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Örnekler</h2>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Temel Kullanım</h3>
            <div className="space-y-4">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Kart Yükleme</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Liste Yükleme</h3>
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Kullanım</h2>
          <Card className="p-6">
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`import { Skeleton } from "@/components/ui/skeleton"

// Temel kullanım
<Skeleton className="h-4 w-[250px]" />

// Kart yükleme
<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>

// Liste yükleme
{Array.from({ length: 3 }).map((_, i) => (
  <div key={i} className="flex items-center space-x-4">
    <Skeleton className="h-12 w-12" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
))}`}</code>
            </pre>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Props</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">className</h3>
                <p className="text-sm text-muted-foreground">
                  Type: string
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Tailwind CSS sınıfları ile özelleştirilebilir: width, height, padding, margin, border-radius vb.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 