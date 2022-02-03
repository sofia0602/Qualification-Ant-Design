import React from "react";
import { Layout, Row, Col, Collapse, Card } from "antd";
import CardSubject from "./CardSubject";
import SubjectDone from "./SubjectDone";
import TableSubject from "./TableSubject";
const { Content } = Layout;
const Main = () => {
  const data = [
    { title: "Англійська мова за професійним спрямуванням" },
    { title: "Дослідження операцій" },
    { title: "Маркетинг" },
    { title: "Прогнозування соціально-економічних процесів" },
    { title: "Проектування та розробка інформаційних систем" },
    { title: "Методи та системи штучного інтелекту" },
  ];
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 30,
        minHeight: 280,
      }}
    >
      <Card
        title="КН-41"
        bodyStyle={{
          padding: 10,
        }}
        headStyle={{
          fontWeight: "600",
          fontSize: "18px",
          backgroundColor: "rgb(202 227 224 / 13%)",
        }}
        className="card__wrapper"
      >
        {data.map((e) => (
          <CardSubject data={e}></CardSubject>
        ))}
        <SubjectDone></SubjectDone>
      </Card>
      <TableSubject></TableSubject>
    </Content>
  );
};

export default Main;
