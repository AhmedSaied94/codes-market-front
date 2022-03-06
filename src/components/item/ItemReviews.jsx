import * as React from 'react'
import { Comment, Tooltip, Form, Input, Avatar, Button } from 'antd'
import { Link } from 'react-router-dom'
import moment from 'moment'
const { TextArea } = Input

const ItemReviews = (props) => {
    const [submitting, setSubmitting] = React.useState(false)
    const { form } = Form.useForm()

    const handleReview = e => {
        return
    }
    const reviews = new Array(5).fill('a')
  return (
    <div style={{backgroundColor:'#fff', padding:'1rem'}}>
        {reviews.map(i => {
            return (
                <Comment
                author={<Link to=''>Han Solo</Link>}
                avatar={<Avatar src="https://picsum.photos/200/300" alt="Han Solo" />}
                content={
                  <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully
                    and efficiently.
                  </p>
                }
                datetime={
                  <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
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