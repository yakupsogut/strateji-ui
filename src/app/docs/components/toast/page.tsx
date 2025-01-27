"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function ToastDoc() {
  const { toast } = useToast();

  return (
    <div className="container mx-auto py-10">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Toast</h1>
          <p className="text-muted-foreground">
            Kullanıcıya geçici bildirimler göstermek için kullanılan bileşen.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Örnekler</h2>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Temel Kullanım</h3>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() =>
                  toast({
                    title: "Başarılı",
                    description: "İşlem başarıyla tamamlandı.",
                  })
                }
              >
                Başarılı Toast
              </Button>

              <Button
                variant="destructive"
                onClick={() =>
                  toast({
                    title: "Hata",
                    description: "Bir hata oluştu.",
                    variant: "destructive",
                  })
                }
              >
                Hata Toast
              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  toast({
                    title: "Bilgi",
                    description: "Yeni bir güncelleme mevcut.",
                  })
                }
              >
                Bilgi Toast
              </Button>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Kullanım</h2>
          <Card className="p-6">
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`import { useToast } from "@/hooks/use-toast"

function Demo() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Başarılı",
          description: "İşlem başarıyla tamamlandı.",
        })
      }}
    >
      Toast Göster
    </Button>
  )
}`}</code>
            </pre>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Props</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">toast</h3>
                <p className="text-sm text-muted-foreground">
                  Props: title (string), description (string), variant (&quot;default&quot; | &quot;destructive&quot;)
                </p>
              </div>
              <div>
                <h3 className="font-semibold">useToast</h3>
                <p className="text-sm text-muted-foreground">
                  Returns: toast (function), dismiss (function)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 