import Link from "next/link";

const navigation = [
  {
    title: "Başlangıç",
    items: [
      {
        title: "Giriş",
        href: "/docs",
      },
      {
        title: "Kurulum",
        href: "/docs/installation",
      },
    ],
  },
  {
    title: "Bileşenler",
    items: [
      {
        title: "Button",
        href: "/docs/components/button",
      },
      {
        title: "Alert",
        href: "/docs/components/alert",
      },
      {
        title: "Toast",
        href: "/docs/components/toast",
      },
      {
        title: "Card",
        href: "/docs/components/card",
      },
    ],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden lg:block fixed w-64 h-screen border-r bg-background">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">Dokümantasyon</h2>
            <div className="space-y-1">
              {navigation.map((section) => (
                <div key={section.title} className="space-y-2">
                  <h3 className="px-4 text-sm font-medium text-muted-foreground">
                    {section.title}
                  </h3>
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-1.5 text-sm hover:bg-muted rounded-md transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 lg:pl-64">
        <main className="min-h-screen">{children}</main>
      </div>
    </div>
  );
} 