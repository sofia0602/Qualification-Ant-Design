import React from "react";
import { Layout, Button, PageHeader } from "antd";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
const { Header } = Layout;
const NavBar = ({ state, toggle }) => {
  return (
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <PageHeader
          className="site-page-header"
          title="Prusik Soffia"
          avatar={{
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm81XoZa9dFFAFPY-LjxgJ-XAj-KeySicSvw&usqp=CAU",
          }}
          extra={[
            <Button key="1" className="header-button">
              Вийти
            </Button>,
          ]}
          tags={
            <div>
              {React.createElement(
                state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger triger-header",
                  onClick: toggle,
                }
              )}
            </div>
          }
        ></PageHeader>
      </Header>
    </Layout>
  );
};

export default NavBar;
