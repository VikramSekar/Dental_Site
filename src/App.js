// // import logo from './logo.svg';
// import './App.css';
// import logo from "./images/logo img.png"
// import image_1 from "./images/mid-adult-couple-discussing-with-financial-advisor-while-analyzing-documents-meeting-office 1.jpg"
// import image_2 from "./images/full-shot-woman-traveling-with-lugagge 1.jpg"
// import image_3 from "./images/face-recognition-personal-identification-collage 1.jpg"
// import image_4 from "./images/close-up-business-people-shaking-hands-finishing-up-meeting-negotiation-partnership-concepts 1.jpg"
// import image_5 from "./images/dentist-doing-check-up-patient 1.jpg"
// import map_img from "./images/Group 34.png"
// import galler_img_1 from "./images/dentist-examining-patient-s-teeth 2.jpg"
// import dark_logo from "./images/Medicure-International-logo-dark.png"
// import { useEffect } from 'react';
// import { useState } from 'react';
// import Slider from 'react-slick';
// import Chatbot from 'react-simple-chatbot';
// import ChatBot from 'react-simple-chatbot';
// import { ThemeProvider } from 'styled-components';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


// function App() {

//   useEffect(() => {
//     // Initialize tooltips using Bootstrap's JS
//     const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
//     tooltipTriggerList.map(function (tooltipTriggerEl) {
//       return new window.bootstrap.Tooltip(tooltipTriggerEl);
//     });
//   },
//     []);

//   const settings = {
//     dots: false,
//     arrows: false,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: false
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };




//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemCount = 3; // Number of slides/items

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + itemCount) % itemCount);
//   };

//   // Define your image URLs
//   const images = [
//     "https://images.pexels.com/photos/532192/pexels-photo-532192.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://images.pexels.com/photos/8787089/pexels-photo-8787089.jpeg?auto=compress&cs=tinysrgb&w=600",
//   ];


//   // Define the steps for the chatbot
//   const steps = [
//     {
//       id: '1',
//       message: 'What is your name?',
//       trigger: 'name',
//     },
//     {
//       id: 'name',
//       user: true,
//       trigger: 'welcome',
//     },
//     {
//       id: 'welcome',
//       message: 'Welcome {previousValue}, how can I help you today?',
//       trigger: 'services',
//     },
//     {
//       id: 'services',
//       options: [
//         { value: 'cleaning', label: 'Teeth Cleaning', trigger: 'cleaning' },
//         { value: 'whitening', label: 'Teeth Whitening', trigger: 'whitening' },
//       ],
//     },
//     {
//       id: 'cleaning',
//       message: 'Teeth Cleaning helps maintain your oral hygiene by removing plaque and tartar.',
//       trigger: 'contact',
//     },
//     {
//       id: 'whitening',
//       message: 'Teeth Whitening can give you a brighter smile by removing stains.',
//       trigger: 'contact',
//     },
//     {
//       id: 'contact',
//       message: 'Would you like to schedule an appointment or need our contact information?',
//       trigger: 'contact-options',
//     },
//     {
//       id: 'contact-options',
//       options: [
//         { value: 'schedule', label: 'Schedule Appointment', trigger: 'show-schedule' },
//         { value: 'contact', label: 'Contact Information', trigger: 'show-contact' },
//       ],
//     },
//     {
//       id: 'show-schedule',
//       message: 'You can schedule an appointment by visiting our website or calling us.',
//       trigger: 'end-message',
//     },
//     {
//       id: 'show-contact',
//       message: 'You can contact us at 0422 661 9579.',
//       trigger: 'end-message',
//     },
//     {
//       id: 'end-message',
//       message: 'Was this session useful?',
//       trigger: 'feedback',
//     },
//     {
//       id: 'feedback',
//       options: [
//         { value: 'yes', label: 'Yes', trigger: 'thank-you' },
//         { value: 'no', label: 'No', trigger: 'thank-you' },
//       ],
//     },
//     {
//       id: 'thank-you',
//       message: 'Thank you for your feedback!',
//       end: true,
//     },
//   ];








//   // Define the chatbot theme
//   const theme = {
//     background: '#f5f8fb',
//     fontFamily: 'Arial, Helvetica, sans-serif',
//     headerBgColor: '#b1d135',
//     headerFontColor: '#fff',
//     headerFontSize: '15px',
//     botBubbleColor: '#b1d135',
//     botFontColor: '#fff',
//     userBubbleColor: '#fff',
//     userFontColor: '#4a4a4a',
//   }







//   return (
//     <>

//       <nav class="navbar navbar-expand-lg bg-body-tertiary p-4">
//         <div class="container-fluid">
//           <a class="navbar-brand" href="#Home"> <img src={logo} alt="Logo"></img> </a>
//           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarNav">
//             <ul class="navbar-nav w-100">
//               <li class="nav-item">
//                 <a class="nav-link active text-light" aria-current="page" href="#services">Services</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link text-light" href="#HowItWorks">patient journey</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link text-light" href="#Gallery">gallery</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link text-light" href="#Testimonials">testimonial</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link text-light" href="#Contact">Contact</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link text-light nav-button text-center" href="#">Medical Insurance</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <section>
//         <div class='container-fluid hero-section' id='Home'>
//           <div class='container'>
//             <div class='row'>
//               <div class='col d-flex align-items-center'>
//                 <div class="hero-heading">
//                   <h2 class='text-light mb-4'>a better smile, designed & delivered for the World!</h2>
//                   <p class='text-light'>This is a form of aesthetic dentistry that can help you improve your smile by making your teeth whiter, reshaping teeth that don’t match others, closing gaps between teeth, filling cavities with tooth-colored materials, repairing chips and rough spots with fillings that match and even covering broken teeth with porcelain crowns.</p>
//                   <button type="button" class="btn btn-style mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal"><span>Lets'Chat</span></button>
//                   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                     <div class="modal-dialog modal-dialog-centered">
//                       <div class="modal-content">
//                         <div class="modal-body">
//                           <div className='row d-flex justify-content-center'>
//                             <div className='col-md-12'>
//                               <ThemeProvider theme={theme}>
//                                 <ChatBot style={{ width: '100%' }} steps={steps} />
//                               </ThemeProvider>

