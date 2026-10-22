import './_styles/globals.css'
import type { Metadata, Viewport } from 'next'
import React from 'react'

import { Providers } from './_components/Providers'

export const metadata: Metadata = {
  title: 'HAYU/IO',
  twitter: {
    card: 'summary',
    description: 'Hayu Profile',
    images: 'https://0.gravatar.com/avatar/7fe62f3d8f57d19291c548715744135e?size=120',
    site: '@conohayu',
    title: 'ʜΛʏᴜ',
  },
}

export const viewport: Viewport = {
  themeColor: '#f2f2f2',
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ja">
      <body>
        <Providers>
          <div className="p-home-container">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
