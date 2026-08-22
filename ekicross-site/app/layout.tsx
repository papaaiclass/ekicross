import type { Metadata } from 'next';
import { Geist, Geist_Mono, Noto_Sans_Thai } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const notoSansThai = Noto_Sans_Thai({
  variable: '--font-noto-thai',
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ekicross-x3-launching.eksivat-works.chatgpt.site'),
  title: 'Ekicross — เฟิร์มแวร์ภาษาไทยสำหรับ X3',
  description: 'Ekicross for X3 Launching — สิ่งที่พัฒนาแล้ว รุ่นเฟิร์มแวร์ และประวัติการปรับปรุง',
  openGraph: {
    title: 'Ekicross — Firmware for X3 Launching',
    description: 'เฟิร์มแวร์ X3 ที่ใส่ใจภาษาไทย ตั้งแต่เมนู การตัดคำ ไปจนถึงความปลอดภัยของการอัปเดต',
    type: 'website',
    images: ['https://ekicross-x3-launching.eksivat-works.chatgpt.site/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ekicross — Firmware for X3 Launching',
    description: 'เฟิร์มแวร์ X3 ที่ใส่ใจภาษาไทย ตั้งแต่เมนู การตัดคำ ไปจนถึงความปลอดภัยของการอัปเดต',
    images: ['https://ekicross-x3-launching.eksivat-works.chatgpt.site/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansThai.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
