import React, {useState} from "react"
import Icon from './components/Icon'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const array = new Array(9).fill('empty');

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    array.fill('empty',0,9);
  }

  const checkIsWinner = () => {
       //  checking  winner of the game
    if (
      array[0] === array[1] &&
      array[0] === array[2] &&
      array[0] !== "empty"
    ) {
      setWinMessage(`${array[0]} won`);
    } else if (
      array[3] !== "empty" &&
      array[3] === array[4] &&
      array[4] === array[5]
    ) {
      setWinMessage(`${array[3]} won`);
    } else if (
      array[6] !== "empty" &&
      array[6] === array[7] &&
      array[7] === array[8]
    ) {
      setWinMessage(`${array[6]} won`);
    } else if (
      array[0] !== "empty" &&
      array[0] === array[3] &&
      array[3] === array[6]
    ) {
      setWinMessage(`${array[0]} won`);
    } else if (
      array[1] !== "empty" &&
      array[1] === array[4] &&
      array[4] === array[7]
    ) {
      setWinMessage(`${array[1]} won`);
    } else if (
      array[2] !== "empty" &&
      array[2] === array[5] &&
      array[5] === array[8]
    ) {
      setWinMessage(`${array[2]} won`);
    } else if (
      array[0] !== "empty" &&
      array[0] === array[4] &&
      array[4] === array[8]
    ) {
      setWinMessage(`${array[0]} won`);
    } else if (
      array[2] !== "empty" &&
      array[2] === array[4] &&
      array[4] === array[6]
    ) {
      setWinMessage(`${array[2]} won`);
    }
  };

  const changeItem = itemNumber => {
    if (winMessage) {
      return toast(winMessage, {type:"success"})
    }
    if (array[itemNumber] === 'empty') {
      array[itemNumber] = isCross ? "cross" : "circle"
      setIsCross(!isCross);
    }
    
    else {
      return toast("Already Fill", {type:"error"});
    }
    checkIsWinner();
  }

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "Cross" : "Circle"} turns
            </h1>
          )}
          <div className="grid">
            {array.map((item, index) => (
              <Card color="warning" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
      <Row className="p-5">
        <Col md={3} className="offset-md-3">    
            <div className="mb-2 mt-2">
            <Button  color="success" block onClick={reloadGame}>
                      Reload the game
            </Button>
            </div>
        </Col>
      </Row>
    </Container>
    );
}


export default App;
