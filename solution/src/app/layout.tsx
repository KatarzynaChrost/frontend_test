import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './styles/main.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Provider from './components/Provider';
import s from './layout.module.scss';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Frontend Test Nabthat',
  description: 'Katarzyna Chróst',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <main className={s.mainApp}>
          <Provider>
            <Header />
            {children}
            <Footer />
          </Provider>
        </main>
      </body>
    </html>
  );
}
