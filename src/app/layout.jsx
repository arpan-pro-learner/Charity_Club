

import { Inter } from '@next/font/google';
import '../app/globals.css';

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
          <h1>CharityClub</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 CharityClub. Empowering change through giving.</p>
        </footer>
      </body>
    </html>
  );
}