//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section class='section-padding services' id='services'>
//         <div class='container-fluid'>
//           <div class='container'>
//             <div class='default-heading-style'>
//               <h6 class='subtitle'>our services</h6>
//             </div>
//             <div class='row'>
//               <div class="col">
//                 <ul class="nav nav-pills" id="pills-tab" role="tablist">
//                   <li class="nav-item" role="presentation">
//                     <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Dental Implants</button>
//                   </li>
//                   <li class="nav-item" role="presentation">
//                     <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Cosmetic Dentistry</button>
//                   </li>
//                   <li class="nav-item" role="presentation">
//                     <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Preventive Dentistry</button>
//                   </li>
//                   <li class="nav-item" role="presentation">
//                     <button class="nav-link" id="pills-general-tab" data-bs-toggle="pill" data-bs-target="#pills-general" type="button" role="tab" aria-controls="pills-general" aria-selected="false">General Dentistry</button>
//                   </li>
//                   <li class="nav-item" role="presentation">
//                     <button class="nav-link" id="pills-clear-tab" data-bs-toggle="pill" data-bs-target="#pills-clear" type="button" role="tab" aria-controls="pills-clear" aria-selected="false">Clear Aligners</button>
//                   </li>
//                 </ul>
//                 <div class="tab-content" id="pills-tabContent">
//                   <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
//                     <div class="row">
//                       <div class="col-lg-6 col-md-12 col-sm-12">
//                         <img class="tab-img" src={image_3} alt=""></img>
//                       </div>
//                       <div class="col-lg-6 col-md-12 col-sm-12 tab-col-2">
//                         <h4 class="mb-3">Cosmetic Dental treatments accross
//                           globe for the patients</h4>
//                         <p class="mb-5">of executives agree that with rapid technological advancements, it is more important than ever for organizations to innovate with purpose</p>
//                         <div class="cus-list mb-5">
//                           <li class="list-unstyled text-primary">Single Tooth</li>
//                           <li class="list-unstyled text-primary">Multiple Tooth</li>
//                           <li class="list-unstyled text-primary">Endosteal</li>
//                           <li class="list-unstyled text-primary">Subperiosteal </li>
//                           <li class="list-unstyled text-primary">Mini Dental</li>
//                           <li class="list-unstyled text-primary">All-on-4</li>
//                         </div>
//                         <button type="button" class="btn btn-style mt-4"><span>Lets'Chat</span></button>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><div class="row">
//                     <div class="col-lg-6 col-md-12 col-sm-12">
//                       <img class="tab-img" src={image_3} alt=""></img>
//                     </div>
//                     <div class="col-lg-6 col-md-12 col-sm-12">
//                       <h4 class="mb-3">Cosmetic Dental treatments accross
//                         globe for the patients</h4>
//                       <p class="mb-5">of executives agree that with rapid technological advancements, it is more important than ever for organizations to innovate with purpose</p>
//                       <div class="cus-list mb-5">
//                         <li class="list-unstyled text-primary">Teeth Whitening</li>
//                         <li class="list-unstyled text-primary">Tooth Coloured Fillings</li>
//                         <li class="list-unstyled text-primary">Gummy Smile Correction</li>
//                         <li class="list-unstyled text-primary">Smile Makeover</li>
//                         <li class="list-unstyled text-primary">Orthodontic Jaw Reconstruction</li>
//                         <li class="list-unstyled text-primary">Veneers</li>
//                         <li class="list-unstyled text-primary">Crowns</li>
//                         <li class="list-unstyled text-primary">Bridges</li>
//                       </div>
//                       <button type="button" class="btn btn-style mt-4"><span>Lets'Chat</span></button>
//                     </div>
//                   </div></div>
//                   <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><div class="row">
//                     <div class="col-lg-6 col-md-12 col-sm-12">
//                       <img class="tab-img" src={image_3} alt=""></img>
//                     </div>
//                     <div class="col-lg-6 col-md-12 col-sm-12">
//                       <h4 class="mb-3">Cosmetic Dental treatments accross
//                         globe for the patients</h4>
//                       <p class="mb-5">of executives agree that with rapid technological advancements, it is more important than ever for organizations to innovate with purpose</p>
//                       <div class="cus-list mb-5">
//                         <li class="list-unstyled text-primary">Oral Examination</li>
//                         <li class="list-unstyled text-primary">Occlusion/ Bite Analysis</li>
//                         <li class="list-unstyled text-primary">Gum Disease Assessment</li>
//                         <li class="list-unstyled text-primary">Oral Cancer Screening</li>
//                         <li class="list-unstyled text-primary">Dental Cleaning</li>
//                         <li class="list-unstyled text-primary">Treatment Consultation</li>
//                       </div>
//                       <button type="button" class="btn btn-style mt-4"><span>Lets'Chat</span></button>
//                     </div>
//                   </div></div>
//                   <div class="tab-pane fade" id="pills-general" role="tabpanel" aria-labelledby="pills-general-tab"><div class="row">
//                     <div class="col-lg-6 col-md-12 col-sm-12">
//                       <img class="tab-img" src={image_3} alt=""></img>
//                     </div>
//                     <div class="col-lg-6 col-md-12 col-sm-12">
//                       <h4 class="mb-3">Cosmetic Dental treatments accross
//                         globe for the patients</h4>
//                       <p class="mb-5">of executives agree that with rapid technological advancements, it is more important than ever for organizations to innovate with purpose</p>
//                       <div class="cus-list mb-5">
//                         <li class="list-unstyled text-primary">Chipped & Damaged Teeth</li>
//                         <li class="list-unstyled text-primary">Root Canal Treatment</li>
//                         <li class="list-unstyled text-primary">Wisdom Tooth Removal</li>
//                         <li class="list-unstyled text-primary">Teeth Extraction</li>
//                         <li class="list-unstyled text-primary">Dental Restoration</li>
//                         <li class="list-unstyled text-primary">Periodontal Therapy</li>
//                         <li class="list-unstyled text-primary">Obturators</li>
//                         <li class="list-unstyled text-primary">Oral Prophylaxis</li>
//                         <li class="list-unstyled text-primary">Composite Restoration</li>
//                         <li class="list-unstyled text-primary">Metal-free Crowns & Bridges</li>
//                       </div>
//                       <button type="button" class="btn btn-style mt-4"><span>Lets'Chat</span></button>
//                     </div>
//                   </div></div>
//                   <div class="tab-pane fade" id="pills-clear" role="tabpanel" aria-labelledby="pills-clear-tab"><div class="row">
//                     <div class="col-lg-6 col-md-12 col-sm-12">
//                       <img class="tab-img" src={image_3} alt=""></img>
//                     </div>
//                     <div class="col-lg-6 col-md-12 col-sm-12">
//                       <h4 class="mb-3">Cosmetic Dental treatments accross
//                         globe for the patients</h4>
//                       <p class="mb-5">of executives agree that with rapid technological advancements, it is more important than ever for organizations to innovate with purpose</p>
//                       <div class="cus-list mb-5">
//                         <li class="list-unstyled text-primary">Initial Enquiry & Expert Consultation</li>
//                         <li class="list-unstyled text-primary">Treatment Confirmation</li>
//                         <li class="list-unstyled text-primary">Payment & Departure for Treatment</li>
//                         <li class="list-unstyled text-primary">Undergo Treatment</li>
//                         <li class="list-unstyled text-primary">Post Operative Care</li>
//                         <li class="list-unstyled text-primary">Returning Home</li>
//                         <li class="list-unstyled text-primary">After Care & Follow up</li>
//                       </div>
//                       <button type="button" class="btn btn-style mt-4"><span>Lets'Chat</span></button>
//                     </div>
//                   </div></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section class='section-padding image-box-section' id='HowItWorks'>
//         <div class='container-fluid'>
//           <div class='container'>
//             <div class='default-heading-style'>
//               <h6 class='subtitle'>how it works</h6>
//               <h4 class='heading text-center mx-auto'>Simple steps for Cosmetic Dental treatments accross
//                 globe for the patients</h4>
//             </div>
//             <div class='row'>
//               <div class='col-lg-3 col-md-6 col-sm-12'>
//                 <div class="image-box">
//                   <div class='image-box-content mx-auto'>
//                     <div class='image'>
//                       <img src={image_1} alt=""></img>
//                     </div>
//                     <div class='number'><span>01</span></div>
//                   </div>
//                   <p class='text-center'>Initial enquiry & Consultaion
//                     with Experts</p>
//                 </div>
//               </div>
//               <div class='col-lg-3 col-md-6 col-sm-12'>
//                 <div class="image-box">
//                   <div class='image-box-content mx-auto'>
//                     <div class='image'>
//                       <img src={image_4} alt=""></img>
//                     </div>
//                     <div class='number'><span>02</span></div>
//                   </div>
//                   <p class='text-center'>Finalise your treatment
//                     booking</p>
//                 </div>
//               </div>
//               <div class='col-lg-3 col-md-6 col-sm-12'>
//                 <div class="image-box">
//                   <div class='image-box-content mx-auto'>
//                     <div class='image'>
//                       <img src={image_2} alt=""></img>
//                     </div>
//                     <div class='number'><span>03</span></div>
//                   </div>
//                   <p class='text-center'>Payment & Departure
//                     for treatment</p>
//                 </div>
//               </div>
//               <div class='col-lg-3 col-md-6 col-sm-12'>
//                 <div class="image-box">
//                   <div class='image-box-content mx-auto'>
//                     <div class='image'>
//                       <img src={image_5} alt=""></img>
//                     </div>
//                     <div class='number'><span>04</span></div>
//                   </div>
//                   <p class='text-center'>Undergo treatment</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section class='section-padding gallery-section' id='Gallery'>
//         <div class='container-fluid'>
//           <div class='container'>
//             <div class='default-heading-style'>
//               <h6 class='subtitle text-light'>gallery</h6>
//               <h4 class='heading text-center mx-auto text-light mb-5'>Gallery of Cosmetic Dental treatments clinics
//                 across the globe</h4>
//             </div>
//             <div class='row'>
//               <div class="col">
//                 <Slider {...settings}>
//                   <div className="col-4 p-2">
//                     <img src={galler_img_1} className='img-fluid' alt="" />
//                   </div>
//                   <div className="col-4 p-2">
//                     <img src={galler_img_1} className='img-fluid' alt="" />
//                   </div>
//                   <div className="col-4 p-2">
//                     <img src={galler_img_1} className='img-fluid' alt="" />
//                   </div>
//                   <div className="col-4 p-2">
//                     <img src={galler_img_1} className='img-fluid' alt="" />
//                   </div>
//                   <div className="col-4 p-2">
//                     <img src={galler_img_1} className='img-fluid' alt="" />
//                   </div>
//                 </Slider>
//                 <button type="button" class="btn btn-style mt-5 mx-auto d-flex"><span>Lets'Talk</span></button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section class='section-padding testimonial-section services' id='Testimonials'>
//         <div class='container-fluid'>
//           <div class='container'>
//             <div class='default-heading-style'>
//               <h6 class='subtitle'>testimonial</h6>
//               <h4 class='heading text-center mx-auto mb-5'>Featured testimonials of our experts an customers around globe</h4>
//             </div>
//             <div class='row'>
//               <div class="col">

//                 <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
//                   <li class="nav-item" role="presentation">
//                     <button class="nav-link active" id="pills-home-tab-1" data-bs-toggle="pill" data-bs-target="#pills-home-1" type="button" role="tab" aria-controls="pills-home-1" aria-selected="true">Doctors</button>
//                   </li>
//                   <li class="nav-item" role="presentation">
//                     <button class="nav-link" id="pills-profile-tab-2" data-bs-toggle="pill" data-bs-target="#pills-profile-2" type="button" role="tab" aria-controls="pills-profile-2" aria-selected="false">Patients</button>
//                   </li>
//                 </ul>
//                 <div class="tab-content" id="pills-tabContent">
//                   <div class="tab-pane fade show active" id="pills-home-1" role="tabpanel" aria-labelledby="pills-home-tab-1">


