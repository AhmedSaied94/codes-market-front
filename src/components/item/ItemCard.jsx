import * as React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom';
const { Meta } = Card;

const ItemCard = (props) => {
  return (
    <Link to={`/item?id=${props.id}`}>
      <Card
        hoverable
        cover={<img alt="example" src="https://picsum.photos/200/100" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </Link>
  )
}

export default ItemCard