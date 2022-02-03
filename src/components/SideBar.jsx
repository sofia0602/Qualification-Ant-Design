import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;
const SideBar = ({ state }) => {
  return (
    <Sider trigger={null} theme="dark" collapsible collapsed={state.collapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          Архів
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
