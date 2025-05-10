"use client"
import Header from "./(generalComponents)/header";
import "./globals.css"
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showQuote = pathname === '/home' || pathname === '/wishlist';

  return (
    <html lang="en">
      <body className="md:min-h-300 overflow-y-auto">
        <Header/>
        {
          showQuote && (
            <div className="flex justify-center items-center
            bg-medium-dark py-3 italic">
              <p className="text-sm">
                Your companion for Destiny 2 Weapons and Perks tracking</p>
            </div>
          )
        }
        {children}
      </body>
    </html>
  );
}
