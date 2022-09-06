import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import doc_card from "../resources/doctor_profile.png"
import '../css/cards.css'
const DocCard=()=> {
  return (

    <Card >
      <Card.Img variant="top" src={doc_card} height="70rem" />
      <Card.Text className='v'></Card.Text>
      <Card.Body>
        <Card.Title>Dr. ABC</Card.Title>

        <Card.Text>
          MBBS MD Cardiologist
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DocCard;