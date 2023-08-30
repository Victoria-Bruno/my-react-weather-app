import "./Search.css";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faLocationCrosshairs} from '@fortawesome/free-solid-svg-icons';


const Search = () => {
    return <Card style={{width: "18rem"}}  className="Search">
    <Form>
      <Card.Body>
        <Card.Title>Search for weather</Card.Title>
        <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter city" />
        </Form.Group>
          <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">
          <FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
          <Button variant="secondary"><FontAwesomeIcon icon={faLocationCrosshairs} /></Button>
      </ButtonGroup>
      </Card.Body>
    </Form>
    </Card>
};

export default Search;