//                     <section>
//                       <div className="container">
//                         <div className="row d-flex justify-content-center">
//                           <div className="col-md-10">
//                             <div className="cascade-slider_container">
//                               <div className="cascade-slider_slides">
//                                 {[...Array(itemCount)].map((_, index) => (
//                                   <div
//                                     key={index}
//                                     className={`cascade-slider_item ${index === currentIndex ? "now" : ""
//                                       } ${index === (currentIndex + 1) % itemCount ? "next" : ""
//                                       } ${index === (currentIndex - 1 + itemCount) % itemCount
//                                         ? "prev"
//                                         : ""
//                                       }`}
//                                   >
//                                     {/* Replace the image source and content with your own */}
//                                     <img
//                                       className="rounded img-fluid shadow-sm"
//                                       src={images[index]} // Use the corresponding image URL from the 'images' array
//                                       alt={`Slide ${index + 1}`}
//                                     />
//                                   </div>
//                                 ))}
//                               </div>

//                               <div
//                                 className="cascade-slider_arrow cascade-slider_arrow-left"
//                                 onClick={prevSlide}
//                               >
//                                 <i className="fa fa-chevron-left fs-4 text-secondary"></i>
//                               </div>
//                               <div
//                                 className="cascade-slider_arrow cascade-slider_arrow-right"
//                                 onClick={nextSlide}
//                               >
//                                 <i className="fa fa-chevron-right fs-4 text-secondary"></i>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </section>


//                   </div>
//                   <div class="tab-pane fade" id="pills-profile-2" role="tabpanel" aria-labelledby="pills-profile-tab-2">
//                     <section>
//                       <div className="container">
//                         <div className="row d-flex justify-content-center">
//                           <div className="col-md-8">
//                             <div className="cascade-slider_container">
//                               <div className="cascade-slider_slides">
//                                 {[...Array(itemCount)].map((_, index) => (
//                                   <div
//                                     key={index}
//                                     className={`cascade-slider_item ${index === currentIndex ? "now" : ""
//                                       } ${index === (currentIndex + 1) % itemCount ? "next" : ""
//                                       } ${index === (currentIndex - 1 + itemCount) % itemCount
//                                         ? "prev"
//                                         : ""
//                                       }`}
//                                   >
//                                     {/* Replace the image source and content with your own */}
//                                     <img
//                                       className="rounded img-fluid shadow-sm"
//                                       src={images[index]} // Use the corresponding image URL from the 'images' array
//                                       alt={`Slide ${index + 1}`}
//                                     />
//                                   </div>
//                                 ))}
//                               </div>

//                               <div
//                                 className="cascade-slider_arrow cascade-slider_arrow-left"
//                                 onClick={prevSlide}
//                               >
//                                 <i className="fa fa-chevron-left fs-4 text-secondary"></i>
//                               </div>
//                               <div
//                                 className="cascade-slider_arrow cascade-slider_arrow-right"
//                                 onClick={nextSlide}
//                               >
//                                 <i className="fa fa-chevron-right fs-4 text-secondary"></i>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </section>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section class='section-padding faq-section'>
//         <div class='container-fluid'>
//           <div class='container'>
//             <div class='default-heading-style'>
//               <h6 class='subtitle'>faq</h6>
//             </div>
//             <div class='row'>
//               <div class="col">
//                 <div class="accordion" id="accordionExample">
//                   <div class="accordion-item">
//                     <h2 class="accordion-header" id="headingOne">
//                       <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                         What procedures does a cosmetic dentist usually undertake?
//                       </button>
//                     </h2>
//                     <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//                       <div class="accordion-body">
//                         Those with general expertise also undertake diverse procedures, many overlapping with aesthetic procedures. This may include teeth whitening, dental bonding, and fitting crowns, bridges, and veneers. These interventions can significantly enhance the aesthetic aspect of a patient’s smile.
//                       </div>
//                     </div>
//                   </div>

//                   <div class="accordion-item">
//                     <h2 class="accordion-header" id="headingTwo">
//                       <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                         Is cosmetic dentistry worth it?
//                       </button>
//                     </h2>
//                     <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//                       <div class="accordion-body">
//                         Those with general expertise also undertake diverse procedures, many overlapping with aesthetic procedures. This may include teeth whitening, dental bonding, and fitting crowns, bridges, and veneers. These interventions can significantly enhance the aesthetic aspect of a patient’s smile.
//                       </div>
//                     </div>
//                   </div>

//                   <div class="accordion-item">
//                     <h2 class="accordion-header" id="headingThree">
//                       <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                         Are Cosmetic and restorative dentistry the same?
//                       </button>
//                     </h2>
//                     <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
//                       <div class="accordion-body">
//                         Those with general expertise also undertake diverse procedures, many overlapping with aesthetic procedures. This may include teeth whitening, dental bonding, and fitting crowns, bridges, and veneers. These interventions can significantly enhance the aesthetic aspect of a patient’s smile.
//                       </div>
//                     </div>
//                   </div>

//                   <div class="accordion-item">
//                     <h2 class="accordion-header" id="headingFour">
//                       <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
//                         How long does cosmetic dentistry take?
//                       </button>
//                     </h2>
//                     <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
//                       <div class="accordion-body">
//                         Those with general expertise also undertake diverse procedures, many overlapping with aesthetic procedures. This may include teeth whitening, dental bonding, and fitting crowns, bridges, and veneers. These interventions can significantly enhance the aesthetic aspect of a patient’s smile.
//                       </div>
//                     </div>
//                   </div>

//                   <div class="accordion-item">
//                     <h2 class="accordion-header" id="headingFive">
//                       <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
//                         Can a general dentist undertake cosmetic procedures?
//                       </button>
//                     </h2>
//                     <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
//                       <div class="accordion-body">
//                         Those with general expertise also undertake diverse procedures, many overlapping with aesthetic procedures. This may include teeth whitening, dental bonding, and fitting crowns, bridges, and veneers. These interventions can significantly enhance the aesthetic aspect of a patient’s smile.
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section class='section-padding contact-section' id='Contact'>
//         <div class='container-fluid'>
//           <div class='container'>
//             <div class='default-heading-style'>
//               <h6 class='subtitle'>contact</h6>
//             </div>
//             <div class='row'>
//               <div class="col-lg-8 col-md-12 col-sm-12 pb-4">
//                 <div class="map-section">
//                   <div>
//                     <img class="map-img" src={map_img} alt=""></img>
//                   </div>
//                   <div>
//                     <div class="location location-1">
//                       <button type="button" class="btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Boston"></button>
//                     </div>
//                     <div class="location location-2">
//                       <button type="button" class="btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Netherland"></button>
//                     </div>
//                     <div class="location location-3">
//                       <button type="button" class="btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Coimbatore"></button>
//                     </div>
//                     <div class="location location-4">
//                       <button type="button" class="btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Sydney"></button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="col-lg-4 col-md-12 col-sm-12">
//                 <h3>Let's help you
//                   Smile better with
//                   our expertise</h3>
//                 <div class="line"></div>
//                 <button type="button" class="btn btn-style dark-btn"><span>Contact Us</span></button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>




//       <section style={{ minHeight: '40vh' }}>
//         <footer class="bg-light text-dark p-5">
//           <div class="container-fluid">
//             <div class="row d-flex justify-content-center">
//               <div class="col-lg-2 col-md-12 mb-3">
//                 <div className='row'>
//                   <div className='col-5'>
//                     <img src={dark_logo} className='img-fluid mb-3' />
//                   </div>
//                 </div>
//                 <p className='mt-2'>Our quality dental treatments at an affordable price range will make you love visiting information on our services</p>
//               </div>
//               <div class="col-lg-2 col-md-6 mb-3">
//                 <p>Countries</p>
//                 <ul class="list-unstyled" style={{ fontSize: '15px' }}>
//                   <li>Cosmetic Dentistry</li>
//                   <li className='mt-3'>Porcelain Veneers</li>
//                   <li className='mt-3'>Porcelain Veneers</li>
//                   <li className='mt-3'>Cosmetic Dentistry</li>
//                 </ul>
//               </div>
//               <div class="col-lg-2 col-md-6 mb-3">
//                 <p>Service</p>
//                 <ul class="list-unstyled" style={{ fontSize: '15px' }}>
//                   <li>Cosmetic Dentistry</li>
//                   <li className='mt-3'>Porcelain Veneers</li>
//                   <li className='mt-3'>Porcelain Veneers</li>
//                   <li className='mt-3'>Cosmetic Dentistry</li>
//                 </ul>
//               </div>
//               <div class="col-lg-1 col-md-6 mb-3">
//                 <p>Company</p>
//                 <ul class="list-unstyled" style={{ fontSize: '15px' }}>
//                   <li>About Us</li>
//                   <li className='mt-3'>Leadership</li>
//                   <li className='mt-3'>Case Study</li>
//                   <li className='mt-3'>Projects</li>

