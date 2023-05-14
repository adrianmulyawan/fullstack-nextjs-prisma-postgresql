"use client"

// > import bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// > useEffect
import { useEffect } from 'react';

export default function RootLayout({ children }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Fullstack NextJS</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
