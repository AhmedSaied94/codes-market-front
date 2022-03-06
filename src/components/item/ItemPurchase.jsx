import * as React from 'react'
import { Descriptions, Card, Button, Form, Select, Typography } from 'antd'
const { Option } = Select
const { Title } = Typography

const ItemPurchase = () => {
    const licenseChange = value => {
        console.log(value)
    }
  return (
    <div>
        <div className="site-card-border-less-wrapper">
            <Card title="Stripe" bordered={true} style={{ width: '100%'}}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Form.Item required>
                        <Select placeholder='License...' onChange={licenseChange}>
                            <Option value="Single License">Single License</Option>
                            <Option value="Multiple License">Multiple License</Option>
                        </Select>
                    </Form.Item>
                    <Title level={2}>$30</Title>
                </div>

                <p>We offer support</p>
                <p>Future item updates</p>
                <p>100% Satisfaction guarantee</p>
                <p>Download code immediately after purchase</p>
                <Button block type='primary'>Buy Now</Button>
            </Card>
        </div>
        <div style={{padding:'1.5rem', margin:'1rem 0', backgroundColor:'#fff'}} className="site-card-border-less-wrapper">

            <Descriptions
            bordered
            title="Information"
            size='middle'
            >
                <Descriptions.Item span={3} label="Product">Cloud Database</Descriptions.Item>
                <Descriptions.Item span={3} label="Billing">Prepaid</Descriptions.Item>
                <Descriptions.Item span={3} label="time">18:00:00</Descriptions.Item>
                <Descriptions.Item span={3} label="Amount">$80.00</Descriptions.Item>
                <Descriptions.Item span={3} label="Discount">$20.00</Descriptions.Item>
            </Descriptions>

        </div>
    </div>
  )
}

export default ItemPurchase