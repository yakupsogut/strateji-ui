"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r p-4 space-y-4">
        <div>
          <h2 className="font-semibold mb-2">Başlangıç</h2>
          <ul className="space-y-1">
            <li>
              <Link
                href="/docs/installation"
                className={`block p-2 rounded-lg hover:bg-muted ${
                  isActive("/docs/installation") ? "bg-muted" : ""
                }`}
              >
                Kurulum
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-2">Komponentler</h2>
          <ul className="space-y-1">
            <li>
              <Link
                href="/docs/components/alert"
                className={`block p-2 rounded-lg hover:bg-muted ${
                  isActive("/docs/components/alert") ? "bg-muted" : ""
                }`}
              >
                Alert
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/alert-dialog"
                className={`block p-2 rounded-lg hover:bg-muted ${
                  isActive("/docs/components/alert-dialog") ? "bg-muted" : ""
                }`}
              >
                Alert Dialog
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/button"
                className={`block p-2 rounded-lg hover:bg-muted ${
                  isActive("/docs/components/button") ? "bg-muted" : ""
                }`}
              >
                Button
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/strateji-button"
                className={`block p-2 rounded-lg hover:bg-muted ${
                  isActive("/docs/components/strateji-button") ? "bg-muted" : ""
                }`}
              >
                Strateji Button
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/card"
                className={`block p-2 rounded-lg hover:bg-muted ${
                  isActive("/docs/components/card") ? "bg-muted" : ""
                }`}
              >
                Card
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/toast"
                className={`block p-2 rounded-lg hover:bg-muted ${
                  isActive("/docs/components/toast") ? "bg-muted" : ""
                }`}
              >
                Toast
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/skeleton"
                className={`block p-2 rounded-lg hover:bg-muted ${
                  isActive("/docs/components/skeleton") ? "bg-muted" : ""
                }`}
              >
                Skeleton
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
} 