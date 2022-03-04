import * as React from 'react'
import { Card } from 'antd'
const { Meta } = Card;

const ItemCard = (props) => {
  return (
    <Card
    hoverable
    cover={<img alt="example" src="https://picsum.photos/200/100" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  )
}

export default ItemCard