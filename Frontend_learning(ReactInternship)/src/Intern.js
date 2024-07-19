import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Intern.css';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { TbMoodKid } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import { RxTwitterLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";

function Intern() {
  return (
    <div style={{ backgroundImage: `url("https://img.freepik.com/free-vector/gradient-pastel-sky-background_23-2148917404.jpg?size=626&ext=jpg&ga=GA1.1.1502203183.1674726100")`, backgroundSize: "cover" }}>   
    <div>
      <Row>
        <Col >
       <Carousel className="slide">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/front-view-woman-with-glasses-holding-lots-shopping-bags-with-copy-space_23-2148684480.jpg?w=2000&t=st=1689137106~exp=1689137706~hmac=c41092e85caedfae14028d2a2e28fce65d43f74da594b9091601c59ec2e265ea"
          alt=""
        />
        <Carousel.Caption className="caption1">
          <p>Upto 80% off for        Upcoming winter Season</p>
          
  
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/portrait-beautiful-cheerful-young-brunette-woman-with-bright-makeup-wearing-fashionable-clothes-standing-isolated-pink-wall-holding-purse-looking-away_171337-119122.jpg?size=626&ext=jpg&ga=GA1.2.1502203183.1674726100&semt=ais"
          alt="Second slide"
        />

        <Carousel.Caption className="caption2">
          
          <p>Find You Perfect Fit</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/young-woman-wearing-purple-sweater_273609-22845.jpg?w=2000&t=st=1689137817~exp=1689138417~hmac=015cfbbbe3c35858012b6e8f687aea16e236c1cfc177e2bf216198acc8d9e6fa"
          alt="Third slide"
        />

        <Carousel.Caption className="caption3">
          <p>Lock In Your Look</p>
    
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
    </div>
    <div className="text" >
    <p>Featured Products</p>
    <h2 >New arrivals for summer</h2>
    </div>
    <div className="cardalign">
    <Row>
      <Col >
      <Card className="ca_rd" style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/pretty-young-female-model-with-brown-eyes-bright-yellow-shirt-posing-pink-wall_197531-14234.jpg?size=626&ext=jpg&ga=GA1.1.1502203183.1674726100&semt=ais" />
      <Card.Body>
        <Card.Title style={{textAlign:"center"}}>Comfy Yellow Shirt</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div style={{display:"flex", justifyContent:"center"}}>
      <Button variant="dark">Proceed</Button>
    </div>
      </Card.Body>
    </Card>
    </Col>
    <Col >
      <Card className="ca_rd" style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/full-length-portrait-romantic-beautiful-lady-orange-skirt-stylish-carefree-girl-jumping-yellow_197531-11066.jpg?size=626&ext=jpg&ga=GA1.1.1502203183.1674726100&semt=ais" />
      <Card.Body>
        <Card.Title style={{textAlign:"center"}}>Flowy yellow skirt</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div style={{display:"flex", justifyContent:"center"}}>
      <Button variant="dark">Proceed</Button>
    </div>
      </Card.Body>
    </Card>
    </Col>
    <Col >
      <Card className="ca_rd" style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/trendy-cute-curly-haired-girl-sunglasses-showing-way-pointing-left_176420-20186.jpg?size=626&ext=jpg&ga=GA1.1.1502203183.1674726100&semt=ais" />
      <Card.Body>
        <Card.Title style={{textAlign:"center"}}>Soft Pink Hoodie</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div style={{display:"flex", justifyContent:"center"}}>
      <Button variant="dark">Proceed</Button>
    </div>
      </Card.Body>
    </Card>
    </Col>
     <div className="cardalign1">
      <Col md={4}>
      <Card className="ca_rd" style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/woman-with-shopping-bags-isolated_1303-14051.jpg?size=626&ext=jpg&ga=GA1.2.1502203183.1674726100&semt=sph" />
      <Card.Body>
        <Card.Title style={{textAlign:"center"}}>Doodle Printed Tube Top</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div style={{display:"flex", justifyContent:"center"}}>
      <Button variant="dark">Proceed</Button>
    </div>
      </Card.Body>
    </Card>
    </Col>
    <Col md={4}>
      <Card className="ca_rd" style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/inspired-young-lady-with-stylish-makeup-playfully-touching-her-dark-hair-amazing-european-girl-long-skirt-standing-purple-wall_197531-5209.jpg?size=626&ext=jpg&ga=GA1.1.1502203183.1674726100&semt=ais"/>
      <Card.Body>
        <Card.Title style={{textAlign:"center"}}>Cute Ryan Maxi Dresses</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div style={{display:"flex", justifyContent:"center"}}>
      <Button variant="dark">Proceed</Button>
    </div>
      </Card.Body>
    </Card>
    </Col>
    <Col md={4}>
      <Card className="ca_rd" style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/full-length-photo-woman-pink-jumpsuit-accessories-jumping-isolated-background_197531-14893.jpg?size=626&ext=jpg&ga=GA1.1.1502203183.1674726100&semt=sph"/>
      <Card.Body>
        <Card.Title style={{textAlign:"center"}}>Pink Jumpsuit</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div style={{display:"flex", justifyContent:"center"}}>
      <Button variant="dark">Proceed</Button>
    </div>
      </Card.Body>
    </Card>
    </Col>
    </div>
    <div className="Fin">
        <Row>
          <Col className="Foot1" md={3}>
            <h1 className="Foot2">
              <b>Company</b>
            </h1>
            <h2 className="Foot3">About Us &nbsp;</h2>
            <h2 className="Foot3">Careers &nbsp;</h2>
            <h2 className="Foot3">Awards &nbsp;</h2>
            <h2 className="Foot3">Investor Relations &nbsp;</h2>
          </Col>
          <Col className="Foot1" md={3}>
            <h1 className="Foot2">
              <b>Products</b>
            </h1>
            <h2 className="Foot3">Fashion</h2>
            <h2 className="Foot3">Beauty products</h2>
            <h2 className="Foot3">Easycart Plus</h2>
          </Col>
          <Col className="Foot1" md={3}>
            <h1 className="Foot2">
              <b>Terms</b>
            </h1>
            <h2 className="Foot3">Terms of Service</h2>
            <h2 className="Foot3">Security Policy</h2>
            <h2 className="Foot3">Privacy Policy</h2>
            <h2 className="Foot3">Customize Cookies</h2>
          </Col>
          <Col className="Foot1" md={3}>
            <h1 className="Foot2">
              <b>Contact Us</b>
            </h1>
            <h2 className="Foot3">tripy001@gmail.com &nbsp;</h2>
            <h2 className="Foot3">044-1234567-002 &nbsp;</h2>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search for products"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button
                className="search_foot_clr"
                variant="outline-secondary"
                id="button-addon2"
              >
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col className="icon mt-3">
            <Row>
              <Col>
                <a href="https://www.facebook.com" className="icon1">
                  <FiFacebook size={30} />
                </a>
              </Col>
              <Col>
                <a href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcRwRdsCcmrgjQHtqHmFrttrjpfJGsBzrzrrNhFNZWhHsftWBxKlrTJSpfsfdrlTsGFdRNhQW" className="icon1">
                  <GrMail size={30} />
                </a>
              </Col>
              <Col>
                <a
                  href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                  className="icon1"
                >
                  <RxTwitterLogo size={30} />
                </a>
              </Col>
              <Col>
                <a href="https://www.instagram.com" className="icon1">
                  <FaInstagram size={30} />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
   
    </Row>
    

    </div>
    </div>

);
}
export default Intern;