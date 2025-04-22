export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>Soy el rootlayout</h1>
        {children}
      </body>
    </html>
  );
}
