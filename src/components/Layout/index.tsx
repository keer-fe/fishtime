import React, { useCallback, useState } from 'react'
import { Layout, Menu } from 'antd'
import { MENU_LIST } from '@/config/router'
import { Outlet, useLocation, useNavigate } from 'react-router'
import LogoIcon from '@/assets/images/logo.png'
import TitleIcon from '@/assets/images/title.png'
import './index.less'

const { Header, Content } = Layout

const App: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [current, setCurrent] = useState<string>(location.pathname)

  const handleClick = useCallback((params: { key: string }) => {
    setCurrent(params.key)
    navigate(params.key)
  }, [])

  return (
    <Layout className="m-layout">
      <Header className="m-layout-header">
        <div className="m-layout-header__inner">
          <a href="//www.fishtime.fun" className="m-layout-header__logo">
            <img src={LogoIcon} />
            <img src={TitleIcon} />
          </a>

          <Menu
            className="m-layout-header__menu"
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={MENU_LIST}
          />
        </div>
      </Header>
      <Content className="m-layout-content">
        <div className="m-layout-content__main">
          <Outlet />
        </div>
      </Content>
    </Layout>
  )
}

export default App
