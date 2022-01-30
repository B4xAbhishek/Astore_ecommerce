import React, { useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listOrders } from '../actions/orderActions'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
const Modals = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July','Aug','sep','Oct','Nov','Dec'];

    console.log(props)
    const data = {
        labels,
        datasets: [
          {
            label: 'Earnings',
            data: [10,20,30,40,50,60,20,30,10,50,10,20],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          See Graphical View
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Earnings Per Month </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Line options={options} data={data} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Close View
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default Modals