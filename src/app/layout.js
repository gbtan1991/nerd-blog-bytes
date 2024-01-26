import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from './components/Footer'

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: "nerdBlogBytes",
  description: "Where Bits Meet Insight: Exploring the Tech Universe, Byte by Byte.",
  favicon: '/favicon.ico'

};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
     
      <body className="font-roboto-mono text-zinc-50 relative overflow-hidden" suppressHydrationWarning={true}>
        <div className="fixed top-0 left-0 right-0 z-10"><Header />
        </div>
        <div className="mt-16 lg:mt-[120px]">
        {children}
        
        
        </div>
        
        </body>

    </html>
  );
}
