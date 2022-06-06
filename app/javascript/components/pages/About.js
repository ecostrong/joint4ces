import React, { Component } from "react";
import { Container, Card, CardGroup, Row, Col } from "react-bootstrap";
import AMANDA from "../assets/amanda.jpeg";
import DUSTIN from "../assets/dustin.jpeg";
import NECO from "../assets/neco.jpeg";
import JIMMY from "../assets/jimmy.jpeg";
import SUNNY from "../assets/sunny.jpg";
export default class About extends Component {
  render() {
    return (
      <Container
        fluid
        className="about-container"
        style={{ marginTop: "126px" }}
      >
        <h1 style={{ marginTop: "40px", marginBottom: "40px" }}>
          About The Team
        </h1>
        <div className="card-container" style={{display: "flex", flexWrap: "wrap", flexDirection: "row", width: "100vw"}}>
          <Card className="about-card" style={{width: "30rem"}}>
            <Card.Img variant="top" src={SUNNY} />
            <Card.Body>
              <Card.Title>Sunny</Card.Title>
              <Card.Text>
                Sunny leads from the front, bringing to bear 10+ years of
                industry experience. Sunny leverages her broad network and
                diverse background as an entrepreneur, top performing executive
                and patient access advocate, to support veteran
                entrepreneurship, organization and expansion.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="about-card"  style={{width: "30rem"}}>
            <Card.Img variant="top" src={DUSTIN} />
            <Card.Body>
              <Card.Title>Dustin</Card.Title>
              <Card.Text>
                Dustin is a 9 year Army combat veteran. He has 20 years of
                experience in the Information Technology sector with the last 5
                being focused in the veteran business industry. He helped launch
                several veteran owned businesses and nonprofit organizations
                while holding numerous positions within the organizations that
                he helped develop such as Director of Technology, Chief
                Technology Officer and Lead Software Engineer. He is an expert
                in full stack software development and engineering as well as
                systems administration. He maintains a pulse on the worlds
                latest technologies and looks for ways to leverage them for use
                in the organization.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="about-card"  style={{width: "30rem"}}>
            <Card.Img variant="top" src={AMANDA} />
            <Card.Body>
              <Card.Title>Amanda</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="about-card"  style={{width: "30rem"}}>
            <Card.Img variant="top" src={JIMMY} />
            <Card.Body>
              <Card.Title>Jimmy</Card.Title>
              <Card.Text>
                Jimmy is a Texas native and served 4 years honorably in the
                United States Marine Corps. He has a Bachelor of Science Degree
                majoring in Technical Management and specializing in Server &
                Cloud Administration from the Embry-Riddle Aeronautical
                University. He is a dependable junior full stack web developer
                that has been recognized in the past for his professionalism and
                ability to work in a fast-paced environment.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="about-card"  style={{width: "30rem"}}>
            <Card.Img variant="top" src={NECO} />
            <Card.Body>
              <Card.Title>Neco</Card.Title>
              <Card.Text>
                Neco Armstrong Jun 3 at 1:18 PM (edited) Necocli is a proud
                veteran of the United States Virgin Islands. She served as an
                Army Medical Service Corps Officer with a specialization in
                Healthcare Administration. Necocli has a Master of Arts in Human
                Resources Management from Webster University and a Bachelor of
                Arts in Global Studies from the University of California, Santa
                Barbara. She has previously worked with the Wounded Warrior
                Transition Program, the Department of Labor, the National Park
                Service, and the Government of the Virgin Islands. Necocli is a
                multi-passionate web developer who brings two decades of
                military and government expertise to every project and her
                unique voice to the tech industry.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row> */}
      </Container>
    );
  }
}
