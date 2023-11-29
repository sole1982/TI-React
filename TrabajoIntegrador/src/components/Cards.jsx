import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src="public\pexels-jill-wellington-3309659.jpg" />
        <Card.Body >
          <Card.Text>
            Eventos y Cumpleaños Próximos.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
      <Card.Img variant="bottom" src="public/pexels-karolina-grabowska-4386466.jpg" />
        <Card.Body>
          <Card.Text>
           Próximas Citas Médicas.
          </Card.Text>
        </Card.Body>
       
      </Card>
    </>
  );
}

export default Cards;