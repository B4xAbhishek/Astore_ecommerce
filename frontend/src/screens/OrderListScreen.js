import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Card, CardGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Modals from '../components/Modals'
import { listOrders } from '../actions/orderActions'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch()

  const orderList = useSelector((state) => state.orderList)
  const { loading, error, orders } = orderList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])


  return (
    <>
      <h1>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
        <CardGroup>
                <Card border="info" style={{ width: '18rem' }} >
                <Card.Header>Total Orders Placed</Card.Header>
                <Card.Body>
                  <Card.Title>{orders.length}</Card.Title>
                  <Card.Text>
                  <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button p-2 btn btn-primary"
                    table="table-to-xls"
                    filename="Orderxls"
                    sheet="tablexls"
                    buttonText="Export to Excel"/>
                  </Card.Text>
                </Card.Body>
              </Card>
  <br />
  <Card border="success" style={{ width: '18rem' }} >
                <Card.Header>Total Paid Orders</Card.Header>
                <Card.Body>
                  <Card.Title>{orders.length}</Card.Title>
                  <Card.Text>
                   <p>total Amount Earned ₹2074.17</p>
                   <Modals/>
                  </Card.Text>
                </Card.Body>
              </Card>
              </CardGroup>
  {/* Cards End */}

        <Table striped bordered hover responsive className='table-sm' id="table-to-xls">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>PAYMENT METHOD</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>₹{order.totalPrice}</td>   
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>{order.paymentMethod === 'Cash On Delivery' ? <p>COD</p> : <p>{order.paymentMethod}</p> }</td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant='light' className='btn-sm'>
                      Details
                    </Button>
                  </LinkContainer>
                </td>
                <td>
                  <a href="https://www.wix.com/tools/invoice-generator"> Generate Invoice</a>
                </td>
              </tr>
            )).reverse()}
          </tbody>
        </Table>
        </>
      )}
    </>
  )
}

export default OrderListScreen
