"use client"
import './globals.css'
import { Poppins } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'antd/dist/reset.css'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'] })

export const metadata = {
  title: 'nextjs project',
  description: 'Generated by 3nho',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SessionProvider>
          <div>
            <ToastContainer/>
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}
