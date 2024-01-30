import { Inter } from "next/font/google";
import "./globals.css";

import MainLayout from "./components/main-layout";
import StoreProvider from "./StoreProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "nerdBlogBytes",

  description: "Facinated Tech Blogs",
  favicon: "/favicon.ico",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className="font-roboto-mono text-zinc-50 relative overflow-hidden"
        suppressHydrationWarning={true}
      >
        <div className="mt-16 lg:mt-[120px]">
          <StoreProvider>
            <MainLayout>{children}</MainLayout>
          </StoreProvider>
        </div>
      </body>

     

    </html>
  );
}
