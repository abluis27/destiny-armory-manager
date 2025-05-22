"use client"
import Footer from "../components/general/footer";
import Header from "../components/general/header";
import "./globals.css"
import { usePathname } from 'next/navigation';
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showQuote = pathname === '/home' || pathname === '/wishlist';
  

  return (
    <html lang="en" className={roboto.className}>
      <body className="overflow-y-auto">
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
        <Footer/>
      </body>
    </html>
  );
}
