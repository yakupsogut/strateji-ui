"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
} from "@/components/ui/alert-dialog";

export default function AlertDialogDoc() {
  return (
    <div className="container mx-auto py-10">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Alert Dialog</h1>
          <p className="text-muted-foreground">
            Kullanıcıdan onay gerektiren işlemler için kullanılan modal dialog bileşeni.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Örnekler</h2>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Temel Kullanım</h3>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Hesabı Sil</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Hesabınızı silmek istediğinize emin misiniz?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Bu işlem geri alınamaz. Bu işlem hesabınızı kalıcı olarak silecek ve tüm verileriniz silinecektir.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>İptal</AlertDialogCancel>
                  <AlertDialogAction>Devam Et</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Kullanım</h2>
          <Card className="p-6">
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

// Temel kullanım
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Hesabı Sil</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Hesabınızı silmek istediğinize emin misiniz?</AlertDialogTitle>
      <AlertDialogDescription>
        Bu işlem geri alınamaz. Bu işlem hesabınızı kalıcı olarak silecek ve tüm verileriniz silinecektir.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>İptal</AlertDialogCancel>
      <AlertDialogAction>Devam Et</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}</code>
            </pre>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Props</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">AlertDialog</h3>
                <p className="text-sm text-muted-foreground">
                  Type: Root component
                </p>
              </div>
              <div>
                <h3 className="font-semibold">AlertDialogTrigger</h3>
                <p className="text-sm text-muted-foreground">
                  Props: asChild (boolean)
                </p>
              </div>
              <div>
                <h3 className="font-semibold">AlertDialogContent</h3>
                <p className="text-sm text-muted-foreground">
                  Props: className (string)
                </p>
              </div>
              <div>
                <h3 className="font-semibold">AlertDialogAction</h3>
                <p className="text-sm text-muted-foreground">
                  Props: className (string)
                </p>
              </div>
              <div>
                <h3 className="font-semibold">AlertDialogCancel</h3>
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