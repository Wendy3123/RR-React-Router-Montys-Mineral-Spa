import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default function Packages(props) {
  const displayPackages = props.packages.map((eachPackage) => (
    <li>{eachPackage}</li>
  ));

  return (
    <div>
      <div className="packages">
        <Container>
          <Card>
            <Card.Body>
              <Card.Title>Our Packages</Card.Title>
              <Card.Text>
                Check out some of our packages! Every package is ethically
                sourced and organic!
              </Card.Text>
            </Card.Body>
            <ListGroup>{displayPackages}</ListGroup>
          </Card>
        </Container>
      </div>
    </div>
  );
}
