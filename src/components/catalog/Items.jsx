import * as React from 'react'
import ItemCard from '../item/ItemCard'
import { Row, Col } from 'antd'

    const arr = new Array(9).fill('a')


const Items = (props) => {
  return (
    <Row gutter={[16, 16]}>
        {arr.map(i => {
            return (
                <Col xs={24} sm={12} md={6} style={{marginBottom:'1rem'}}>
                        <ItemCard />
                </Col>
            )
        })}
    </Row>
  )
}

export default Items