import './globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'Our Saviours Anglican School',
  description: 'Our Saviours Anglican School Durunmi',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
