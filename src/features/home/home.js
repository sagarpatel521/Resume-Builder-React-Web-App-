import React , {useState} from "react";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import videoLink from "../../assets/video/homepage-cv-templates-carousel.mp4";
import img_01 from "../../assets/img/img_01.png";
import img_02 from "../../assets/img/img_02.png";
// import img_03 from "../../assets/img/img_03.png";
// import img_04 from "../../assets/img/img_04.png";
// import img_05 from "../../assets/img/img_05.png";
import resume1 from "../../assets/img/resume1.webp";
import resume2 from "../../assets/img/resume2.webp";
import resume3 from "../../assets/img/resume3.webp";
import resume4 from "../../assets/img/resume4.webp";
// import Sagar from "../sagar-changes/Sagar";


const settings = {
    dots: true,
    infinite: true,
    speed:2000,
	  autoplay: true,
    autoplaySpeed: 200,
    slidesToShow: 3,
    slidesToScroll:1,
    centerMode: true,
    centerPadding: "60px",
    cssEase: "linear",
    initialSlide: 1
  };

const Home = () => {
  const  [showDiv, setShowDiv] = useState('');

  const toggleDiv = (div) => {
    setShowDiv(div===showDiv? '' : div);
  }
  return (
    <>
    {/* <div class="container"> */}
      <div className="conatiner-wrapper">
        <div className="text-wrapper">
          <h1 className="text-h1 mt-10">
            {" "}
            Make a Job-Winning Resume in Minutes
          </h1>
          <div className="para-text mt-10">
            <p className="text-p mt-10">
              Show case your self and your achievements with a professional and
              impressive resume made with some help from Resume Builder
            </p>
          </div>
          <div className="get-start mt-10">
            <button className="btn-get mt-10">
              Explore all Resume templates
            </button>
          </div>
        </div>
        <div className="video-section">
          <video
            className="video-wrapper"
            autoPlay
            loop
            muted
            playsInline
            width="90%"
            height="90%"
          >
            <source src={videoLink} type="video/mp4"></source>
          </video>
        </div>
      </div>
    {/* </div> */}

    {/* <Sagar /> */}
     {/* slider */}
     <div className="slider-container">
     <h2 className="title-step">Resume Template</h2>  
     <div className="underline "></div>
  
     <Slider {...settings}>
		 {/* <div className="slider-wrapper"> */}

		<img  className="resume_img" src={resume1}  alt="slider-img" ></img>
		<img className="resume_img" src={resume2} alt="slider-img"></img>
		<img className="resume_img" src={resume3} alt="slider-img"></img>
		<img className="resume_img" src={resume4} alt="slider-img"></img>
		 {/* </div> */}
    </Slider>
	</div>

    <div className="resume-sample_wrapper">
	<h2 className="title-step sample">Get inspired by resume samples from professional resume experts</h2>
	<h2 className="title-step sample f-size18">Search by job title to find resumes from resume experts that can inspire your own resume creation.</h2>
  <div className="fistline "> 
   <div className="first">Accountant</div>
  <div className="first">Security Guard</div>
  <div className="first">Engineer</div>
  <div className="first">Java Developer</div>
  <div className="first">Designer</div>
  </div>


	<div className="fistline  m-top20">
  <div className="first">Recruiter</div>
  <div className="first">Product Manager</div>
  <div className="first">Dentist</div>
  <div className="first">Digital Marketing</div>
  <div className="first">Sales Associate</div>
  <div className="first">Managment</div>
		
	</div>
	<div className="fistline  m-top20">
  <div className="first">Physician Assitant</div>
  <div className="first">Product Manager</div>
  <div className="first">Front end Developer</div>
  <div className="first">Nursing</div>
  <div className="first">Civil Engineer</div>
  <div className="first">office Assitant</div>
		
	</div>
	<div className="fistline m-top20">
  <div className="first">Photographer</div>
  <div className="first">Finace</div>
  <div className="first">Teacher</div>
  
		
	</div>
  <div className="exploresample">
    <a href="/resume-builder" className="explorebtn">Explore All Samples</a>

  </div>

	</div>

      <div className="steps">
        <div>
          <h2 className="title-step">Build Your Resume Fast and Easy</h2>
          <div className="underline "></div>
        </div>
      </div>
      <section className="text-container">
        <div className="card">
          <div className="card-content">
            <div className="card-text">
              <div className="flex-end">
                {" "}
                <div className="num-wrapper">
                  {" "}
                  <p className="box-num">1</p>
                </div>
                <div className="text-details">
                  <p className="text-temp">Pick a Template</p>
                  <p className="text-temp text-det ">
                    Don't sabotage your job search before it has even begun.
                    Choose from our ATS-friendly, hand-crafted resume templates
                  </p>
                </div>
              </div>
            </div>

            <div className="animation">
              <img className="img_1" src={img_01} alt="img"></img>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className="card2">
          <div className="card-content card-content1">
            <div className="card-text">
              <div className="flex-start">
                {" "}
                <div className="num-wrapper">
                  {" "}
                  <p className="box-num">2</p>
                </div>
                <div className="text-details">
                  <p className="text-temp">Pick a Template</p>
                  <p className="text-temp text-det ">
                    Don't sabotage your job search before it has even begun.
                    Choose from our ATS-friendly, hand-crafted resume templates
                  </p>
                </div>
              </div>
            </div>

            <div className="sec-img1">
              <div className="animation ani">
                <img className="img_1" src={img_02} alt="img"></img>
              </div>
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div className="card3">
          <div className="card-content">
            <div className="card-text">
              <div className="flex-end">
                {" "}
                <div className="num-wrapper">
                  {" "}
                  <p className="box-num">3</p>
                </div>
                <div className="text-details">
                  <p className="text-temp">Pick a Template</p>
                  <p className="text-temp text-det ">
                    Don't sabotage your job search before it has even begun.
                    Choose from our ATS-friendly, hand-crafted resume templates
                  </p>
                </div>
              </div>
            </div>

            <div className="animation">
              <img className="img_1" src={img_01} alt="img"></img>
            </div>
          </div>
        </div>

        {/* section 4 */}
        <div className="card2">
          <div className="card-content card-content1">
            <div className="card-text">
              <div className="flex-start">
                {" "}
                <div className="num-wrapper">
                  {" "}
                  <p className="box-num">4</p>
                </div>
                <div className="text-details">
                  <p className="text-temp">Pick a Template</p>
                  <p className="text-temp text-det ">
                    Don't sabotage your job search before it has even begun.
                    Choose from our ATS-friendly, hand-crafted resume templates
                  </p>
                </div>
              </div>
            </div>

            <div className="sec-img1">
              <div className="animation ani">
                <img className="img_1" src={img_02} alt="img"></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <div className="faq-container">
        <div className="faq-content">
          <p className="faq-p">Resume Builder FAQ.</p>
          <div className="underline "></div>

          {/* <div className="first-faq-content">
            <h2 className="faq-p fsize">Why should I use a resume builder?</h2>
            <p className="f-25size mt-10">
              Using a resume builder makes the process of creating a resume
              significantly faster and easier. Ever tried building your resume
              with Word?
            </p>
            <p className="f-25size mt-30">
              The whole process is complicated; you make a SMALL change to your
              resume and the whole design is completely messed up.
            </p>
            <p className="f-25size mt-30">
              With a resume builder, you don't have to worry about the hassle of
              creating a resume, including font selection, layout, formatting,git
            </p>
            <p className="f-25size mt-30">
              All you have to do is choose a resume template, fill it out, and
              you're ready to start applying for jobs!
            </p>
          </div>
          <div className="first-faq-content">
            <h2 className="faq-p fsize">What is the best resume builder?</h2>
            <p className="f-25size mt-10">
              For the last 7 years, we have worked hard to make Novorésumé the
              best resume builder out there.
            </p>
            <p className="f-25size mt-30">
              And we can say that we succeeded! Here's what sets us apart from
              the rest of the competition:
            </p>

            <ul>
              <li className="f-18size">
                <span>Easy to Use</span> - Our generator is very easy to use,
                even if you are not very tech-savvy.
              </li>
              <li className="f-18size">
                Get started in less than 5 minutes - Simply choose one of our
                resume templates and you're good to go!
              </li>
              <li className="f-18size">
                It's 100% free - Some resume builders claim to be free...and
                then you're met with a payment page when you're done writing
                your resume! We don't do that. Our generator will instantly
                notify you if you are using any of our premium features.
              </li>
              <li className="f-18size">
                Multiple Customization and Design Options - Our generator offers
                many customization options. You can make changes to the design,
                colors and much more.
              </li>
            </ul>
          </div>
          <div className="first-faq-content">
            <h2 className="faq-p fsize">
              Is this a completely free resume builder?
            </h2>
            <p className="f-25size mt-30">
              Yes, Novorésumé is a 100% free resume generator.
            </p>
            <p className="f-25size mt-30">
              If you have a limited budget, you can use it to create your resume
              completely free of charge. And no, unlike other resume builders
              out there, you won't be met with a payment page once you've
              completed it.
            </p>
            <p className="f-25size mt-30">
              If you use any of our premium features, the software will let you
              know. It will then ask you if you did it accidentally or if you
              want to upgrade your account to Novorésumé Premium. You have the
              control!
            </p>
          </div>
          <div className="first-faq-content">
            <h2 className="faq-p fsize">What is a resume?</h2>
            <p className="f-25size mt-30">
              A resume (also known as a CV or curriculum vitae) is a 1-2 page
              document that summarizes your work experience and professional
              history.
            </p>
            <p className="f-25size mt-30">
              It typically includes the following information:
            </p>
            <ul>
              <li className="f-18size">your work experience</li>
              <li className="f-18size">Training</li>
              <li className="f-18size">Your achievements</li>
              <li className="f-18size">Contact information</li>
              <li className="f-18size">
                An extract with your professional profile or job objective
              </li>
            </ul>
          </div> */}
          <div className="faq-section">
        <div className="faq-wraper">
            <div className="faq-box"  onClick={()=>toggleDiv('div1')}>
                   <button className="accordion" > <p>Why should I use a resume builder?</p></button>
                   <div  className={`panel ${showDiv ==='div1'? 'show':''} `}>
                   <p className="accordian-para">Using a resume builder makes the process of creating a resume
              significantly faster and easier. Ever tried building your resume
              with Word?</p>
              <p className="accordian-para">    The whole process is complicated; you make a SMALL change to your
              resume and the whole design is completely messed up.</p>
              <p className="accordian-para">With a resume builder, you don't have to worry about the hassle of
              creating a resume, including font selection, layout, formatting,git</p>
              <p className="accordian-para"> All you have to do is choose a resume template, fill it out, and
              you're ready to start applying for jobs!</p>
                   </div>
            </div>
            
            <div className="faq-box" onClick={()=>toggleDiv('div2')}>
                <button className="accordion"><p>What is the best resume builder?</p></button>
                <div className={`panel ${showDiv ==='div2'? 'show':''} `}>
                   <p className="accordian-para">
              For the last 7 years, we have worked hard to make Novorésumé the
              best resume builder out there.
            </p>
            <p className="accordian-para">
              And we can say that we succeeded! Here's what sets us apart from
              the rest of the competition:
            </p>

            <ul className="accordian-ulist">
              <li className="accordian-list">
                Easy to Use - Our generator is very easy to use,
                even if you are not very tech-savvy.
              </li>
              <li className="accordian-list">
                Get started in less than 5 minutes - Simply choose one of our
                resume templates and you're good to go!
              </li>
              <li className="accordian-list">
                It's 100% free - Some resume builders claim to be free...and
                then you're met with a payment page when you're done writing
                your resume! We don't do that. Our generator will instantly
                notify you if you are using any of our premium features.
              </li>
              <li className="accordian-list">
                Multiple Customization and Design Options - Our generator offers
                many customization options. You can make changes to the design,
                colors and much more.
              </li>
            </ul>
                   </div>
            </div>
        </div>

        <div className="faq-wraper-two">
        <div className="faq-box" onClick={()=>toggleDiv('div3')}>
                <button className="accordion"><p> Is this a completely free resume builder?</p></button>
                <div className={`panel ${showDiv ==='div3'? 'show':''} `}>
                <p class="accordian-para">
              Yes, Novorésumé is a 100% free resume generator.
            </p>
            <p class="accordian-para">
              If you have a limited budget, you can use it to create your resume
              completely free of charge. And no, unlike other resume builders
              out there, you won't be met with a payment page once you've
              completed it.
            </p>
            <p class="accordian-para">
              If you use any of our premium features, the software will let you
              know. It will then ask you if you did it accidentally or if you
              want to upgrade your account to Novorésumé Premium. You have the
              control!
            </p>
                   </div>
            </div>
             <div className="faq-box" onClick={()=>toggleDiv('div4')}>
                    <button className="accordion"><p>What is a resume?</p></button>
                    <div className={`panel ${showDiv ==='div4'? 'show':''} `}>
                          <p class="accordian-para">
                          A resume (also known as a CV or curriculum vitae) is a 1-2 page
                          document that summarizes your work experience and professional
                          history.
                        </p>
                        <p class="accordian-para">
                          It typically includes the following information:
                        </p>
                          <ul className="accordian-ulist">
                            <li className="accordian-list">your work experience</li>
                            <li className="accordian-list">Training</li>
                            <li className="accordian-list">Your achievements</li>
                            <li className="accordian-list">Contact information</li>
                            <li className="accordian-list">
                              An extract with your professional profile or job objective
                            </li>
                          </ul>
                       </div>
            </div>
            
            {/* <div className="faq-box" onClick={()=>toggleDiv('div5')}>
               <button className="accordion"> <p>How long is my domain name valid? </p></button>
               <div className={`panel ${showDiv ==='div5'? 'show':''} `}>
                When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.
               </div>
            </div>

            <div className="faq-box" onClick={()=>toggleDiv('div6')}>
                <button className="accordion "><p>Can I sell my domain name?</p></button>
                <div className={`panel ${showDiv ==='div6'? 'show':''} `}>
                    When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.
                   </div>
            </div> */}
        </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
