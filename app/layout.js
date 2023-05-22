import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AppProvider } from "./context/appContext";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
        <Navbar />
          <div className="px-24 py-5">{children}</div>
        <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
