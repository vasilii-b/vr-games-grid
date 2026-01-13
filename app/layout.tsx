import "./globals.css";

export const metadata = {
  title: "VR Games",
  description: "VR games grid with trailers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
