import React from "react";
import { Card, Button } from "antd";
import Title from "antd/lib/skeleton/Title";
const CardSubject = ({ data }) => {
  const gridStyle = {
    width: "32%",
    margin: 4,
  };
  return (
    <Card.Grid className="card-grid" style={gridStyle}>
      <div>
        <div className="card-header_wraper">
          <h4 className="card-header">{data.title}</h4>
          <Button className="card-btn">Переглянути</Button>
        </div>
        <div className="card-content">
          <div>
            <span className="card-text">Новоселецька С.В.</span>
          </div>
          <a className="card-text">sofiia.prusik@oa.edu.ua</a>
        </div>{" "}
        <div className="card-footer">
          <div className="card-footer__inner">
            <span className="item date">
              20.06.22
              <i class="fal fa-check"></i>
            </span>
            <span className="item">
              20/
              <span className="subject-done">22</span>
            </span>
          </div>
        </div>
      </div>
    </Card.Grid>
  );
};

export default CardSubject;
