import React from 'react'
import { Container,Col,Row,Button } from 'react-bootstrap'
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import etemad from '../../assest/etemad.png' 
const Footer = () => {
    return (
        <div className='footer  w-100 mt-5 d-flex flex-column justify-content-between '>
          <Container className='w-100  h-100 '>
              <Row className='w-100 h-100'>
<Col xs={12} 
className='text-center mt-5 d-flex flex-wrap justify-content-between align-content-between'> 
                 <Col xs={12} md={4} className='d-flex flex-column order-0 order-md-1'><div className='text-center '>
                      <img src="https://kamva.ir/static/footer-logo.1bfadb6e.svg" alt="kamva logo"
                       className="fluid" /></div>

                        <div className='mt-4 d-flex justify-content-around'>
                        <div className=' w-50 d-flex justify-content-between'>
                             <AiFillInstagram className='p-3 rounded-circle' style={{fontSize:'3.5rem', backgroundColor:'#DDDDDD'}}/>
                         <BsTwitter className='p-3 rounded-circle' style={{fontSize:'3.5rem', backgroundColor:'#DDDDDD'}}/>
                          <FaFacebookF className='p-3 rounded-circle' style={{fontSize:'3.5rem', backgroundColor:'#DDDDDD'}}/> </div>  
                           </div>
</Col>

{/* first Col */}
                           <Col xs={12} md={4} className='d-flex flex-column mt-3  
                            justify-content-around order-1 ' style={{height:'25vh'}}>
                                <div> 
                               <span className='' style={{fontSize:'1.3rem'}}>مشاوره و پشتیبانی
                               </span>
                               </div>
                               <span className='' style={{fontSize:'1.3rem'}}>09130812891</span>
                            <div><Button className="rounded-pill border-0 px-4  py-3" 
                           style={{backgroundColor:'#EFF2FF',
                           color:'#6080FF',fontSize:'1.3rem',fontWeight:'600'}}
                           >ثبت شکایات</Button></div>
</Col>
<div className='mx-auto order-1 '><img src={etemad} alt="etemad" /></div>
{/* secont Col */}


                    
                    
  <Col xs={12} className='mb-5  w-75 mx-auto d-flex flex-wrap order-2 order-md-0' 
  style={{fontSize:'1rem',fontWeight:'600'}}>

    
<Col xs={6} md={2}><div> <section className='mt-3'>تعرفه ها</section></div></Col>



<Col xs={6} md={2}><div> <section className='mt-3'>سوالات متداول</section></div></Col>


<Col xs={6} md={2}><div> <section className='mt-3'>وبلاگ</section></div></Col>
<Col xs={6} md={2}><div> <section className='mt-3'>درباره ما</section></div></Col>


    <Col xs={6} md={2}><div> <section className='mt-3'>حریم شخصی</section></div></Col>
<Col xs={6} md={2}><div> <section className='mt-3'>قوانین و مقررات</section></div></Col>

                            </Col>



<Col xs={12}  className='order-3 mt-4' style={{fontSize:'1rem'}}><div><section>
    آدرس:رفسنجان خیابان شهرییار شهرک اللهیه فرهنگیان</section></div></Col>

                           </Col>

              </Row>
              
               </Container>
              <div  className='w-100 mb-3  text-center'><section style={{color:'#A7A7A8'}}>
                  کلیه حقوق برای کسی است که نمیدونم کیه</section></div>
        </div>
    )
}

export default Footer
