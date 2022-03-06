import * as React from 'react'
import { Card, Typography, Avatar } from 'antd'
const { Title } = Typography
const { Meta } = Card

const ItemHeader = (props) => {
    const [loading, setLoading] = React.useState(false)
  return (
    <div>
        <Card style={{ width: '100%' }} loading={loading}>
          <Meta
            avatar={<Avatar shape='square' size={96} src="https://picsum.photos/200/300" />}
            title={<Title level={2}>This is Item Name</Title>}
            description="This is Item catigory"
            className='card'
          />
        </Card>
    </div>
  )
}

export default ItemHeader