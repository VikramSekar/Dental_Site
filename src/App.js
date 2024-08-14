// import logo from './logo.svg';
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
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {

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


  const steps = [
    {
      id: '1',
      message: 'Hello! What is your name?',
      trigger: 'name',
    },
    {
      id: 'name',
      user: true, // This indicates that the user will provide an input
      trigger: 'welcome',
    },
    {
      id: 'welcome',
      message: 'Welcome {previousValue}! How can I assist you today?',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: '1', label: 'What services do you offer?', trigger: '3' },
        { value: '2', label: 'Can I book an appointment?', trigger: '4' },
        { value: '3', label: 'How can I contact support?', trigger: '5' },
      ],
    },
    {
      id: '3',
      message: 'We offer a variety of services including healthcare consultations and emergency services.',
      end: true,
    },
    {
      id: '4',
      message: 'You can book an appointment through our website or call us directly.',
      end: true,
    },
    {
      id: '5',
      message: 'You can contact support via email at support@example.com or call us at (123) 456-7890.',
      end: true,
    },
    {
      id: '6',
      message: 'Our operating hours are Monday to Friday, 9 AM to 5 PM.',
      end: true,
    },
    {
      id: '7',
      message: 'Yes, we have a loyalty program! Please check our website for more details.',
      end: true,
    },
  ];









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
                  <h2 class='text-light mb-4'>a better smile, designed & delivered for the World!</h2>
                  <p class='text-light'>This is a form of aesthetic dentistry that can help you improve your smile by making your teeth whiter, reshaping teeth that don’t match others, closing gaps between teeth, filling cavities with tooth-colored materials, repairing chips and rough spots with fillings that match and even covering broken teeth with porcelain crowns.</p>
                  <button type="button" class="btn btn-style mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal"><span>Lets'Chat</span></button>
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-body">
                          <div className='row d-flex justify-content-center'>
                            <div className='col-md-12'>
                              <Chatbot style={{ width: '100%' }} steps={steps} />
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
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-clear-tab" data-bs-toggle="pill" data-bs-target="#pills-clear" type="button" role="tab" aria-controls="pills-clear" aria-selected="false">Clear Aligners</button>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="row">
                      <div class="col-lg-6 col-md-12 col-sm-12">
                        <img class="tab-img" src={image_3} alt=""></img>
                      </div>
                      <div class="col-lg-6 col-md-12 col-sm-12 tab-col-2">
                        <h4 class="mb-3">Cosmetic Dental treatments accross
                          globe for the patients</h4>
                        <p class="mb-5">of executives agree that with rapid technological advancements, it is more important than ever for organizations to innovate with purpose</p>
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
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <h4 class="mb-3">Cosmetic Dental treatments accross
                        globe for the patients</h4>
                      <p class="mb-5">of executives agree that with rapid technological advancements, it is more important than ever for organizations to innovate with purpose</p>
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
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <h4 class="mb-3">Cosmetic Dental treatments accross
                        globe for the patients</h4>
                      <p class="mb-5">of executives agree that with rapid technological advancements, it is more important than ever for organizations to innovate with purpose</p>
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
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <h4 class="mb-3">Cosmetic Dental treatments accross
                        globe for the patients</h4>
                      <p class="mb-5">of executives agree that with rapid technological advancements, it is more important than ever for organizations to innovate with purpose</p>
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
                  <div class="tab-pane fade" id="pills-clear" role="tabpanel" aria-labelledby="pills-clear-tab"><div class="row">
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
                  </div></div>
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
              <h4 class='heading text-center mx-auto'>Simple steps for Cosmetic Dental treatments accross
                globe for the patients</h4>
            </div>
            <div class='row'>
              <div class='col-lg-3 col-md-6 col-sm-12'>
                <div class="image-box">
                  <div class='image-box-content mx-auto'>
                    <div class='image'>
                      <img src={image_1} alt=""></img>
                    </div>
                    <div class='number'><span>01</span></div>
                  </div>
                  <p class='text-center'>Initial enquiry & Consultaion
                    with Experts</p>
                </div>
              </div>
              <div class='col-lg-3 col-md-6 col-sm-12'>
                <div class="image-box">
                  <div class='image-box-content mx-auto'>
                    <div class='image'>
                      <img src={image_4} alt=""></img>
                    </div>
                    <div class='number'><span>02</span></div>
                  </div>
                  <p class='text-center'>Finalise your treatment
                    booking</p>
                </div>
              </div>
              <div class='col-lg-3 col-md-6 col-sm-12'>
                <div class="image-box">
                  <div class='image-box-content mx-auto'>
                    <div class='image'>
                      <img src={image_2} alt=""></img>
                    </div>
                    <div class='number'><span>03</span></div>
                  </div>
                  <p class='text-center'>Payment & Departure
                    for treatment</p>
                </div>
              </div>
              <div class='col-lg-3 col-md-6 col-sm-12'>
                <div class="image-box">
                  <div class='image-box-content mx-auto'>
                    <div class='image'>
                      <img src={image_5} alt=""></img>
                    </div>
                    <div class='number'><span>04</span></div>
                  </div>
                  <p class='text-center'>Undergo treatment</p>
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
              <h4 class='heading text-center mx-auto text-light mb-5'>Gallery of Cosmetic Dental treatments clinics
                across the globe</h4>
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
                        What procedures does a cosmetic dentist usually undertake?
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        Those with general expertise also undertake diverse procedures, many overlapping with aesthetic procedures. This may include teeth whitening, dental bonding, and fitting crowns, bridges, and veneers. These interventions can significantly enhance the aesthetic aspect of a patient’s smile.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Is cosmetic dentistry worth it?
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        Those with general expertise also undertake diverse procedures, many overlapping with aesthetic procedures. This may include teeth whitening, dental bonding, and fitting crowns, bridges, and veneers. These interventions can significantly enhance the aesthetic aspect of a patient’s smile.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Are Cosmetic and restorative dentistry the same?
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        Those with general expertise also undertake diverse procedures, many overlapping with aesthetic procedures. This may include teeth whitening, dental bonding, and fitting crowns, bridges, and veneers. These interventions can significantly enhance the aesthetic aspect of a patient’s smile.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        How long does cosmetic dentistry take?
                      </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        Those with general expertise also undertake diverse procedures, many overlapping with aesthetic procedures. This may include teeth whitening, dental bonding, and fitting crowns, bridges, and veneers. These interventions can significantly enhance the aesthetic aspect of a patient’s smile.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Can a general dentist undertake cosmetic procedures?
                      </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        Those with general expertise also undertake diverse procedures, many overlapping with aesthetic procedures. This may include teeth whitening, dental bonding, and fitting crowns, bridges, and veneers. These interventions can significantly enhance the aesthetic aspect of a patient’s smile.
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
                <h3>Let's help you
                  Smile better with
                  our expertise</h3>
                <div class="line"></div>
                <button type="button" class="btn btn-style dark-btn"><span>Contact Us</span></button>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section style={{ minHeight: '40vh' }}>
        <footer class="bg-light text-dark p-5">
          <div class="container-fluid">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-2 col-md-12 mb-3">
                <div className='row'>
                  <div className='col-5'>
                    <img src={dark_logo} className='img-fluid mb-3' />
                  </div>
                </div>
                <p className='mt-2'>Our quality dental treatments at an affordable price range will make you love visiting information on our services</p>
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
              <div class="col-lg-2 col-md-6 mb-3" style={{ fontSize: '15px' }}>
                <p>Resources</p>
                <ul class="list-unstyled">
                  <li>Privacy & Legal</li>
                  <li className='mt-3'>Supplier</li>
                  <li className='mt-3'>Security</li>
                </ul>
              </div>
            </div>
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-md-3 social-icons">
                <a href="https://www.instagram.com " target="_blank"><i class="bi bi-instagram text-dark"></i></a>
                <a href="https://www.twitter.com " target="_blank"><i class="bi bi-twitter-x text-dark"></i></a>
                <a href="https://www.linkedin.com " target="_blank"><i class="bi bi-linkedin text-dark"></i></a>
                <a href="https://www.youtube.com " target="_blank"><i class="bi bi-youtube text-dark"></i></a>
                <a href="https://www.facebook.com" target="_blank"><i class="bi bi-facebook text-dark"></i></a>
                <a href="https://www.quora.com " target="_blank"><i class="bi bi-quora text-dark"></i></a>
              </div>
              <div class="col-md-6 text-end">
                © 2024 Brand All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </section>



    </>
  );
}

export default App;
