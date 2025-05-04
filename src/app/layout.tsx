import "./globals.css"
import Header from "./(home_page_components)/header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-amber-600 md:bg-red-500 sm:bg-green-600 lg:bg-blue-600">
        <Header/>
        {children}
      </body>
    </html>
  );
}
