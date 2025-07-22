import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ANTD_THEME } from './config/theme.ts'
import { ConfigProvider } from 'antd'
import App from './App.tsx'
// import './index.less'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={{ token: ANTD_THEME }}>
      <App />
    </ConfigProvider>
  </StrictMode>
)
