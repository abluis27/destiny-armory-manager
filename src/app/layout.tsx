import "./globals.css"
import Header from "./(homePage_components)/header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="md:min-h-300 overflow-y-auto">
        <Header/>
        {children}
      </body>
    </html>
  );
}