//                 </ul>
//               </div>
//               <div class="col-lg-1 col-md-6 mb-3">
//                 <p>Career</p>
//                 <ul class="list-unstyled" style={{ fontSize: '15px' }}>
//                   <li>Overview</li>
//                   <li className='mt-3'>Job Openings</li>
//                 </ul>
//               </div>
//               <div class="col-lg-1 col-md-6 mb-3">
//                 <p>Location</p>
//                 <ul class="list-unstyled" style={{ fontSize: '15px' }}>
//                   <li>Texas</li>
//                   <li className='mt-3'>London</li>
//                   <li className='mt-3'>Coimbatore</li>
//                   <li className='mt-3'>Sydney</li>
//                 </ul>
//               </div>
//               <div class="col-lg-1 col-md-6 mb-3">
//                 <p>Media</p>
//                 <ul class="list-unstyled" style={{ fontSize: '15px' }}>
//                   <li>Newsroom</li>
//                   <li className='mt-3'>Event</li>
//                   <li className='mt-3'>Blog</li>
//                 </ul>
//               </div>
//               <div class="col-lg-2 col-md-6 mb-2" style={{ fontSize: '15px' }}>
//                 <p>Resources</p>
//                 <ul class="list-unstyled">
//                   <li>Privacy & Legal</li>
//                   <li className='mt-3'>Supplier</li>
//                   <li className='mt-3'>Security</li>
//                 </ul>
//               </div>
//             </div>
//             <div class="row d-flex justify-content-between align-items-center">
//               <div class="col-md-7 social-icons mt-2">
//                 <a href="https://www.instagram.com " target="_blank"><i class="bi bi-instagram text-dark"></i></a>
//                 <a href="https://www.twitter.com " target="_blank"><i class="bi bi-twitter-x text-dark"></i></a>
//                 <a href="https://www.linkedin.com " target="_blank"><i class="bi bi-linkedin text-dark"></i></a>
//                 <a href="https://www.youtube.com " target="_blank"><i class="bi bi-youtube text-dark"></i></a>
//                 <a href="https://www.facebook.com" target="_blank"><i class="bi bi-facebook text-dark"></i></a>
//                 <a href="https://www.quora.com " target="_blank"><i class="bi bi-quora text-dark"></i></a>
//               </div>
//               <div class="col-md-5 mt-2">
//                 <p> © 2024 Brand All rights reserved.</p>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </section>



//     </>
//   );
// }

// export default App;





import './App.css';
import logo from "./images/logo img.png"
import image_1 from "./images/mid-adult-couple-discussing-with-financial-advisor-while-analyzing-documents-meeting-office 1.jpg"
import image_2 from "./images/full-shot-woman-traveling-with-lugagge 1.jpg"
import image_3 from "./images/face-recognition-personal-identification-collage 1.jpg"
import image_4 from "./images/close-up-business-people-shaking-hands-finishing-up-meeting-negotiation-partnership-concepts 1.jpg"
import image_5 from "./images/dentist-doing-check-up-patient 1.jpg"
import map_img from "./images/Group 34.png"
import galler_img_1 from "./images/dentist-examining-patient-s-teeth 2.jpg"
import dark_logo from "./images/Medicure-International-logo-dark.png"
import { useEffect } from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import Chatbot from 'react-simple-chatbot';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import emailjs from 'emailjs-com';



