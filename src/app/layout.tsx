import Header from "./(generalComponents)/header";
import "./globals.css"
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
