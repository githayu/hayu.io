'use client'

import { ThemeProvider } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'
import { Provider, useSetAtom } from 'jotai'
import React from 'react'

import { theme } from '@/theme'

import { hashAtom } from '../_atoms'

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <Provider>
          <HashListener>{children}</HashListener>
        </Provider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

function HashListener({ children }: React.PropsWithChildren) {
  const setHash = useSetAtom(hashAtom)

  React.useEffect(() => {
    const hashChanged = () => {
      setHash(location.hash)
    }

    window.addEventListener('hashchange', hashChanged)

    return () => {
      window.removeEventListener('hashchange', hashChanged)
    }
  }, [])

  return children
}
