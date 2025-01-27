"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { Terminal, AlertCircle, Info } from "lucide-react";

export default function AlertDoc() {
  return (
    <div className="container mx-auto py-10">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Alert</h1>
          <p className="text-muted-foreground">
            Kullanıcıya önemli bilgileri göstermek için kullanılan uyarı bileşeni.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Örnekler</h2>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Temel Kullanım</h3>
            <div className="space-y-4">
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Varsayılan Alert</AlertTitle>
                <AlertDescription>
                  Bu bir varsayılan alert bileşenidir.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Hata</AlertTitle>
                <AlertDescription>
                  Bir hata oluştu. Lütfen daha sonra tekrar deneyin.
                </AlertDescription>
              </Alert>

              <Alert variant="default">
                <Info className="h-4 w-4" />
                <AlertTitle>Bilgi</AlertTitle>
                <AlertDescription>
                  Yeni bir güncelleme mevcut. Sisteminizi güncelleyin.
                </AlertDescription>
              </Alert>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Sadece Başlık</h3>
            <Alert>
              <AlertTitle>Sadece başlık içeren alert</AlertTitle>
            </Alert>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Sadece Açıklama</h3>
            <Alert>
              <AlertDescription>
                Sadece açıklama içeren alert bileşeni
              </AlertDescription>
            </Alert>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Kullanım</h2>
          <Card className="p-6">
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

// Temel kullanım
<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Varsayılan Alert</AlertTitle>
  <AlertDescription>
    Bu bir varsayılan alert bileşenidir.
  </AlertDescription>
</Alert>

// Varyant ile kullanım
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Hata</AlertTitle>
  <AlertDescription>
    Bir hata oluştu. Lütfen daha sonra tekrar deneyin.
  </AlertDescription>
</Alert>

// Sadece başlık
<Alert>
  <AlertTitle>Sadece başlık içeren alert</AlertTitle>
</Alert>

// Sadece açıklama
<Alert>
  <AlertDescription>
    Sadece açıklama içeren alert bileşeni
  </AlertDescription>
</Alert>`}</code>
            </pre>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Props</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Alert</h3>
                <p className="text-sm text-muted-foreground">
                  Props: variant (&quot;default&quot; | &quot;destructive&quot;), className (string)
                </p>
              </div>
              <div>
                <h3 className="font-semibold">AlertTitle</h3>
                <p className="text-sm text-muted-foreground">
                  Props: className (string)
                </p>
              </div>
              <div>
                <h3 className="font-semibold">AlertDescription</h3>
                <p className="text-sm text-muted-foreground">
                  Props: className (string)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 