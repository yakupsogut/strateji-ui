"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CardDoc() {
  return (
    <div className="container mx-auto py-10">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Card</h1>
          <p className="text-muted-foreground">
            İçerikleri gruplamak ve görsel olarak ayırmak için kullanılan kart bileşeni.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Örnekler</h2>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Temel Kullanım</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <h4 className="text-lg font-semibold">Başlık</h4>
                <p className="text-muted-foreground">
                  Bu bir örnek kart içeriğidir. İçerik metni buraya gelecektir.
                </p>
              </Card>

              <Card className="p-6">
                <h4 className="text-lg font-semibold">İnteraktif Kart</h4>
                <p className="text-muted-foreground mb-4">
                  Kartların içine butonlar ve diğer etkileşimli öğeler ekleyebilirsiniz.
                </p>
                <Button>Tıkla</Button>
              </Card>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Kullanım</h2>
          <Card className="p-6">
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`import { Card } from "@/components/ui/card"

// Temel kullanım
<Card className="p-6">
  <h4 className="text-lg font-semibold">Başlık</h4>
  <p>İçerik metni</p>
</Card>

// İnteraktif kart
<Card className="p-6">
  <h4 className="text-lg font-semibold">İnteraktif Kart</h4>
  <p className="mb-4">Kart içeriği</p>
  <Button>Tıkla</Button>
</Card>`}</code>
            </pre>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Props</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Card</h3>
                <p className="text-sm text-muted-foreground">
                  Props: className (string)
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Özelleştirme</h3>
                <p className="text-sm text-muted-foreground">
                  Tailwind CSS sınıfları ile özelleştirilebilir: padding, margin, border, shadow vb.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 