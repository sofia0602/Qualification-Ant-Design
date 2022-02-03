import React, { useState } from "react";
import { Layout } from "antd";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Main from "./Main";
const { Footer } = Layout;
const Home = () => {
  const [state, setState] = useState({
    collapsed: true,
  });

  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };

  return (
    <Layout>
      <NavBar state={state} toggle={toggle}></NavBar>
      <Layout style={{ backgroundColor: "#fff" }}>
        <SideBar state={state}></SideBar>
        <Main></Main>
      </Layout>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#0d0f1a;",
          color: "var(--color-white)",
        }}
      >
        ©2022 Створено студентами Нау ОА
      </Footer>
    </Layout>
  );
};

export default Home;
