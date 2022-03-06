import * as React from 'react'
import { Image, Button, Card } from 'antd'

const ItemDetails = (props) => {
    const images = new Array(4).fill('a')
  return (
    <>
    <div>
        <Image
        width='100%'
        src="https://picsum.photos/700/400"
        />
        <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap', backgroundColor:'#fff', border:'1px solid #f0f0f0', padding:'1rem 0'}}>
            <Button style={{margin:'0.25rem 0'}} type='primary'>Live Demo</Button>
            <Button style={{margin:'0.25rem 0'}} type='primary'>Like</Button>
            <Button style={{margin:'0.25rem 0'}} type='primary'>Add to Wishlist</Button>
        </div>
    </div>
    <div style={{margin:'1rem 0'}} className="site-card-border-less-wrapper">
        <Card title="Screen Shots" bordered={true} style={{ width: '100%'}}>
            <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
                {images.map(i => {
                    return (
                        <Image
                        width={100}
                        src="https://picsum.photos/700/500"
                        />
                    )
                })}
            </div>
        </Card>
    </div>
    <div style={{margin:'1rem 0'}} className="site-card-border-less-wrapper">
        <Card title="Item Describtion" bordered={true} style={{ width: '100%'}}>
                <p>
                    This is Item Describtion
                </p>
        </Card>
    </div>
    <div style={{margin:'1rem 0'}} className="site-card-border-less-wrapper">
        <Card title="Item Features" bordered={true} style={{ width: '100%'}}>
                <p>
                    This is Item Features
                </p>
        </Card>
    </div>
    </>
  )
}

export default ItemDetails