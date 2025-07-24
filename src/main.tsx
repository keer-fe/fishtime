import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import { ANTD_THEME } from './config/theme.ts'
import { ConfigProvider } from 'antd'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { router as pageRouter } from './config/router.tsx'
import { Layout } from '@/components'

import '@/assets/styles/global.less'

function Root() {
  return (
    <StrictMode>
      <ConfigProvider theme={{ token: ANTD_THEME }}>
        <Layout />
      </ConfigProvider>
    </StrictMode>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: pageRouter
  }
])

ReactDom.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
