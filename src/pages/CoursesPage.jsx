import React from 'react';
import Header from '../components/Header/Headers';
import Footer from "../components/Footer/Footers";
import './CoursesPage.css'
const CoursesPage = () => { 
    return(
  
  <div style={{ padding: '1rem' }} className="home-scroll-container">
   
    <h1 className='h1'>Our Academic Programs</h1>
    <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
    <h2><strong>Discover Campus Life</strong></h2>
    <video  width="840" height="360" controls autoPlay src="/Videos/college-tour.mp4" type="video/mp4"> 
    </video>
  <div> 
    <label ><i>Get a glimpse of the vibrant academic and social life at Vivekanand College.</i></label>
  </div>

     <h1>Academic Programs</h1>

    <h2>Undergraduate Programs</h2>
    <ul>
        <li>BSc - Computer Science (3 years)</li>
        <li>BSc - Information Technology (3 years)</li>
        <li>BSc - Biotechnology (3 years)</li>
        <li>BCom - Accounting & Finance (3 years)</li>
        <li>BCom - Banking & Insurance (3 years)</li>
        <li>BA - English Literature (3 years)</li>
        <li>BA - Psychology (3 years)</li>
    </ul>

    <h2>Postgraduate Programs</h2>
    <ul>
        <li>MSc - Computer Science (2 years)</li>
        <li>MSc - Information Technology (2 years)</li>
        <li>MCom - Master of Commerce (2 years)</li>
        <li>MA - Master of Arts (2 years)</li>
    </ul>

    <h3>Postgraduate Programs (PG)</h3>
    <ul>
      <li><strong>Master of Science (M.Sc.)</strong>
        <ul>
          <li>Computer Science (2 years)</li>
          <li>Information Technology (2 years)</li>
        </ul>
      </li>
      <li><strong>Master of Commerce (M.Com)</strong> (2 years)</li>
      <li><strong>Master of Arts (M.A.)</strong> (2 years)</li>
    </ul>
    <div class="container">
    <h2 class="custom-table-style">Program Details & Fee Structure (Annual)</h2>
  <table className="custom-table-style">
    <thead>
      <tr>
        <th>Program Type</th>
        <th>Course Name</th>
        <th>Duration</th>
        <th>Annual Fee (INR)</th>
        <th>Eligibility</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>UG</td>
        <td>B.Sc. Computer Science</td>
        <td>3 Years</td>
        <td>₹ 85,000</td>
        <td>10+2 with PCM (50%)</td>
      </tr>
      <tr>
        <td>UG</td>
        <td>B.Com. Accounting & Finance</td>
        <td>3 Years</td>
        <td>₹ 70,000</td>
        <td>10+2 Commerce (45%)</td>
      </tr>
      <tr>
        <td>PG</td>
        <td>M.Sc. Information Technology</td>
        <td>2 Years</td>
        <td>₹ 95,000</td>
        <td>B.Sc. IT/CS (50%)</td>
      </tr>
      </tbody>
      </table>
    </div>
    <h3>Specialized & Vocational Courses</h3>
    <p>
      In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.
    </p>
 <h5 class="note">
      Explore detailed syllabi and admission criteria on our Admissions page.
    </h5>

    <a href='/contact'  class="cta-button">Enquire About Courses</a>
    
  </div>





)
}
export default CoursesPage