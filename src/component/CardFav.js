import React, { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

export class CardPi extends Component {
  render() {
    return (
      <div>
        <Row xs={1} md={3} className="g-4">
          {this.props.favData.map((obj) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={obj.image_url} />
                <Card.Body>
                  <Card.Title>{obj.title}</Card.Title>
                  <Card.Text>{obj.description}</Card.Text>
                  <Card.Text>{obj.toUSD}</Card.Text>
                  <Button
                    variant="danger"
                    onClick={(e) => {
                      this.props.deleteFromFav(obj.slug);
                    }}
                  >
                    delete from faveriote
                  </Button>

                  <Button
                    variant="success"
                    onClick={(e) => {
                      this.props.updateClick(
                        obj.slug,
                        obj.toUSD,
                        obj.description,
                        obj.image_url
                      );
                    }}
                  >
                    update data
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default CardPi;
