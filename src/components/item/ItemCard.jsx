import * as React from 'react'
import { Card, Tag } from 'antd'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App'
const { Meta } = Card;


const ItemCard = ({item}) => {
  const { host } = React.useContext(UserContext)
  return (
    <Link to={`/item?id=${item.id}`}>
      {host &&
      <Card
        hoverable
        cover={<img alt="example" src={`${host}${item.preview_img}`} />}
      >
        <Meta title={item.name} description={<div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
          <p>{item.short_describtion}</p>
          <Tag style={{height:'fit-content'}} color='orange'>{item.price}</Tag>
        </div>} />
      </Card>
      }
    </Link>
  )
}

export default ItemCard