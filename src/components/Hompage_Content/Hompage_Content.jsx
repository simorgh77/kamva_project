import React from 'react'
import "./homepage.style.css"
import {Container,Row,Col,Button,FormControl,InputGroup,Card} from "react-bootstrap"
import logo from "../../assest/logo.webp"
import Cat from "../../assest/cat.png"
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import Footer from "../Footer/Footer"
import UseSize from '../CustomeHook/CustomeHook_resize'
const Hompage_Content = () => {
const size=UseSize()
    return (
        <div className='w-100 h-100 m-0 homepage'>
                <div className='w-100  introduce d-flex  flex-wrap 
                  first-content justify-content-around m-0 p-0  '>
<div className="rounded-pill-top d-flex text-center mx-auto"> 
                     <Col xs={12} md={6} className='d-flex right-content flex-column align-items-around
                        mx-auto my-0'>
                        <Col className='title m-0 p-0' style={{fontSize:'6.5vh',fontWeight:'bolder'}}>{"با فروشگاه ساز کاموا،آنلاین بفروشید"}</Col>
                        <Col className='text-center my-0 p-0' style={{fontSize:'1.3rem'}}>بیش از 10,000 نفر از 
                        <span style={{fontWeight:'bolder'}}>فروشگاه ساز کاموا </span>برای راه اندازی فروشگاه اینترنتی استفاده کردند.شما هم میتونید<span style={{fontWeight:'bolder'}}>برای 14 روز رایگان 
                         </span> فروشگاه ساز را تست کنید.</Col>
                        <Col className='m-0 p-0'>
             <div className='d-flex justify-content-between div-with-input rounded-pill flex-wrap w-100  '>
    <FormControl
      className=' py-3  my-input shadow-none w-75'
      placeholder='kamva@example.com'
      style={{fontSize:'1rem',width:'16rem'}}
    />
    <Button  id="button-addon2" className='button_in_input mx-auto d-block rounded-pill border-0 text-dark py-3  my-2 '
    style={{backgroundColor:'#FFE226'}}>
      {"رایگان شروع کنید"}
    </Button>
    </div>
  </Col>
  
                    </Col>
                    </div>



                    <Col md={6} className='d-none d-lg-flex mx-auto mt-5 '><img  className='img-fluid w-100 h-75'
                   
                    src={logo} alt="logo"/> </Col>
            </div>
            <Container className='w-100 h-100 ' >
                <Row className=' h-100 '>




{/*//////////////////////////////////////////// /1////////////////////////////////////////// */}
            
            <div className='offers d-flex w-100 mt-5 flex-wrap'>

            
<Col xs={12} md={6}><img src={Cat} className='img-fluid' alt="Cat-logo" /> </Col>
<Col xs={12} md={6} className=''><header className='' >
    {"حرفه ای اما ساده،تنها در 5 دقیقه فروشگاه بسازید!"}</header>
 <br /> <br /> <span className='' style={{fontSize:'1.3rem'}}>{"شما میتونید در 5 دقیقه یک فروشگاه حرفه ای بسازید و فروش آنلاین را با درگاه پرداخت الکترونیکی،حتی بدون نماد اعتماد تحربه کنید.آنچه ما را متمایز میکند،استفاده از تکنولوژی های بروز دنیا،سرعت بالای وب سایت،قالب های بهینه،اتصال به پست،الوپیک و تیپاکس جهت ارسال محصولات و سرچ فوق حرفه ای مثل دبجی است"} </span> <br/> <br /> 
 <span style={{fontSize:'1.3rem'}}>{"ایجاد نامحدود محصولات ،دسته بندی ها و عدم پرداخت کارمزد از دیگر ویژگی های فروشگاه ساز کاموااست"}
  </span></Col>
            
            </div>

{/* //////////////////////////////////////////////////////////////////////////////// */}
            <div className='news mt-5 w-100'>

<Col xs={12}><header className='text-center'>{"مدیریت آسان فروشگاه ساز"}</header> 

<br /> <br /> <span  style={{fontSize:'1.2rem'}}>{"در کاموا تمامی امکانات مورد نیاز برای مدیریت آسان یک کسب و کار آنلاین را آماده کردیم.در فروشگاه ساز کاموا محصولات ،دسته بندی ها و اطلاعات فروشگاه خود را کامل کنید و بلافاصله شروع به فروش محصولات خود کنید"}</span></Col>
<Col xs={12} className='d-flex flex-wrap mt-5'>

    <Col xs={6} md={3} className='text-center my-2'> <AiOutlineFileSearch   style={{fontSize:'3rem',fill:'#6080FF'}}/> <br /> <span style={{fontSize:'1.5rem'}} >بهینه برای گوگل</span> </Col>
    <Col xs={6} md={3} className='text-center my-2' ><BsPhone  style={{fontSize:'3rem',fill:'#6080FF'}}/> <br /> <span style={{fontSize:'1.5rem'}} >دارای وب اپلیکیشن</span> </Col>
    <Col xs={6} md={3} className='text-center my-2' ><BsTelegram  style={{fontSize:'3rem',fill:'#6080FF'}}/> <br /> <span style={{fontSize:'1.5rem'}} >ربات تلگرام فروشگاهی</span> </Col> 
    <Col xs={6} md={3} className='text-center my-2' ><BsSearch  style={{fontSize:'3rem',fill:'#6080FF'}}/> <br /> <span style={{fontSize:'1.5rem'}} >جستجو مثل دیجی کالا</span> </Col>  </Col>
                
            </div>

            {/* /////////////////////////////////////////////////// */}
            <div className='why_kamva my-5 w-100 text-center d-flex justify-content-center'>
            <Card className='rounded w-100' style={{ minWidth: '20rem',boxShadow:'rgb(0 0 0 / 16%) 1px 1px 6px 3px' }}>
  <Card.Body className='d-flex flex-column justify-content-around'>
    <Card.Title className='header'>{"میخوای بدونی چرا باید کاموا را انتخاب کنی؟"}</Card.Title>
    <Card.Text className='mt-5 text-center ' style={{fontSize:'1.3rem' }}>
      {"اینجا بیش از 26 ویژگی فروشگاه ساز کاموا را توضیح دادیم تا بتونی بهتر انتخاب کنی"}
    </Card.Text>
    <Button className='rounded-pill p-3 px-4 border-0 w-50 mx-auto' style={{backgroundColor:'#FFD8D8',color:'#ff7f7f'}} >بیشتر</Button>
  </Card.Body>
</Card>

            </div>

            {/* ///////////////////////////////////////////////////////////// */}
            <div className='show-template show-template-background'>
                
<Col xs={12} className=''><div > <header className='my-3 text-center'>
    {"قالب های متنوع داریم"}</header></div> <div className='text-center' style={{fontSize:'1.2rem' ,fontWeight:'20px',color:'rgba(29, 23, 34, 0.9)'}}>
    {"میتوانید از میان ده ها قالب یکی را برای فروشگاه اینترنتی خود انتخاب کنید و هر زمان خواستید آن را تغییر دهید"}</div></Col>
<Col xs={12} className='my-5  '><div> 
 { size<600? <img className='img-fluid'
   src="https://kamva.ir/static/b6e1a291bd85c33b7226f52b42a22133/28224/templates-preview-mobile.png" alt="png" />
:
<div className=''><img className='img-fluid' src="https://kamva.ir/static/366c91fa7c21bc11230f480c717502f9/7eb01/templates-preview.png"
 alt="templates" />
</div>

}</div> 
<div className='text-center w-75 mx-auto mt-4' style={{fontSize:'1rem' ,fontWeight:'lighter',color:'rgba(29, 23, 34, 0.9)'}}>
    {"میتوانید از میان ده ها قالب یکی را برای فروشگاه اینترنتی خود انتخاب کنید و هر زمان خواستید آن را تغییر دهید"}</div>
    <div className='mt-4 w-50 show-template mx-auto text-center' >
       <Button className='rounded-pill border-0 show-template-button p-3 w-50'
        style={{backgroundColor:"rgba(255, 127, 127, 0.3)",fontSize:'1.2rem',
        color:'rgb(255, 137, 137)'}}>{"مشاهده پیش نمایش قالب ها"} </Button></div>
 </Col>
                
            </div>
            <div className='support d-flex flex-wrap'>
                <Col xs={12} md={6}> <div> <img className=' img-fluid' src="https://kamva.ir/static/3df7159c7b8caaef310e07eb39521af3/f90b7/support-illustration.svg.png"
                 alt="support" /> </div></Col>
                <Col xs={12} md={6}> <div>
                  <header className='text-center' >
                    پشتیبانی 0 تا 100 و رایگان در کاموا</header> </div> <div>
                       <section className='mt-3' style={{fontSize:'1.2rem',fontWeight:'500'}}>اگر تجربه ای در مدیریت سایت و <span style={{fontWeight:'bold'}}>راه اندازی فروشگاه </span> ندارید،
                        احتمال داره انجام دادن خیلی از کارها دشوار باشه. اما اصلا جای نگرانی نیست، چرا؟
                     چون تیم پشتیبانی کاموا از ابتدای راه اندازی سایت با  <bold> </bold>فروشگاه ساز تا فروش و 
                     بازیابی کنار شماست. برای فروش بیشتر می‌توانید
                      در زمینه ارسال  <span style={{fontWeight:'bold'}}>ایمیل تبلیغاتی </span>، سئو فروشگاه ساز، 
                      تبلیغات آنلاین برای بیشتر دیده شدن و موارد دیگه 
                      از راهنمایی های <span style={{fontWeight:'bold'}}> کاموا </span>استفاده کنید.
                       </section> </div> <br />  <div><section style={{fontSize:'1.2rem',fontWeight:'400' }}>فروشگاه ساز کاموا همیشه در حال توسعه است. خوب این چه مزیتی براتون داره؟ اینکه بدون پرداخت هزینه اضافی میتونید از قابلیت های جدیدی که به سیستم اضافه می‌شود استفاده کنید.
                          فروشگاه شما به صورت اتوماتیک آپدیت شده 
                          و از جدیدترین تکنولوژی ها بهره مند خواهید شد.</section> </div> </Col>
            </div>
            <div className='register'>
                <Col xs={12} className="mt-5 text-center"><div><header >همین حالا ثبت نام کنید</header> <div>
                <section className="mt-3" style={{fontSize:'1.3rem',fontWeight:'200'}}>14 روز رایگان</section></div></div></Col>
                <Col xs={12} className='mb-5  d-flex justify-content-center'>
  <div className='d-flex mt-5  justify-content-between register-div-with-input rounded-pill 
  flex-wrap w-100'>
    <FormControl
      className=' py-3 register-my-input w-75 mx-auto rounded-pill my-3 shadow-none '
      placeholder='kamva@example.com'
      style={{fontSize:'1rem'}}
    />
    <Button  id="button-addon2" className='register-button_in_input
     mx-auto d-block rounded-pill border-0 text-dark py-3 mb-3   '
    style={{backgroundColor:'#FFE226'}}>
      {"رایگان شروع کنید"}
    </Button>
    </div></Col>
            </div>
    
                </Row>
            </Container>
                
            </div>
    )
}

export default Hompage_Content
