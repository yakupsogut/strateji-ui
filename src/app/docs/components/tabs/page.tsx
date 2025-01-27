"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsDoc() {
  return (
    <div className="container mx-auto py-10">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Tabs</h1>
          <p className="text-muted-foreground">
            İçeriği sekmeler halinde organize etmek için kullanılan bileşen.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Örnekler</h2>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Temel Kullanım</h3>
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="account">Hesap</TabsTrigger>
                <TabsTrigger value="password">Şifre</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Card>
                  <div className="p-4 space-y-2">
                    <h4 className="font-medium">Hesap Ayarları</h4>
                    <p className="text-sm text-muted-foreground">
                      Hesap ayarlarınızı buradan yönetebilirsiniz.
                    </p>
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="password">
                <Card>
                  <div className="p-4 space-y-2">
                    <h4 className="font-medium">Şifre Değiştir</h4>
                    <p className="text-sm text-muted-foreground">
                      Hesap şifrenizi buradan değiştirebilirsiniz.
                    </p>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Dikey Sekmeler</h3>
            <Tabs defaultValue="music" orientation="vertical" className="w-[400px]">
              <TabsList className="w-[300px]">
                <TabsTrigger value="music" className="w-full justify-start">Müzik</TabsTrigger>
                <TabsTrigger value="videos" className="w-full justify-start">Videolar</TabsTrigger>
                <TabsTrigger value="photos" className="w-full justify-start">Fotoğraflar</TabsTrigger>
              </TabsList>
              <div className="flex-1">
                <TabsContent value="music">
                  <Card>
                    <div className="p-4 space-y-2">
                      <h4 className="font-medium">Müzik</h4>
                      <p className="text-sm text-muted-foreground">
                        Müzik koleksiyonunuz burada görüntülenir.
                      </p>
                    </div>
                  </Card>
                </TabsContent>
                <TabsContent value="videos">
                  <Card>
                    <div className="p-4 space-y-2">
                      <h4 className="font-medium">Videolar</h4>
                      <p className="text-sm text-muted-foreground">
                        Video koleksiyonunuz burada görüntülenir.
                      </p>
                    </div>
                  </Card>
                </TabsContent>
                <TabsContent value="photos">
                  <Card>
                    <div className="p-4 space-y-2">
                      <h4 className="font-medium">Fotoğraflar</h4>
                      <p className="text-sm text-muted-foreground">
                        Fotoğraf koleksiyonunuz burada görüntülenir.
                      </p>
                    </div>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Kullanım</h2>
          <Card className="p-6">
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Temel kullanım
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Hesap</TabsTrigger>
    <TabsTrigger value="password">Şifre</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Card>
      <div className="p-4">
        <h4>Hesap Ayarları</h4>
        <p>Hesap ayarlarınızı buradan yönetebilirsiniz.</p>
      </div>
    </Card>
  </TabsContent>
  <TabsContent value="password">
    <Card>
      <div className="p-4">
        <h4>Şifre Değiştir</h4>
        <p>Hesap şifrenizi buradan değiştirebilirsiniz.</p>
      </div>
    </Card>
  </TabsContent>
</Tabs>

// Dikey sekmeler
<Tabs defaultValue="music" orientation="vertical">
  <TabsList className="w-[200px]">
    <TabsTrigger value="music" className="w-full justify-start">
      Müzik
    </TabsTrigger>
    <TabsTrigger value="videos" className="w-full justify-start">
      Videolar
    </TabsTrigger>
  </TabsList>
  <TabsContent value="music">
    <Card>
      <div className="p-4">
        <h4>Müzik</h4>
        <p>Müzik koleksiyonunuz burada görüntülenir.</p>
      </div>
    </Card>
  </TabsContent>
  <TabsContent value="videos">
    <Card>
      <div className="p-4">
        <h4>Videolar</h4>
        <p>Video koleksiyonunuz burada görüntülenir.</p>
      </div>
    </Card>
  </TabsContent>
</Tabs>`}</code>
            </pre>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Props</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Tabs</h3>
                <p className="text-sm text-muted-foreground">
                  Props: defaultValue (string), orientation (&quot;horizontal&quot; | &quot;vertical&quot;), className (string)
                </p>
              </div>
              <div>
                <h3 className="font-semibold">TabsList</h3>
                <p className="text-sm text-muted-foreground">
                  Props: className (string)
                </p>
              </div>
              <div>
                <h3 className="font-semibold">TabsTrigger</h3>
                <p className="text-sm text-muted-foreground">
                  Props: value (string), className (string)
                </p>
              </div>
              <div>
                <h3 className="font-semibold">TabsContent</h3>
                <p className="text-sm text-muted-foreground">
                  Props: value (string), className (string)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 