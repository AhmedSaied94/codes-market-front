import * as React from "react";
import { Col } from "antd";
import ItemCard from "../item/ItemCard";
const Products = ({ user }) => {
  return (
    <>
      {user.items.map((item) => {
        return (
          <Col
            key={item.id}
            xs={24}
            sm={12}
            md={6}
            style={{ marginBottom: "1rem" }}
          >
            <ItemCard item={item} />
          </Col>
        );
      })}
    </>
  );
};

export default Products;
