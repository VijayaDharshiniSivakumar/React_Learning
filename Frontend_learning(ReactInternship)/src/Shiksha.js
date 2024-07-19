import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import './Shiksha.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IoLocationSharp} from "react-icons/io";
import { GrMail } from "react-icons/gr";
import {FaPhoneAlt} from "react-icons/fa";
import {TiLocation} from "react-icons/ti";
import {BsFacebook}  from "react-icons/bs";
import {AiFillTwitterCircle}from "react-icons/ai";
 import {BsPinterest} from "react-icons/bs";
 import Form from "react-bootstrap/Form";

function Shiksha() {
  return (
    <div>
        <div >
      
      <Row style={{height:'60px',backgroundColor:'#2d2c26'}} >
      <Col><img  className='header' src='https://cdn.worldvectorlogo.com/logos/envato-market-api.svg' style={{height:'80px',width:'300px',position:'absolute',paddingLeft:'30px',paddingBottom:'20px'}}/></Col>
      <Col><Button style={{marginLeft:'580px',marginTop:'10px',backgroundColor:'#81b441',border:'1px solid green'}}>BUY NOW</Button></Col>
      </Row ></div>
      <Row style={{height:'80px',backgroundColor:'#F8F9F9 '}} ><Col md={6}><div style={{paddingTop:'30px',paddingLeft:'50px',display:'flex',flexDirection:'row',flexWrap:'wrap',gridGap:'30px'}}>
      <p>E-mail Address : tutoring@mail.com</p>
      <p>Contact Number : +003457289</p></div></Col><Col md={6}><div style={{paddingTop:'30px',paddingLeft:'500px',display:'flex',flexDirection:'row',flexWrap:'wrap',gridGap:'30px'}}><p>Login</p><p>/</p><p>Register</p></div></Col></Row>
      <Row >
           <Col md={4}><h1 style={{alignItems:'center',paddingTop:'16px',fontFamily: "'Your Fantasy Font', papyrus" ,paddingLeft:'100px'}}>Shiksha</h1></Col> 
           <Col>
           <nav>
           <div style={{paddingTop:'20px',paddingLeft:'20px',fontSize:'18px',display:'flex',flexDirection:'row',flexWrap:'wrap',gridGap:'60px',alignItems:'center'}}> 
           <Nav style={{color:'orange'}}> Home </Nav>
           <Nav href='home'> About</Nav>
           <Nav href='cousre'> Courses</Nav>
           <Nav href='event'>Event</Nav>
           <Nav href='page'>page</Nav>
           <Nav href='blog'>blog</Nav>
           <Nav href='contact'>Contact</Nav>
           <button style={{backgroundColor:'orange'}}>BUY NOW</button>
           </div>
           </nav>
           </Col>
           </Row>
           <Row>
            
     
           <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking_8353-6408.jpg?w=2000&t=st=1689788355~exp=1689788955~hmac=1717079784d63b01582331495c6edc1bfe4c6d43cfcdca51b91d2fcfc31e0f89"
          alt="First slide"
        />
        <div className="carousel-caption">
          <h1 style={{fontWeight:'bolder'}}>Bone Of Nation Education</h1>
          <p style={{fontSize:'20px'}}>This is the content for Slide 1.</p>
          <button className="custom-button">START A COURSE</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/students-university-people-wearing-mantles-group-students_115086-788.jpg?w=2000"
          alt="First slide"
        />
        <div  className="carousel-caption">
          <h1 style={{fontWeight:'bolder'}}>Bone Of Nation Education</h1>
          <p style={{fontSize:'20px'}}>This is the content for Slide 2.</p>
          <button className="custom-button" >START A COURSE</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/aerial-view-residence-bukovinian-dalmatian-metropolitans-chernivtsi-national-university-chernivtsi-touristic-destination-western-ukraine_231208-51.jpg?w=2000&t=st=1689788805~exp=1689789405~hmac=0840e7444f37a8d16c720849900bc1ff812778a913f9b96215c39f6e18c91b5f"
          alt="First slide"
        />
        <div  className="carousel-caption">
          <h1 style={{fontWeight:'bolder'}}>Bone Of Nation Education</h1>
          <p style={{fontSize:'20px'}}>This is the content for Slide 3.</p>
          <button className="custom-button" >START A COURSE</button>
        </div>
      </Carousel.Item>
    </Carousel></Row>
    <h1 style={{paddingLeft:'130px',paddingTop:'70px'}}>Our Courses</h1><br/>
    <p style={{paddingLeft:'130px',color:'grey',textAlign:'left'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore<br/> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
    <div className="cardalign">
      <Row><Col>
    <Card  className="card1"style={{ width: '25rem' ,height: '500px'}}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/young-woman-studying-library_1303-19014.jpg?w=2000&t=st=1689793214~exp=1689793814~hmac=a427c0f4161e20383c11643ecdf43019b368d52ffa43236d8e4bdeca40b1b643" />
      <Card.Body>
        <Card.Title className='top' style={{paddingTop:'40px'}}>Learn UI/UX Design</Card.Title>
        <Card.Text className='tex'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='but'><b>Apply Now</b></Button>
      </Card.Body>
    </Card></Col>
    <Col><Card  className="card1"style={{ width: '25rem',height: '500px' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/pretty-young-student-with-big-glasses-near-some-books-smiling-white-background_231208-1850.jpg?w=2000&t=st=1689790013~exp=1689790613~hmac=2bd73fbf2dd280a1019a3d102432e0e0ed6c94e64f5c6dcdcd71b304ced87f5e" />
      <Card.Body>
        <Card.Title className='top' style={{paddingTop:'40px'}}>Complete Guide of Business</Card.Title>
        <Card.Text className='tex'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='but'><b>Apply Now</b></Button>
      </Card.Body>
    </Card></Col>
    <Col> <Card className="card1" style={{ width: '25rem',height: '500px' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5920.jpg?w=2000&t=st=1689793175~exp=1689793775~hmac=2f074e89ec2875000b640c3c2231784ebbabbbb7174cb9f4581f2e4e23d71746" />
      <Card.Body>
        <Card.Title className='top' style={{paddingTop:'40px'}}>Aeuronautical Engineering</Card.Title>
        <Card.Text className='tex'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='but'><b>Apply Now </b></Button>
      </Card.Body>
    </Card></Col></Row>
    </div>
    <Row >
      <Col style={{backgroundColor:'#0e2f44',paddingBottom:'100px'}} xs={12} md={6}>
       <h2 style={{marginLeft:'70px',marginTop:'50px',color:'whitesmoke'}}>WHY CHOOSE US</h2>
       <p style={{marginLeft:'70px',color:'whitesmoke',marginBottom:'40px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore<br/> et dolore magna aliqua. Ut enim ad minim veniam,</p>
       <Row>
        <div align="center" style={{backgroundColor:'#25597f',marginLeft:'70px',width:'270px',height:'250px'}}>
          <img style={{marginTop:'50px',marginBottom:'15px'}} src='https://htmldemo.net/shiksha/shiksha/assets/img/categories/5.png' alt='wifi' roundedCircle/>
          <h4 style={{marginBottom:'15px',color:'whitesmoke'}}>TECHNOLOGY</h4>
          <p style={{color:'whitesmoke'}}>Lorem ipsum dolor sit amet,<br/> conadipng elit, sed do eiusmod<br/> tempor incidilabore</p>
        </div>
        <div align="center" style={{backgroundColor:'#25597f',marginLeft:'60px',width:'270px',height:'250px'}}>
          <img style={{marginTop:'50px',marginBottom:'15px'}} src='https://htmldemo.net/shiksha/shiksha/assets/img/categories/6.png' alt='wifi' roundedCircle/>
          <h4 style={{marginBottom:'15px',color:'whitesmoke'}}>DESIGN</h4>
          <p style={{color:'whitesmoke'}}>Lorem ipsum dolor sit amet,<br/> conadipng elit, sed do eiusmod<br/> tempor incidilabore</p>
        </div>
       </Row>
       <Row>
      
       <div align="center" style={{backgroundColor:'#25597f',marginLeft:'70px',width:'270px',height:'250px',marginTop:'100px'}}>
          <img style={{marginTop:'50px',marginBottom:'15px'}} src='https://htmldemo.net/shiksha/shiksha/assets/img/categories/7.png' alt='wifi' roundedCircle/>
          <h4 style={{marginBottom:'15px',color:'whitesmoke'}}>MUSIC</h4>
          <p style={{color:'whitesmoke'}}>Lorem ipsum dolor sit amet,<br/> conadipng elit, sed do eiusmod<br/> tempor incidilabore</p>
        </div>
        <div align="center" style={{backgroundColor:'#25597f',marginLeft:'60px',width:'270px',height:'250px',marginTop:'100px'}}>
          <img style={{marginTop:'50px',marginBottom:'15px'}} src='https://htmldemo.net/shiksha/shiksha/assets/img/categories/8.png' alt='wifi' roundedCircle/>
          <h4 style={{marginBottom:'15px',color:'whitesmoke'}}>LANGUAGE</h4>
          <p style={{color:'whitesmoke'}}>Lorem ipsum dolor sit amet,<br/> conadipng elit, sed do eiusmod<br/> tempor incidilabore</p>
        </div>
       </Row>
      </Col>
      <Col xs={12} md={6} style={{backgroundColor:'#3e6676'}} className="remove-padding">
      <div className="image-container">
        <img src='https://img.freepik.com/free-photo/woman-higher-education-teamwork-designer-folded_1134-923.jpg?size=626&ext=jpg&ga=GA1.1.956311393.1689073036&semt=ais' alt='img'/>
      </div>
     
      </Col>
    </Row>
    
    <h1 style={{paddingLeft:'130px',paddingTop:'70px'}}>Upcoming Events</h1><br/>
    <p style={{paddingLeft:'130px',color:'grey',textAlign:'left'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore<br/> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
    <div className="cardalign">
      <Row><Col>
    <Card  className="card1"style={{ width: '25rem' ,height: '500px'}}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/young-woman-studying-library_1303-19014.jpg?w=2000&t=st=1689793214~exp=1689793814~hmac=a427c0f4161e20383c11643ecdf43019b368d52ffa43236d8e4bdeca40b1b643" />
      <Card.Body>
        <Card.Title className='top'style={{paddingTop:'40px'}}>Learn UI/UX Design</Card.Title>
        <Card.Text className='tex'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='but'><b>Apply Now</b></Button>
      </Card.Body>
    </Card></Col>
    <Col><Card  className="card1"style={{ width: '25rem',height: '500px' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/pretty-young-student-with-big-glasses-near-some-books-smiling-white-background_231208-1850.jpg?w=2000&t=st=1689790013~exp=1689790613~hmac=2bd73fbf2dd280a1019a3d102432e0e0ed6c94e64f5c6dcdcd71b304ced87f5e" />
      <Card.Body>
        <Card.Title className='top' style={{paddingTop:'40px'}}>Complete Guide of Business</Card.Title>
        <Card.Text className='tex'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='but'><b>Apply Now</b></Button>
      </Card.Body>
    </Card></Col>
    <Col> <Card className="card1" style={{ width: '25rem',height: '500px' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5920.jpg?w=2000&t=st=1689793175~exp=1689793775~hmac=2f074e89ec2875000b640c3c2231784ebbabbbb7174cb9f4581f2e4e23d71746" />
      <Card.Body>
        <Card.Title className='top' style={{paddingTop:'40px'}}>Aeuronautical Engineering</Card.Title>
        <Card.Text className='tex'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='but'><b>Apply Now </b></Button>
      </Card.Body>
    </Card></Col></Row>
    </div>
    <h1 style={{paddingLeft:'130px',paddingTop:'70px'}}>New Blog</h1><br/>
    <p style={{paddingLeft:'130px',color:'grey',textAlign:'left'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore<br/> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
    <div className="cardalign">
      <Row><Col>
    <Card  className="card1"style={{ width: '25rem' ,height: '500px'}}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/young-woman-studying-library_1303-19014.jpg?w=2000&t=st=1689793214~exp=1689793814~hmac=a427c0f4161e20383c11643ecdf43019b368d52ffa43236d8e4bdeca40b1b643" />
      <Card.Body>
        <Card.Title className='top' style={{paddingTop:'40px'}}>Support Girl’s Education</Card.Title>
        <Card.Text className='tex'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='but'><b>Apply Now</b></Button>
      </Card.Body>
    </Card></Col>
    <Col><Card  className="card1"style={{ width: '25rem',height: '500px' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/pretty-young-student-with-big-glasses-near-some-books-smiling-white-background_231208-1850.jpg?w=2000&t=st=1689790013~exp=1689790613~hmac=2bd73fbf2dd280a1019a3d102432e0e0ed6c94e64f5c6dcdcd71b304ced87f5e" />
      <Card.Body>
        <Card.Title className='top'style={{paddingTop:'40px'}}>The Value of Education</Card.Title>
        <Card.Text className='tex'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='but'><b>Apply Now</b></Button>
      </Card.Body>
    </Card></Col>
    <Col> <Card className="card1" style={{ width: '25rem',height: '500px' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5920.jpg?w=2000&t=st=1689793175~exp=1689793775~hmac=2f074e89ec2875000b640c3c2231784ebbabbbb7174cb9f4581f2e4e23d71746" />
      <Card.Body>
        <Card.Title className='top'style={{paddingTop:'40px'}}>Bone of Nation Education</Card.Title>
        <Card.Text className='tex'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='but'><b>Apply Now </b></Button>
      </Card.Body>
    </Card></Col></Row>
    </div>
    <Row style={{backgroundColor:'#0e2f44'}} >
      <Col style={{backgroundColor:'#0e2f44',color:'white',paddingLeft:'100px',paddingTop:'100px'}}md={3}>
      <h3>About Poralikha</h3><br/>
      <p>Lorem ipsum dolor sit cnr adipisicing elit, sed do eiusmod tempor incididuntlabore et dolore magna aliqua.</p><br/>
      <div style={{display:'flex',gridGap:'30px'}}>
      <TiLocation size={20}/><p>California Street san Francisco, CA</p></div>
      <div style={{display:'flex',gridGap:'30px'}}><FaPhoneAlt size={20}/><p>Phone : +660 256 24857</p></div>
      <div style={{display:'flex',gridGap:'30px'}}><GrMail size={20}/><p>Email : username@email.com,</p></div>
      </Col>
      <Col style={{backgroundColor:'#0e2f44',color:'white',paddingTop:'100px',paddingLeft:'100px'}} md={3}>
      <h3>Useful Link</h3><br/>
    <p>About tutoring</p>
    <p>Homepage</p> 
    <p>Class Schedule</p>
    <p>Contact Us</p>
    <p>Term & Condition</p>
    <p>Our mission</p>
   </Col>
   <Col style={{backgroundColor:'#0e2f44',color:'white',paddingTop:'100px'}} md={3}>
    <h3>Latest News</h3><br/>
    <div style={{paddingBottom:'30px',display:'flex',gridGap:'30px'}} ><img  style={{height:'80px',width:'80px'}} src="https://img.freepik.com/free-photo/work-net_1098-16441.jpg?w=2000&t=st=1689821337~exp=1689821937~hmac=cf0a4ad93cc33bb5468700e3c74e0bdfc8eb90491ca3f330b63ff33108e8869c"/><div><p>16 th Sep, 2022</p><b>Sports Day is near ready Soon</b></div></div>
    <div style={{paddingBottom:'30px',display:'flex',gridGap:'30px'}}><img  style={{height:'80px',width:'80px'}} src="https://img.freepik.com/free-photo/i-m-prepared-exam-very-well_329181-2973.jpg?w=2000&t=st=1689821463~exp=1689822063~hmac=fa6f0f7fdc2c32961174756a5f8f9efca28854375ca1143a5f64020e63b70160"/><div><p>16 th Sep, 2022</p><b>Sports Day is near ready Soon</b></div></div>
    <div style={{paddingBottom:'30px',display:'flex',gridGap:'30px'}}><img  style={{height:'80px',width:'80px'}} src="https://img.freepik.com/free-photo/medium-shot-graduate-student_23-2148950577.jpg?w=2000&t=st=1689821630~exp=1689822230~hmac=65782741a7c32a2c15ee15070a9ea800e74cdc6ac714fe2fb92088cf8d5b0f06"/><div><p>16 th Sep, 2022</p><b>Sports Day is near ready Soon</b></div></div>
   </Col>
   <Col style={{backgroundColor:'#0e2f44',color:'white',paddingTop:'100px',paddingRight:'100px'}} md={3} ><h3>Instagram Feed</h3><br/>
   <div style={{paddingBottom:'5px',display:'flex',gridGap:'5px'}} ><img  style={{height:'80px',width:'100px'}} src="https://img.freepik.com/free-photo/work-net_1098-16441.jpg?w=2000&t=st=1689821337~exp=1689821937~hmac=cf0a4ad93cc33bb5468700e3c74e0bdfc8eb90491ca3f330b63ff33108e8869c"/><img style={{height:'80px',width:'100px'}}   src='https://img.freepik.com/free-photo/group-diverse-grads-throwing-caps-up-sky_53876-56031.jpg?w=2000&t=st=1689822410~exp=1689823010~hmac=f140f262c294cab0cf7b1324dce057eb76dd18d9a22a26a7a08deb0578f3f003'/><img style={{height:'80px',width:'100px'}}   src='https://img.freepik.com/free-photo/student-sharing-her-knowledge-with-her-colleagues_329181-8498.jpg?w=2000&t=st=1689823222~exp=1689823822~hmac=2cc0fb42ec8319e8c74cca76dd48161c56f6bc9362ee6555028d7e3cc14d7693'/></div>
    <div style={{paddingBottom:'5px',display:'flex',gridGap:'5px'}}><img  style={{height:'80px',width:'100px'}} src="https://img.freepik.com/free-photo/i-m-prepared-exam-very-well_329181-2973.jpg?w=2000&t=st=1689821463~exp=1689822063~hmac=fa6f0f7fdc2c32961174756a5f8f9efca28854375ca1143a5f64020e63b70160"/><img style={{height:'80px',width:'100px'}}   src='https://img.freepik.com/free-photo/outdoor-portrait-serious-curly-female-student-sitting-with-laptop-ground_197531-6965.jpg?w=2000&t=st=1689823248~exp=1689823848~hmac=912480e25239b01b924cfc8096a084c2625f6d0259fdde6780db756ca8019d22'/><img style={{height:'80px',width:'100px'}}   src='https://img.freepik.com/free-photo/yes-lucky-me-happy-triumphing-young-joyful-armenian-woman-curly-haired-clench-fists-celebrating-successful-win-lottery-smiling-say-yeah-excited-good-positive-result-standing-white-background_176420-35002.jpg?w=2000&t=st=1689823308~exp=1689823908~hmac=95f991c4e019758d340b13023c3fc0c4a73cba5891b340bcdfc6ed282f08b09b'/></div>
    </Col><Row  style={{paddingBott:'100px'}}>
      <Col md={6} style={{backgroundColor:'#0e2f44',color:'white',paddingTop:'60px',paddingBottom:'60px',paddingLeft:'100px'}} > 
      <div style={{paddingBottom:'30px',display:'flex',gridGap:'10px'}} > <h5>Contact with us:</h5><br/>
        <BsFacebook size={30}/>
        < AiFillTwitterCircle size={35}/>
        <BsPinterest size={30}/></div>
      </Col>
      <Col md={6} style={{backgroundColor:'#0e2f44',color:'white',paddingTop:'60px',paddingLeft:'100px'}}  >
      <div style={{paddingBottom:'5px',display:'flex',gridGap:'20px'}}>
       <h5><b>Subscribe now :</b></h5>
       <input style={{paddingRight: ' 50px',paddingBottom:'10px',paddingTop:'5px'}}type="text" placeholder="Your Email Address"/> 
        
       <Button className='custom-button'>Subscribe</Button></div>
     
      </Col>
    </Row>
    </Row>
    <Row style={{backgroundColor:'black'}}>
      <Col><div className='foot'><p>&copy;Copyright, 2021 HasThemes</p> </div></Col><Col className='foo'><p className='faa'>Home</p>
        <p className='faa' >Support</p>
        <p className='faa'>FAQ</p></Col>
       </Row> 
    
    
           </div>
  )
}

export default Shiksha
