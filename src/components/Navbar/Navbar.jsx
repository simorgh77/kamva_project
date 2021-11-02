import React from 'react'
import { useHistory } from 'react-router'
import { Button,Nav,Navbar,Container, Badge } from 'react-bootstrap'
import { BiKey } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
const MyNavbar = () => {
    const history=useHistory()
    console.log(history);
    return (
        <div>
   <Navbar collapseOnSelect expand="lg" sticky='top'style={{boxShadow:'rgb(0 0 0 / 16%) 0px 3px 6px'}}>
  <Container >
  <Navbar.Brand href="#home" className='p-4  mx-2'><img src="https://kamva.ir/static/header-logo.bf314871.svg" alt="Brand" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className=''  >
    <Nav className="me-auto mx-auto" >
      <Nav.Link onClick={()=>history.push('pricing')}>قیمت ها</Nav.Link>
      <Nav.Link onClick={()=>history.push('knowledgebase')}>سوالات متداول</Nav.Link>
      <Nav.Link onClick={()=>history.push('features')}>امکانات</Nav.Link>
      <Nav.Link onClick={()=>history.push('tutorial')}>آموزش</Nav.Link>
      <Nav.Link onClick={()=>history.push('support')}>پشتیبانی</Nav.Link>
      <div className='d-flex mx-auto '>
      <Button className='rounded-pill border-0 mx-1' style={{backgroundColor:'rgb(255,216,216)',color:'#FF8989'}}><Badge className='bg-transparent'><BiKey style={{fontSize:'1.2rem', color:'FF8989'}}/></Badge> ثبت نام  </Button>
      <Button className='rounded-pill border-0 mx-1' style={{backgroundColor:'#FF7F7F'}}> <Badge className='bg-transparent'><IoPersonOutline style={{fontSize:'1.2rem'}}/> </Badge> ورود</Button>
      </div>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        
        </div>
    )
}

export default MyNavbar
