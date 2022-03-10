import * as React from 'react'
import { Comment, Tooltip, Form, Input, Avatar, Button } from 'antd'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { ItemContext } from '../../pages/ItemPage'
const { TextArea } = Input

const ItemReviews = (props) => {
    const [submitting, setSubmitting] = React.useState(false)
    const { form } = Form.useForm()
    const { item } = React.useContext(ItemContext)
    const handleReview = e => {
        return
    }
  return (
    <div style={{backgroundColor:'#fff', padding:'1rem'}}>
        {item.reviews.map(review => {
            return (
                <Comment
                author={<Link to=''>{review.user}</Link>}
                content={
                  <p>
                    {review.content}
                  </p>
                }
                datetime={
                  <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().from(review.date)}</span>
                  </Tooltip>
                }
              />
            )
        })}
        <div>
            <Form form={form} layout='vertiacal'>
                <Form.Item>
                    <TextArea rows={4}  />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" loading={submitting} onClick={handleReview} type="primary">
                        Add Review
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div>
  )
}

export default ItemReviews