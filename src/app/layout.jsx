

import { Inter } from '@next/font/google';
import '../app/globals.css';
import Navbar from '../components/Navbar'; 
import Footer from '@/components/Footer';

const poppins = Inter({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      <Footer/>
      </body>
    </html>
  );
}