import "../css/globals.css";

export const metadata = {
  title: "Dream",
  description: "Dream bio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
