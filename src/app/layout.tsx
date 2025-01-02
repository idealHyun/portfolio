import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '이상현 | 웹 개발자 포트폴리오',
  description: '이상현 | 웹 개발자 포트폴리오',
  openGraph: {
    title: '이상현 | 웹 개발자 포트폴리오',
    description: '웹 개발에 열정을 가진 개발자의 포트폴리오입니다.',
    url: '',
    siteName: '이상현 포트폴리오',
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: '이상현 포트폴리오 미리보기 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