function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+91'); // default country code
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState(''); // yes or no
  const [preferredCountry, setPreferredCountry] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleCountryCodeChange = (e) => setCountryCode(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleTreatmentChange = (e) => setTreatment(e.target.value);
  const handlePreferredCountryChange = (e) => setPreferredCountry(e.target.value);


  const sendGreeting = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: name,
      from_name: email,
      from_email: email,
      country_code: countryCode,
      phone: phone,
      treatment_status: treatment ? 'Yes' : 'No',
      preferred_country: preferredCountry
    };

    emailjs.send('service_j5t9x0t', 'template_yram1ky', templateParams, '139bcTk_zdGngQxy-')
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
        const modal = new window.bootstrap.Modal(document.getElementById('exampleModal'));
        modal.show();
      })
      .catch((error) => {
        console.error('Failed to send email. Error:', error);
        setMessage('Failed to send greeting.');
      });
  };

  const countryData = [
    { name: 'Afghanistan', code: 'AF', dial_code: '+93' },
    { name: 'Albania', code: 'AL', dial_code: '+355' },
    { name: 'Algeria', code: 'DZ', dial_code: '+213' },
    { name: 'Andorra', code: 'AD', dial_code: '+376' },
    { name: 'Angola', code: 'AO', dial_code: '+244' },
    { name: 'Antigua and Barbuda', code: 'AG', dial_code: '+1-268' },
    { name: 'Argentina', code: 'AR', dial_code: '+54' },
    { name: 'Armenia', code: 'AM', dial_code: '+374' },
    { name: 'Australia', code: 'AU', dial_code: '+61' },
    { name: 'Austria', code: 'AT', dial_code: '+43' },
    { name: 'Azerbaijan', code: 'AZ', dial_code: '+994' },
    { name: 'Bahamas', code: 'BS', dial_code: '+1-242' },
    { name: 'Bahrain', code: 'BH', dial_code: '+973' },
    { name: 'Bangladesh', code: 'BD', dial_code: '+880' },
    { name: 'Barbados', code: 'BB', dial_code: '+1-246' },
    { name: 'Belarus', code: 'BY', dial_code: '+375' },
    { name: 'Belgium', code: 'BE', dial_code: '+32' },
    { name: 'Belize', code: 'BZ', dial_code: '+501' },
    { name: 'Benin', code: 'BJ', dial_code: '+229' },
    { name: 'Bhutan', code: 'BT', dial_code: '+975' },
    { name: 'Bolivia', code: 'BO', dial_code: '+591' },
    { name: 'Bosnia and Herzegovina', code: 'BA', dial_code: '+387' },
    { name: 'Botswana', code: 'BW', dial_code: '+267' },
    { name: 'Brazil', code: 'BR', dial_code: '+55' },
    { name: 'Brunei', code: 'BN', dial_code: '+673' },
    { name: 'Bulgaria', code: 'BG', dial_code: '+359' },
    { name: 'Burkina Faso', code: 'BF', dial_code: '+226' },
    { name: 'Burundi', code: 'BI', dial_code: '+257' },
    { name: 'Cabo Verde', code: 'CV', dial_code: '+238' },
    { name: 'Cambodia', code: 'KH', dial_code: '+855' },
    { name: 'Cameroon', code: 'CM', dial_code: '+237' },
    { name: 'Canada', code: 'CA', dial_code: '+1' },
    { name: 'Central African Republic', code: 'CF', dial_code: '+236' },
    { name: 'Chad', code: 'TD', dial_code: '+235' },
    { name: 'Chile', code: 'CL', dial_code: '+56' },
    { name: 'China', code: 'CN', dial_code: '+86' },
    { name: 'Colombia', code: 'CO', dial_code: '+57' },
    { name: 'Comoros', code: 'KM', dial_code: '+269' },
    { name: 'Congo (Congo-Brazzaville)', code: 'CG', dial_code: '+242' },
    { name: 'Congo (DR Congo)', code: 'CD', dial_code: '+243' },
    { name: 'Costa Rica', code: 'CR', dial_code: '+506' },
    { name: 'Croatia', code: 'HR', dial_code: '+385' },
    { name: 'Cuba', code: 'CU', dial_code: '+53' },
    { name: 'Cyprus', code: 'CY', dial_code: '+357' },
    { name: 'Czech Republic', code: 'CZ', dial_code: '+420' },
    { name: 'Denmark', code: 'DK', dial_code: '+45' },
    { name: 'Djibouti', code: 'DJ', dial_code: '+253' },
    { name: 'Dominica', code: 'DM', dial_code: '+1-767' },
    { name: 'Dominican Republic', code: 'DO', dial_code: '+1-809' },
    { name: 'Ecuador', code: 'EC', dial_code: '+593' },
    { name: 'Egypt', code: 'EG', dial_code: '+20' },
    { name: 'El Salvador', code: 'SV', dial_code: '+503' },
    { name: 'Equatorial Guinea', code: 'GQ', dial_code: '+240' },
    { name: 'Eritrea', code: 'ER', dial_code: '+291' },
    { name: 'Estonia', code: 'EE', dial_code: '+372' },
    { name: 'Eswatini', code: 'SZ', dial_code: '+268' },
    { name: 'Ethiopia', code: 'ET', dial_code: '+251' },
    { name: 'Fiji', code: 'FJ', dial_code: '+679' },
    { name: 'Finland', code: 'FI', dial_code: '+358' },
    { name: 'France', code: 'FR', dial_code: '+33' },
    { name: 'Gabon', code: 'GA', dial_code: '+241' },
    { name: 'Gambia', code: 'GM', dial_code: '+220' },
    { name: 'Georgia', code: 'GE', dial_code: '+995' },
    { name: 'Germany', code: 'DE', dial_code: '+49' },
    { name: 'Ghana', code: 'GH', dial_code: '+233' },
    { name: 'Greece', code: 'GR', dial_code: '+30' },
    { name: 'Grenada', code: 'GD', dial_code: '+1-473' },
    { name: 'Guatemala', code: 'GT', dial_code: '+502' },
    { name: 'Guinea', code: 'GN', dial_code: '+224' },
    { name: 'Guinea-Bissau', code: 'GW', dial_code: '+245' },
    { name: 'Guyana', code: 'GY', dial_code: '+592' },
    { name: 'Haiti', code: 'HT', dial_code: '+509' },
    { name: 'Honduras', code: 'HN', dial_code: '+504' },
    { name: 'Hungary', code: 'HU', dial_code: '+36' },
    { name: 'Iceland', code: 'IS', dial_code: '+354' },
    { name: 'India', code: 'IN', dial_code: '+91' },
    { name: 'Indonesia', code: 'ID', dial_code: '+62' },
    { name: 'Iran', code: 'IR', dial_code: '+98' },
    { name: 'Iraq', code: 'IQ', dial_code: '+964' },
    { name: 'Ireland', code: 'IE', dial_code: '+353' },
    { name: 'Israel', code: 'IL', dial_code: '+972' },
    { name: 'Italy', code: 'IT', dial_code: '+39' },
    { name: 'Jamaica', code: 'JM', dial_code: '+1-876' },
    { name: 'Japan', code: 'JP', dial_code: '+81' },
    { name: 'Jordan', code: 'JO', dial_code: '+962' },
    { name: 'Kazakhstan', code: 'KZ', dial_code: '+7' },
    { name: 'Kenya', code: 'KE', dial_code: '+254' },
    { name: 'Kiribati', code: 'KI', dial_code: '+686' },
    { name: 'Kuwait', code: 'KW', dial_code: '+965' },
    { name: 'Kyrgyzstan', code: 'KG', dial_code: '+996' },
    { name: 'Laos', code: 'LA', dial_code: '+856' },
    { name: 'Latvia', code: 'LV', dial_code: '+371' },
    { name: 'Lebanon', code: 'LB', dial_code: '+961' },
    { name: 'Lesotho', code: 'LS', dial_code: '+266' },
    { name: 'Liberia', code: 'LR', dial_code: '+231' },
    { name: 'Libya', code: 'LY', dial_code: '+218' },
    { name: 'Liechtenstein', code: 'LI', dial_code: '+423' },
    { name: 'Lithuania', code: 'LT', dial_code: '+370' },
    { name: 'Luxembourg', code: 'LU', dial_code: '+352' },
    { name: 'Madagascar', code: 'MG', dial_code: '+261' },
    { name: 'Malawi', code: 'MW', dial_code: '+265' },
    { name: 'Malaysia', code: 'MY', dial_code: '+60' },
    { name: 'Maldives', code: 'MV', dial_code: '+960' },
    { name: 'Mali', code: 'ML', dial_code: '+223' },
    { name: 'Malta', code: 'MT', dial_code: '+356' },
    { name: 'Marshall Islands', code: 'MH', dial_code: '+692' },
    { name: 'Mauritania', code: 'MR', dial_code: '+222' },
    { name: 'Mauritius', code: 'MU', dial_code: '+230' },
    { name: 'Mexico', code: 'MX', dial_code: '+52' },
    { name: 'Micronesia', code: 'FM', dial_code: '+691' },
    { name: 'Moldova', code: 'MD', dial_code: '+373' },
    { name: 'Monaco', code: 'MC', dial_code: '+377' },
    { name: 'Mongolia', code: 'MN', dial_code: '+976' },
    { name: 'Montenegro', code: 'ME', dial_code: '+382' },
    { name: 'Morocco', code: 'MA', dial_code: '+212' },
    { name: 'Mozambique', code: 'MZ', dial_code: '+258' },
    { name: 'Myanmar (Burma)', code: 'MM', dial_code: '+95' },
    { name: 'Namibia', code: 'NA', dial_code: '+264' },
    { name: 'Nauru', code: 'NR', dial_code: '+674' },
    { name: 'Nepal', code: 'NP', dial_code: '+977' },
    { name: 'Netherlands', code: 'NL', dial_code: '+31' },
    { name: 'New Zealand', code: 'NZ', dial_code: '+64' },
    { name: 'Nicaragua', code: 'NI', dial_code: '+505' },
    { name: 'Niger', code: 'NE', dial_code: '+227' },
    { name: 'Nigeria', code: 'NG', dial_code: '+234' },
    { name: 'North Korea', code: 'KP', dial_code: '+850' },
    { name: 'North Macedonia', code: 'MK', dial_code: '+389' },
    { name: 'Norway', code: 'NO', dial_code: '+47' },
    { name: 'Oman', code: 'OM', dial_code: '+968' },
    { name: 'Pakistan', code: 'PK', dial_code: '+92' },
    { name: 'Palau', code: 'PW', dial_code: '+680' },
    { name: 'Palestine', code: 'PS', dial_code: '+970' },
    { name: 'Panama', code: 'PA', dial_code: '+507' },
    { name: 'Papua New Guinea', code: 'PG', dial_code: '+675' },
    { name: 'Paraguay', code: 'PY', dial_code: '+595' },
    { name: 'Peru', code: 'PE', dial_code: '+51' },
    { name: 'Philippines', code: 'PH', dial_code: '+63' },
    { name: 'Poland', code: 'PL', dial_code: '+48' },
    { name: 'Portugal', code: 'PT', dial_code: '+351' },
    { name: 'Qatar', code: 'QA', dial_code: '+974' },
    { name: 'Romania', code: 'RO', dial_code: '+40' },
    { name: 'Russia', code: 'RU', dial_code: '+7' },
    { name: 'Rwanda', code: 'RW', dial_code: '+250' },
    { name: 'Saint Kitts and Nevis', code: 'KN', dial_code: '+1-869' },
    { name: 'Saint Lucia', code: 'LC', dial_code: '+1-758' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC', dial_code: '+1-784' },
    { name: 'Samoa', code: 'WS', dial_code: '+685' },
    { name: 'San Marino', code: 'SM', dial_code: '+378' },
    { name: 'Sao Tome and Principe', code: 'ST', dial_code: '+239' },
    { name: 'Saudi Arabia', code: 'SA', dial_code: '+966' },
    { name: 'Senegal', code: 'SN', dial_code: '+221' },
    { name: 'Serbia', code: 'RS', dial_code: '+381' },
    { name: 'Seychelles', code: 'SC', dial_code: '+248' },
    { name: 'Sierra Leone', code: 'SL', dial_code: '+232' },
    { name: 'Singapore', code: 'SG', dial_code: '+65' },
    { name: 'Slovakia', code: 'SK', dial_code: '+421' },
    { name: 'Slovenia', code: 'SI', dial_code: '+386' },
    { name: 'Solomon Islands', code: 'SB', dial_code: '+677' },
    { name: 'Somalia', code: 'SO', dial_code: '+252' },
    { name: 'South Africa', code: 'ZA', dial_code: '+27' },
    { name: 'South Korea', code: 'KR', dial_code: '+82' },
    { name: 'South Sudan', code: 'SS', dial_code: '+211' },
    { name: 'Spain', code: 'ES', dial_code: '+34' },
    { name: 'Sri Lanka', code: 'LK', dial_code: '+94' },
    { name: 'Sudan', code: 'SD', dial_code: '+249' },
    { name: 'Suriname', code: 'SR', dial_code: '+597' },
    { name: 'Sweden', code: 'SE', dial_code: '+46' },
    { name: 'Switzerland', code: 'CH', dial_code: '+41' },
    { name: 'Syria', code: 'SY', dial_code: '+963' },
    { name: 'Taiwan', code: 'TW', dial_code: '+886' },
    { name: 'Tajikistan', code: 'TJ', dial_code: '+992' },
    { name: 'Tanzania', code: 'TZ', dial_code: '+255' },
    { name: 'Thailand', code: 'TH', dial_code: '+66' },
    { name: 'Timor-Leste', code: 'TL', dial_code: '+670' },
    { name: 'Togo', code: 'TG', dial_code: '+228' },
    { name: 'Tonga', code: 'TO', dial_code: '+676' },
    { name: 'Trinidad and Tobago', code: 'TT', dial_code: '+1-868' },
    { name: 'Tunisia', code: 'TN', dial_code: '+216' },
    { name: 'Turkey', code: 'TR', dial_code: '+90' },
    { name: 'Turkmenistan', code: 'TM', dial_code: '+993' },
    { name: 'Tuvalu', code: 'TV', dial_code: '+688' },
    { name: 'Uganda', code: 'UG', dial_code: '+256' },
    { name: 'Ukraine', code: 'UA', dial_code: '+380' },
    { name: 'United Arab Emirates', code: 'AE', dial_code: '+971' },
    { name: 'United Kingdom', code: 'GB', dial_code: '+44' },
    { name: 'United States', code: 'US', dial_code: '+1' },
    { name: 'Uruguay', code: 'UY', dial_code: '+598' },
    { name: 'Uzbekistan', code: 'UZ', dial_code: '+998' },
    { name: 'Vanuatu', code: 'VU', dial_code: '+678' },
    { name: 'Vatican City', code: 'VA', dial_code: '+379' },
    { name: 'Venezuela', code: 'VE', dial_code: '+58' },
    { name: 'Vietnam', code: 'VN', dial_code: '+84' },
    { name: 'Yemen', code: 'YE', dial_code: '+967' },
    { name: 'Zambia', code: 'ZM', dial_code: '+260' },
    { name: 'Zimbabwe', code: 'ZW', dial_code: '+263' }
  ];

  const ReloadPage = () => {
    window.location.reload();
  };



  useEffect(() => {
    // Initialize tooltips using Bootstrap's JS
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  },
    []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };




  const [currentIndex, setCurrentIndex] = useState(0);
  const itemCount = 3; // Number of slides/items

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + itemCount) % itemCount);
  };

  // Define your image URLs
  const images = [
    "https://images.pexels.com/photos/532192/pexels-photo-532192.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/8787089/pexels-photo-8787089.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];


  // Define the steps for the chatbot
  const steps = [
    {
      id: '1',
      message: 'What is your name?',
      trigger: 'name',
    },
    {
      id: 'name',
      user: true,
      trigger: 'welcome',
    },
    {
      id: 'welcome',
      message: 'Welcome {previousValue}, how can I help you today?',
      trigger: 'services',
    },
    {
      id: 'services',
      options: [
        { value: 'cleaning', label: 'Teeth Cleaning', trigger: 'cleaning' },
        { value: 'whitening', label: 'Teeth Whitening', trigger: 'whitening' },
      ],
    },
    {
      id: 'cleaning',
      message: 'Teeth Cleaning helps maintain your oral hygiene by removing plaque and tartar.',
      trigger: 'contact',
    },
    {
      id: 'whitening',
      message: 'Teeth Whitening can give you a brighter smile by removing stains.',
      trigger: 'contact',
    },
    {
      id: 'contact',
      message: 'Would you like to schedule an appointment or need our contact information?',
      trigger: 'contact-options',
    },
    {
      id: 'contact-options',
      options: [
        { value: 'schedule', label: 'Schedule Appointment', trigger: 'show-schedule' },
        { value: 'contact', label: 'Contact Information', trigger: 'show-contact' },
      ],
    },
    {
      id: 'show-schedule',
      message: 'You can schedule an appointment by visiting our website or calling us.',
      trigger: 'end-message',
    },
    {
      id: 'show-contact',
      message: 'You can contact us at 0422 661 9579.',
      trigger: 'end-message',
    },
    {
      id: 'end-message',
      message: 'Was this session useful?',
      trigger: 'feedback',
    },
    {
      id: 'feedback',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'thank-you' },
        { value: 'no', label: 'No', trigger: 'thank-you' },
      ],
    },
    {
      id: 'thank-you',
      message: 'Thank you for your feedback!',
      end: true,
    },
  ];








  // Define the chatbot theme
  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Arial, Helvetica, sans-serif',
    headerBgColor: '#b1d135',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#b1d135',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  }







  return (
    <>

      <nav class="navbar navbar-expand-lg bg-body-tertiary p-4">
        <div class="container-fluid">
          <a class="navbar-brand" href="#Home"> <img src={logo} alt="Logo"></img> </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav w-100">
              <li class="nav-item">
                <a class="nav-link active text-light" aria-current="page" href="#services">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#HowItWorks">patient journey</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#Gallery">gallery</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#Testimonials">testimonial</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#Contact">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light nav-button text-center" href="#">Medical Insurance</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section>
        <div class='container-fluid hero-section' id='Home'>
          <div class='container'>
            <div class='row'>
              <div class='col d-flex align-items-center'>
                <div class="hero-heading">
                  <h2 class='text-light mb-4'>Access High-Quality Dental Treatments Abroad In Just a Click!  </h2>
                  <p class='text-light'>At Medicure International, a health & wellness tour facilitator, we connect patients with world-class healthcare providers around the globe to ensure patients receive top-quality treatment tailored to their specific needs. We take care of the end-to-end processes and ensure seamless and stress-free medical treatments worldwide. </p>
                  <button type="button" class="btn btn-style mt-4" data-bs-toggle="modal" data-bs-target="#exampleModalChat"><span>Lets'Chat</span></button>
                  <div class="modal fade" id="exampleModalChat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-body">
                          <div className='row d-flex justify-content-center'>
                            <div className='col-md-12'>
                              <ThemeProvider theme={theme}>
                                <ChatBot style={{ width: '100%' }} steps={steps} />
                              </ThemeProvider>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='section-padding services' id='services'>
        <div class='container-fluid'>
          <div class='container'>
            <div class='default-heading-style'>
              <h6 class='subtitle'>our services</h6>
            </div>
            <div class='row'>
              <div class="col">
                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Dental Implants</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Cosmetic Dentistry</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Preventive Dentistry</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-general-tab" data-bs-toggle="pill" data-bs-target="#pills-general" type="button" role="tab" aria-controls="pills-general" aria-selected="false">General Dentistry</button>
                  </li>
                  {/* <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-clear-tab" data-bs-toggle="pill" data-bs-target="#pills-clear" type="button" role="tab" aria-controls="pills-clear" aria-selected="false">Clear Aligners</button>
                  </li> */}
                </ul>


                <div class="tab-content" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="row">
                      <div class="col-lg-6 col-md-12 col-sm-12">
                        <img class="tab-img" src={image_3} alt=""></img>
                      </div>
                      <div class="col-lg-6 col-md-12 col-sm-12 tab-col-2 tab-content-1">
                        {/* <h4 class="mb-3">Cosmetic Dental treatments accross
                          globe for the patients</h4> */}
                        <p class="mb-5">Dental Implants are an artificial dental root made to replace the damaged or infected natural roots. High quality dental implants, success rate, and comfort are the factors to consider before choosing treatment destination. </p>
                        <div class="cus-list mb-5">
                          <li class="list-unstyled text-primary">Single Tooth</li>
                          <li class="list-unstyled text-primary">Multiple Tooth</li>
                          <li class="list-unstyled text-primary">Endosteal</li>
                          <li class="list-unstyled text-primary">Subperiosteal </li>
                          <li class="list-unstyled text-primary">Mini Dental</li>
                          <li class="list-unstyled text-primary">All-on-4</li>
                        </div>
                        <button type="button" class="btn btn-style mt-4"><span>Lets'Chat</span></button>
                      </div>
                    </div>
                  </div>


                  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <img class="tab-img" src={image_3} alt=""></img>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 tab-content-1">
                      {/* <h4 class="mb-3">Cosmetic Dental treatments accross
                        globe for the patients</h4> */}
                      <p class="mb-5">A healthy, beautiful and confident smile can enhance your appearance and personality. It is significant to consider the expertise, success rate of the hospital and technology used for the treatment.</p>
                      <div class="cus-list mb-5">
                        <li class="list-unstyled text-primary">Teeth Whitening</li>
                        <li class="list-unstyled text-primary">Tooth Coloured Fillings</li>
                        <li class="list-unstyled text-primary">Gummy Smile Correction</li>
                        <li class="list-unstyled text-primary">Smile Makeover</li>
                        <li class="list-unstyled text-primary">Orthodontic Jaw Reconstruction</li>
                        <li class="list-unstyled text-primary">Veneers</li>
                        <li class="list-unstyled text-primary">Crowns</li>
                        <li class="list-unstyled text-primary">Bridges</li>
                      </div>
                      <button type="button" class="btn btn-style mt-4"><span>Lets'Chat</span></button>
                    </div>
                  </div></div>


                  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <img class="tab-img" src={image_3} alt=""></img>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 tab-content-1">
                      {/* <h4 class="mb-3">Cosmetic Dental treatments accross
                        globe for the patients</h4> */}
                      <p class="mb-5">The smart choice to keep dental issues at the bay. Technologies have evolved so much that you can identify the issues at the earliest to prevent any oral diseases and improve oral health.</p>
                      <div class="cus-list mb-5">
                        <li class="list-unstyled text-primary">Oral Examination</li>
                        <li class="list-unstyled text-primary">Occlusion/ Bite Analysis</li>
                        <li class="list-unstyled text-primary">Gum Disease Assessment</li>
                        <li class="list-unstyled text-primary">Oral Cancer Screening</li>
                        <li class="list-unstyled text-primary">Dental Cleaning</li>
                        <li class="list-unstyled text-primary">Treatment Consultation</li>
                      </div>
                      <button type="button" class="btn btn-style mt-4"><span>Lets'Chat</span></button>
                    </div>
                  </div></div>


                  <div class="tab-pane fade" id="pills-general" role="tabpanel" aria-labelledby="pills-general-tab"><div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <img class="tab-img" src={image_3} alt=""></img>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 tab-content-1">
                      {/* <h4 class="mb-3">Cosmetic Dental treatments accross
                        globe for the patients</h4> */}
                      <p class="mb-5">From general checkups to restorative treatments, patients can enjoy high quality dental treatments from accredited dental clinics and hospitals around the world with our assistance.</p>
                      <div class="cus-list mb-5">
                        <li class="list-unstyled text-primary">Chipped & Damaged Teeth</li>
                        <li class="list-unstyled text-primary">Root Canal Treatment</li>
                        <li class="list-unstyled text-primary">Wisdom Tooth Removal</li>
                        <li class="list-unstyled text-primary">Teeth Extraction</li>
                        <li class="list-unstyled text-primary">Dental Restoration</li>
                        <li class="list-unstyled text-primary">Periodontal Therapy</li>
                        <li class="list-unstyled text-primary">Obturators</li>
                        <li class="list-unstyled text-primary">Oral Prophylaxis</li>
                        <li class="list-unstyled text-primary">Composite Restoration</li>
                        <li class="list-unstyled text-primary">Metal-free Crowns & Bridges</li>
                      </div>
                      <button type="button" class="btn btn-style mt-4"><span>Lets'Chat</span></button>
                    </div>
                  </div></div>


                  {/* <div class="tab-pane fade" id="pills-clear" role="tabpanel" aria-labelledby="pills-clear-tab"><div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <img class="tab-img" src={image_3} alt=""></img>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <h4 class="mb-3">Cosmetic Dental treatments accross
                        globe for the patients</h4>
                      <p class="mb-5">of executives agree that with rapid technological advancements, it is more important than ever for organizations to innovate with purpose</p>
                      <div class="cus-list mb-5">
                        <li class="list-unstyled text-primary">Initial Enquiry & Expert Consultation</li>
                        <li class="list-unstyled text-primary">Treatment Confirmation</li>
                        <li class="list-unstyled text-primary">Payment & Departure for Treatment</li>
                        <li class="list-unstyled text-primary">Undergo Treatment</li>
                        <li class="list-unstyled text-primary">Post Operative Care</li>
                        <li class="list-unstyled text-primary">Returning Home</li>
                        <li class="list-unstyled text-primary">After Care & Follow up</li>
                      </div>
                      <button type="button" class="btn btn-style mt-4"><span>Lets'Chat</span></button>
                    </div>
                  </div></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='section-padding image-box-section' id='HowItWorks'>
        <div class='container-fluid'>
          <div class='container'>
            <div class='default-heading-style'>
              <h6 class='subtitle'>how it works</h6>
              <h4 class='heading text-center mx-auto'>Seamless Patient Journey</h4>
            </div>
            <div class='row'>
              <div class='col-lg-4 col-md-6 col-sm-12'>
                <div class="image-box">
                  <div class='image-box-content mx-auto'>
                    <div class='image'>
                      <img src={image_1} alt=""></img>
                    </div>
                    <div class='number'><span>01</span></div>
                  </div>
                  <p class='text-center'>Initial Enquiry & Consultation with Experts </p>
                </div>
              </div>
              <div class='col-lg-4 col-md-6 col-sm-12'>
                <div class="image-box">
                  <div class='image-box-content mx-auto'>
                    <div class='image'>
                      <img src={image_4} alt=""></img>
                    </div>
                    <div class='number'><span>02</span></div>
                  </div>
                  <p class='text-center'>Finalizing Treatment & Departure</p>
                </div>
              </div>
              <div class='col-lg-4 col-md-6 col-sm-12'>
                <div class="image-box">
                  <div class='image-box-content mx-auto'>
                    <div class='image'>
                      <img src={image_2} alt=""></img>
                    </div>
                    <div class='number'><span>03</span></div>
                  </div>
                  <p class='text-center'>Undergo Treatment & Post-operative care</p>
                </div>
              </div>
            </div>

            <div class='row justify-content-center'>
              <div class='col-lg-4 col-md-6 col-sm-12'>
                <div class="image-box">
                  <div class='image-box-content mx-auto'>
                    <div class='image'>
                      <img src={image_5} alt=""></img>
                    </div>
                    <div class='number'><span>04</span></div>
                  </div>
                  <p class='text-center'>Returning Home & Aftercare </p>
                </div>
              </div>
              <div class='col-lg-4 col-md-6 col-sm-12'>
                <div class="image-box">
                  <div class='image-box-content mx-auto'>
                    <div class='image'>
                      <img src={image_5} alt=""></img>
                    </div>
                    <div class='number'><span>05</span></div>
                  </div>
                  <p class='text-center'>Follow-up & Feedback </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section class='section-padding gallery-section' id='Gallery'>
        <div class='container-fluid'>
          <div class='container'>
            <div class='default-heading-style'>
              <h6 class='subtitle text-light'>gallery</h6>
              <h4 class='heading text-center mx-auto text-light mb-5'>Dental Treatment Gallery</h4>
            </div>
            <div class='row'>
              <div class="col">
                <Slider {...settings}>
                  <div className="col-4 p-2">
                    <img src={galler_img_1} className='img-fluid' alt="" />
                  </div>
                  <div className="col-4 p-2">
                    <img src={galler_img_1} className='img-fluid' alt="" />
                  </div>
                  <div className="col-4 p-2">
                    <img src={galler_img_1} className='img-fluid' alt="" />
                  </div>
                  <div className="col-4 p-2">
                    <img src={galler_img_1} className='img-fluid' alt="" />
                  </div>
                  <div className="col-4 p-2">
                    <img src={galler_img_1} className='img-fluid' alt="" />
                  </div>
                </Slider>
                <button type="button" class="btn btn-style mt-5 mx-auto d-flex"><span>Lets'Talk</span></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='section-padding testimonial-section services' id='Testimonials'>
        <div class='container-fluid'>
          <div class='container'>
            <div class='default-heading-style'>
              <h6 class='subtitle'>testimonial</h6>
              <h4 class='heading text-center mx-auto mb-5'>Featured testimonials of our experts an customers around globe</h4>
            </div>
            <div class='row'>
              <div class="col">

                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab-1" data-bs-toggle="pill" data-bs-target="#pills-home-1" type="button" role="tab" aria-controls="pills-home-1" aria-selected="true">Doctors</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab-2" data-bs-toggle="pill" data-bs-target="#pills-profile-2" type="button" role="tab" aria-controls="pills-profile-2" aria-selected="false">Patients</button>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="pills-home-1" role="tabpanel" aria-labelledby="pills-home-tab-1">


                    <section>
                      <div className="container">
                        <div className="row d-flex justify-content-center">
                          <div className="col-md-10">
                            <div className="cascade-slider_container">
                              <div className="cascade-slider_slides">
                                {[...Array(itemCount)].map((_, index) => (
                                  <div
                                    key={index}
                                    className={`cascade-slider_item ${index === currentIndex ? "now" : ""
                                      } ${index === (currentIndex + 1) % itemCount ? "next" : ""
                                      } ${index === (currentIndex - 1 + itemCount) % itemCount
                                        ? "prev"
                                        : ""
                                      }`}
                                  >
                                    {/* Replace the image source and content with your own */}
                                    <img
                                      className="rounded img-fluid shadow-sm"
                                      src={images[index]} // Use the corresponding image URL from the 'images' array
                                      alt={`Slide ${index + 1}`}
                                    />
                                  </div>
                                ))}
                              </div>

                              <div
                                className="cascade-slider_arrow cascade-slider_arrow-left"
                                onClick={prevSlide}
                              >
                                <i className="fa fa-chevron-left fs-4 text-secondary"></i>
                              </div>
                              <div
                                className="cascade-slider_arrow cascade-slider_arrow-right"
                                onClick={nextSlide}
                              >
                                <i className="fa fa-chevron-right fs-4 text-secondary"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>


                  </div>
                  <div class="tab-pane fade" id="pills-profile-2" role="tabpanel" aria-labelledby="pills-profile-tab-2">
                    <section>
                      <div className="container">
                        <div className="row d-flex justify-content-center">
                          <div className="col-md-8">
                            <div className="cascade-slider_container">
                              <div className="cascade-slider_slides">
                                {[...Array(itemCount)].map((_, index) => (
                                  <div
                                    key={index}
                                    className={`cascade-slider_item ${index === currentIndex ? "now" : ""
                                      } ${index === (currentIndex + 1) % itemCount ? "next" : ""
                                      } ${index === (currentIndex - 1 + itemCount) % itemCount
                                        ? "prev"
                                        : ""
                                      }`}
                                  >
                                    {/* Replace the image source and content with your own */}
                                    <img
                                      className="rounded img-fluid shadow-sm"
                                      src={images[index]} // Use the corresponding image URL from the 'images' array
                                      alt={`Slide ${index + 1}`}
                                    />
                                  </div>
                                ))}
                              </div>

                              <div
                                className="cascade-slider_arrow cascade-slider_arrow-left"
                                onClick={prevSlide}
                              >
                                <i className="fa fa-chevron-left fs-4 text-secondary"></i>
                              </div>
                              <div
                                className="cascade-slider_arrow cascade-slider_arrow-right"
                                onClick={nextSlide}
                              >
                                <i className="fa fa-chevron-right fs-4 text-secondary"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='section-padding faq-section'>
        <div class='container-fluid'>
          <div class='container'>
            <div class='default-heading-style'>
              <h6 class='subtitle'>faq</h6>
            </div>
            <div class='row'>
              <div class="col">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Why should I consider dental treatment abroad?
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        Opting for dental treatments abroad enables you to access the modern technology being used for treatment which can possibly reduce the risks and embrace faster healing. It also combines travel along with the treatment.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How do I find a reputable clinic abroad?
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        Finding the right clinic for your specific needs is our responsibility. We give the best options based on the success rate, reviews, state-of-the-art facilities, accreditations and other factors. If you have a predefined treatment country, we can help you in choosing the best clinic or hospital.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        What should I do if I face any complications after treatment?
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        Don’t worry! We’ve got you covered! The package includes aftercare, and we make the necessary arrangements till the complications has been resolved.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        How can I cover the expenses with insurance?
                      </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        Along with the treatment plan suggestions, we help you in choosing the best insurance plan that can save more money.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        How do I plan my travel and accommodation?
                      </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        Our package includes end-to-end solutions to all your needs. You will be explained regarding the travel, accommodation, packing and others during the consultation process.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='section-padding contact-section' id='Contact'>
        <div class='container-fluid'>
          <div class='container'>
            <div class='default-heading-style'>
              <h6 class='subtitle'>contact</h6>
            </div>
            <div class='row'>
              <div class="col-lg-8 col-md-12 col-sm-12 pb-4">
                <div class="map-section">
                  <div>
                    <img class="map-img" src={map_img} alt=""></img>
                  </div>
                  <div>
                    <div class="location location-1">
                      <button type="button" class="btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Boston"></button>
                    </div>
                    <div class="location location-2">
                      <button type="button" class="btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Netherland"></button>
                    </div>
                    <div class="location location-3">
                      <button type="button" class="btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Coimbatore"></button>
                    </div>
                    <div class="location location-4">
                      <button type="button" class="btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Sydney"></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12">
                <h3>Elevate your personality and confidence in just a click!</h3>
                <div class="line"></div>
                <a data-bs-toggle="modal" href="#exampleModalToggle" role="button"> <button type="button" class="btn btn-style dark-btn" data-bs-toggle="modal" data-bs-target="#exampleModalform"><span>Enquire now!</span></button> </a>
                <div class="modal fade" id="exampleModalform" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-body p-2">
                        <div className='container'>
                          <div className='row d-flex justify-content-center'>
                            <div className='col-md-12 mt-4 border border-2 p-3 bg-light rounded'>
                              <h2 className='fs-1 textsuccess border border-5 border-light bg-white shadow-sm p-2 text-center rounded'>Get In Touch</h2>
                              <form onSubmit={sendGreeting}>
                                <input
                                  type="text"
                                  placeholder="Enter Name"
                                  className="form-control mt-3"
                                  value={name}
                                  onChange={handleNameChange}
                                  required
                                />
                                <input
                                  type="email"
                                  placeholder="Enter Email"
                                  className="form-control mt-3"
                                  value={email}
                                  onChange={handleEmailChange}
                                  required
                                />
                                <div className="input-group mt-3">
                                  <select
                                    className="form-select"
                                    value={countryCode}
                                    onChange={handleCountryCodeChange}
                                  >
                                    {countryData.map((country) => (
                                      <option key={country.code} value={country.dial_code}>
                                        {country.name} ({country.dial_code})
                                      </option>
                                    ))}
                                  </select>
                                  <input
                                    type="tel"
                                    placeholder="Enter Phone Number"
                                    className="form-control"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    required
                                  />
                                </div>
                                <select
                                  className="form-control mt-3"
                                  value={treatment}
                                  onChange={handleTreatmentChange}
                                  required
                                >
                                  <option value="">Treatment Required?</option>
                                  <option value="Yes">Yes</option>
                                  <option value="No">No</option>
                                </select>
                                <select
                                  className="form-control mt-3"
                                  value={preferredCountry}
                                  onChange={handlePreferredCountryChange}
                                  required
                                >
                                  <option value="">Select Preferred Country</option>
                                  {countryData.map((country) => (
                                    <option key={country.code} value={country.name}>
                                      {country.name}
                                    </option>
                                  ))}
                                </select>
                                <div className='text-end'>
                                  <button className="btn btn-success mt-3" type="submit">Send</button>
                                </div>
                              </form>
                              {message && <p>{message}</p>}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Greetings!</h5>
                      </div>
                      <div className="modal-body">
                        Hello {name}! Thank you for contacting, we appreciate your kindness, generosity, and support. One of our team members will contact you as soon as possible.
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-success" onClick={ReloadPage} data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>



              <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      Show a second modal and hide this one with the button below.
                    </div>
                    <div class="modal-footer">
                      <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      Hide this modal and show the first with the button below.
                    </div>
                    <div class="modal-footer">
                      <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section >




      <section style={{ minHeight: '40vh' }}>
        <footer class="bg-light text-dark p-5">
          <div class="container-fluid">
            <div class="row d-flex justify-content-center align-items-baseline">
              <div class="col-lg-2 col-md-12 mb-3">
                <div className='row'>
                  <div className='col-5'>
                    <img src={dark_logo} className='img-fluid mb-3' />
                  </div>
                </div>
                <p className='mt-2 footer-content'>At Medicure International, a health & wellness tour facilitator, we connect patients with world-class healthcare providers around the globe to ensure patients receive top-quality treatment tailored to their specific needs. </p>
              </div>
              <div class="col-lg-2 col-md-6 mb-3">
                <p>Countries</p>
                <ul class="list-unstyled" style={{ fontSize: '15px' }}>
                  <li>Cosmetic Dentistry</li>
                  <li className='mt-3'>Porcelain Veneers</li>
                  <li className='mt-3'>Porcelain Veneers</li>
                  <li className='mt-3'>Cosmetic Dentistry</li>
                </ul>
              </div>
              <div class="col-lg-2 col-md-6 mb-3">
                <p>Service</p>
                <ul class="list-unstyled" style={{ fontSize: '15px' }}>
                  <li>Cosmetic Dentistry</li>
                  <li className='mt-3'>Porcelain Veneers</li>
                  <li className='mt-3'>Porcelain Veneers</li>
                  <li className='mt-3'>Cosmetic Dentistry</li>
                </ul>
              </div>
              <div class="col-lg-1 col-md-6 mb-3">
                <p>Company</p>
                <ul class="list-unstyled" style={{ fontSize: '15px' }}>
                  <li>About Us</li>
                  <li className='mt-3'>Leadership</li>
                  <li className='mt-3'>Case Study</li>
                  <li className='mt-3'>Projects</li>

                </ul>
              </div>
              <div class="col-lg-1 col-md-6 mb-3">
                <p>Career</p>
                <ul class="list-unstyled" style={{ fontSize: '15px' }}>
                  <li>Overview</li>
                  <li className='mt-3'>Job Openings</li>
                </ul>
              </div>
              <div class="col-lg-1 col-md-6 mb-3">
                <p>Location</p>
                <ul class="list-unstyled" style={{ fontSize: '15px' }}>
                  <li>Texas</li>
                  <li className='mt-3'>London</li>
                  <li className='mt-3'>Coimbatore</li>
                  <li className='mt-3'>Sydney</li>
                </ul>
              </div>
              <div class="col-lg-1 col-md-6 mb-3">
                <p>Media</p>
                <ul class="list-unstyled" style={{ fontSize: '15px' }}>
                  <li>Newsroom</li>
                  <li className='mt-3'>Event</li>
                  <li className='mt-3'>Blog</li>
                </ul>
              </div>
              <div class="col-lg-2 col-md-6 mb-2" style={{ fontSize: '15px' }}>
                <p>Resources</p>
                <ul class="list-unstyled">
                  <li>Privacy & Legal</li>
                  <li className='mt-3'>Supplier</li>
                  <li className='mt-3'>Security</li>
                </ul>
              </div>
            </div>
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-md-7 social-icons mt-2">
                <a href="https://www.instagram.com " target="_blank"><i class="bi bi-instagram text-dark"></i></a>
                <a href="https://www.twitter.com " target="_blank"><i class="bi bi-twitter-x text-dark"></i></a>
                <a href="https://www.linkedin.com " target="_blank"><i class="bi bi-linkedin text-dark"></i></a>
                <a href="https://www.youtube.com " target="_blank"><i class="bi bi-youtube text-dark"></i></a>
                <a href="https://www.facebook.com" target="_blank"><i class="bi bi-facebook text-dark"></i></a>
                <a href="https://www.quora.com " target="_blank"><i class="bi bi-quora text-dark"></i></a>
              </div>
              <div class="col-md-5 mt-2">
                <p className='text-end'> © 2024 Brand All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </section>



    </>
  );
}

export default App;
