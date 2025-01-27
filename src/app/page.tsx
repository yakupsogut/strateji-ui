"use client"

import { Alert, AlertDescription, AlertTitle, Button, StratejiButton, useToast } from "@/lib/strateji-ui";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/lib/strateji-ui"
  import {  User } from "lucide-react"
  
export default function Home() {
  const { toast } = useToast()

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

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Toast Bileşenleri</h2>
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => {
                toast({
                  title: "Başarılı!",
                  description: "İşlem başarıyla tamamlandı.",
                })
              }}
            >
              Başarılı Toast
            </Button>

            <Button
              variant="destructive"
              onClick={() => {
                toast({
                  variant: "destructive",
                  title: "Hata!",
                  description: "Bir hata oluştu.",
                })
              }}
            >
              Hata Toast
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                toast({
                  title: "Aksiyon Gerekli",
                  description: "Lütfen işlemi onaylayın.",
                  action: (
                    <Button variant="outline" size="sm" onClick={() => toast({ title: "Onaylandı!" })}>
                      Onayla
                    </Button>
                  ),
                })
              }}
            >
              Aksiyonlu Toast
            </Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Strateji Button Bileşenleri</h2>
          
          {/* Renk Varyantları */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Renk Varyantları</h3>
            <div className="flex flex-wrap gap-4">
              <StratejiButton variant="primary">Primary Button</StratejiButton>
              <StratejiButton variant="secondary">Secondary Button</StratejiButton>
              <StratejiButton variant="outline">Outline Button</StratejiButton>
              <StratejiButton variant="text">Text Button</StratejiButton>
            </div>
          </div>

          {/* Boyut Varyantları */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Boyut Varyantları</h3>
            <div className="flex flex-wrap items-center gap-4">
              <StratejiButton size="small">Small Button</StratejiButton>
              <StratejiButton size="normal">Normal Button</StratejiButton>
              <StratejiButton size="medium">Medium Button</StratejiButton>
              <StratejiButton size="large">Large Button</StratejiButton>
            </div>
          </div>

          {/* Genişlik Varyantları */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Genişlik Varyantları</h3>
            <div className="space-y-4">
              <StratejiButton>Default Width</StratejiButton>
              <StratejiButton fullWidth>Full Width Button</StratejiButton>
            </div>
          </div>

          {/* Durum Varyantları */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Durum Varyantları</h3>
            <div className="flex flex-wrap gap-4">
              <StratejiButton>Default Button</StratejiButton>
              <StratejiButton disabled>Disabled Button</StratejiButton>
            </div>
          </div>

          {/* İkonlu Butonlar */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">İkonlu Butonlar</h3>
            <div className="flex flex-wrap gap-4">
              <StratejiButton icon={<User size={18} />}>Button with Icon</StratejiButton>
              <StratejiButton variant="secondary" icon={<User size={18} />}>Secondary with Icon</StratejiButton>
              <StratejiButton variant="text" icon={<User size={18} />}>Text with Icon</StratejiButton>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Alert Bileşenleri</h2>
          <Alert variant="destructive">
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components to your app using the cli.</AlertDescription>
          </Alert>
        </section>

        <section className="space-y-4">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Show Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        </section>
      </div>
    </main>
  );
}
