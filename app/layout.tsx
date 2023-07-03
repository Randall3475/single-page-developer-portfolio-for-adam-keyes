import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const space_grotesk = Space_Grotesk({
  weight: ["500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Single Page Developer Portfolio for Adam Keyes",
  description:
    "This is the single page portfolio of Adam Keyes, including skills, projects; and a contact form via which you can contact him!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${space_grotesk.className} bg-primary-black overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
