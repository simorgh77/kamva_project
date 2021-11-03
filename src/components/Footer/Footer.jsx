import React from 'react'
import { Container,Col,Row,Button } from 'react-bootstrap'
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import etemad from '../../assest/etemed.png' 
const Footer = () => {
    return (
        <div className='footer  w-100 mt-5 '>
          <Container className='w-100  h-100 '>
              <Row className='w-100 h-100'>
<Col className='text-center '> 
                 <Col xs={12}><div className='text-center '>
                      <img src="https://kamva.ir/static/footer-logo.1bfadb6e.svg" alt="kamva logo"
                       className="fluid" /></div></Col>

                       <Col xs={12}> <div className='mt-4 d-flex justify-content-around'>
                        <div className=' w-50 d-flex justify-content-between'> <BsInstagram style={{fontSize:'2.5rem'}}/>
                         <BsTwitter style={{fontSize:'2.5rem'}}/> <BsFacebook style={{fontSize:'2.5rem'}}/> </div>  
                           </div></Col>

                           <Col xs={12} className='mt-4' ><div> 
                               <span style={{fontSize:'1.3rem'}}>مشاوره و پشتیبانی</span>
                               </div>
                               <span style={{fontSize:'1.3rem'}}>09130812891</span></Col>
                           <Col xs={12} className='my-4'> <div><Button className="rounded-pill border-0 px-4 py-3" 
                           style={{backgroundColor:'#EFF2FF',
                           color:'#6080FF',fontSize:'1.3rem',fontWeight:'600'}}
                           >ثبت شکایات</Button></div></Col>


                            <Col xs={12} className='mb-5' style={{fontSize:'1.3rem'}}>
<Col xs={12} className='d-flex flex-wrap ' >
    
<Col xs={6}><div> <section>تعرفه ها</section></div></Col>



<Col xs={6}><div> <section>سوالات متداول</section></div></Col>


</Col>
<Col xs={12} className='d-flex flex-wrap'>
    <Col><div> <section>وبلاگ</section></div></Col>
<Col><div> <section>درباره ما</section></div></Col>
</Col>
<Col xs={12} className='d-flex flex-wrap'>
    <Col><div> <section>حریم شخصی</section></div></Col>
<Col><div> <section>قوانین و مقررات</section></div></Col>
</Col>

                            </Col>
<Col xs={12} style={{fontSize:'1.2rem'}}><div><section>
    آدرس:رفسنجان خیابان شهرییار شهرک اللهیه فرهنگیان</section></div></Col>

                           </Col>

              </Row>
              
               </Container>
              <div  className='w-100  bg-dark text-white text-center'><section>کلیه حقوق برای کسی نیست</section></div>
        </div>
    )
}

export default Footer
