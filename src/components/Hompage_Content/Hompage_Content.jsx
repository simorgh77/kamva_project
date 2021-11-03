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
const Hompage_Content = () => {
    return (
        <div className='w-100 h-100 m-0 homepage'>
            <Container className='w-100 h-100 ' >
                <Row className=' h-100 '>
                <div className='w-100 introduce d-flex flex-wrap 
                  first-content'>

                    <Col xs={12} md={6} className='d-flex right-content flex-column align-items-around  h-100'>
                        <Col className='title' style={{fontSize:'6.5vh',fontWeight:'bolder'}}>{"با فروشگاه ساز کاموا،آنلاین بفروشید"}</Col>
                        <Col className='text-center' style={{fontSize:'1.3rem'}}>بیش از 10,000 نفر از <span style={{fontWeight:'bolder'}}>فروشگاه ساز کاموا </span>  برای راه اندازی فروشگاه اینترنتی استفاده کردند.شما هم میتونید<span style={{fontWeight:'bolder'}}>برای 14 روز رایگان  </span> فروشگاه ساز را تست کنید.</Col>
                        <Col > <InputGroup className="d-flex flex-wrap w-100 ">
    <FormControl
      className='rounded-pill  p-3 w-100'
      placeholder='kamva@example.com'
      style={{fontSize:'1.5rem'}}
    />
    <Button  id="button-addon2" className='d-block rounded-pill border-0 text-dark py-3 mx-auto my-2 w-50 'style={{backgroundColor:'#FFE226'}}>
      {"رایگان شروع کنید"}
    </Button>
  </InputGroup></Col>
                    </Col>



                    <Col md={6} className='d-none d-md-flex'><img className='img-fluid h-75' style={{transform:'scaleX(1.3)'}} 
                    src={logo} alt="logo"/> </Col>
            </div>




{/*//////////////////////////////////////////// /1////////////////////////////////////////// */}
            
            <div className='offers w-100 mt-5'>

            
<Col xs={12}><img src={Cat} className='img-fluid' alt="Cat-logo" /> </Col>
<Col xs={12} className='text-center'><header className='' >
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

    <Col xs={6} className='text-center'> <AiOutlineFileSearch   style={{fontSize:'3rem',fill:'#6080FF'}}/> <br /> <span style={{fontSize:'1.5rem'}} >بهینه برای گوگل</span> </Col>
    <Col xs={6} className='text-center' ><BsPhone  style={{fontSize:'3rem',fill:'#6080FF'}}/> <br /> <span style={{fontSize:'1.5rem'}} >دارای وب اپلیکیشن</span> </Col>
    <Col xs={6} className='text-center my-5' ><BsTelegram  style={{fontSize:'3rem',fill:'#6080FF'}}/> <br /> <span style={{fontSize:'1.5rem'}} >ربات تلگرام فروشگاهی</span> </Col> 
    <Col xs={6} className='text-center my-5' ><BsSearch  style={{fontSize:'3rem',fill:'#6080FF'}}/> <br /> <span style={{fontSize:'1.5rem'}} >جستجو مثل دیجی کالا</span> </Col>  </Col>
                
            </div>

            {/* /////////////////////////////////////////////////// */}
            <div className='why_kamva my-5 w-100 text-center d-flex justify-content-center'>
            <Card className='rounded ' style={{ minWidth: '20rem',boxShadow:'rgb(0 0 0 / 16%) 1px 1px 6px 3px' }}>
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
            <div className='show-template'>
                
<Col xs={12}><div> <header className='my-3 text-center'>
    {"قالب های متنوع داریم"}</header></div> <div className='text-center' style={{fontSize:'1.2rem' ,fontWeight:'20px',color:'rgba(29, 23, 34, 0.9)'}}>
    {"میتوانید از میان ده ها قالب یکی را برای فروشگاه اینترنتی خود انتخاب کنید و هر زمان خواستید آن را تغییر دهید"}</div></Col>
<Col xs={12} className='my-5'><div> <img className='img-fluid' src="https://kamva.ir/static/b6e1a291bd85c33b7226f52b42a22133/28224/templates-preview-mobile.png" alt="png" />
</div> 
<div className='text-center mt-4' style={{fontSize:'1.3rem' ,fontWeight:'lighter',color:'rgba(29, 23, 34, 0.9)'}}>
    {"میتوانید از میان ده ها قالب یکی را برای فروشگاه اینترنتی خود انتخاب کنید و هر زمان خواستید آن را تغییر دهید"}</div>
    <div className='mt-3 text-center' > <Button className='rounded-pill border-0 p-3 w-100' style={{backgroundColor:"rgba(255, 127, 127, 0.3)",fontSize:'1.3rem',color:'rgb(255, 137, 137)'}}>{"مشاهده پیش نمایش قالب ها"} </Button></div>
 </Col>
                
            </div>
            <div className='support'>
                <Col xs={12}> <div> <img className='img-fluid' src="https://kamva.ir/static/3df7159c7b8caaef310e07eb39521af3/f90b7/support-illustration.svg.png"
                 alt="support" /> </div></Col>
                <Col xs={12}> <div>
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
                <Col xs={12} className='mb-5'><div>
                <InputGroup className="d-flex flex-wrap w-100 ">
    <FormControl
      className='rounded-pill  p-3 w-75 mt-4 '
      placeholder='kamva@example.com'
      style={{fontSize:'1.3rem'}}
    />
    <Button  id="button-addon2" className='d-block rounded-pill border-0 text-dark py-3
     mx-auto my-2 w-50 'style={{backgroundColor:'#FFE226',fontWeight:'600'}}>
      {"رایگان شروع کنید"}
    </Button>
  </InputGroup></div></Col>
            </div>
    
                </Row>
            </Container>
                <Footer/>
            </div>
    )
}

export default Hompage_Content
