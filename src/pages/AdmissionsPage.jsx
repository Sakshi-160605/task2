import React from 'react';
import './AdmissionsPage.css';
import { Link } from 'react-router-dom';

const Admissions = () => {
  return (
    <div className="admissions-container">
      <h1 className="main-heading">Admissions at Vivekanand College</h1>
      <p>Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible.</p>
      <p>Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.</p>

      <h2>Eligibility Criteria for Undergraduate Programs</h2>
      <table className="eligibility-table">
        <thead>
          <tr>
            <th>Program</th>
            <th>Minimum Qualification</th>
            <th>Required Subjects</th>
            <th>Minimum Marks (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>B.Sc. Computer Science</td>
            <td>10+2 (or equivalent)</td>
            <td>Physics, Chemistry, Maths</td>
            <td>50%</td>
          </tr>
          <tr>
            <td>B.Com. Accounting & Finance</td>
            <td>10+2 (or equivalent)</td>
            <td>Commerce Stream</td>
            <td>45%</td>
          </tr>
          <tr>
            <td>B.A. English Literature</td>
            <td>10+2 (or equivalent)</td>
            <td>Any Stream</td>
            <td>40%</td>
          </tr>
        </tbody>
      </table>

      <h2>Application Process</h2>
      <ol className="application-list">
        <li><strong>Online Application:</strong> Fill out the application form available on our portal.</li>
        <li><strong>Document Submission:</strong> Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
        <li><strong>Entrance Exam (if applicable):</strong> Appear for the college's entrance examination.</li>
        <li><strong>Merit List & Interview:</strong> Check the merit list and attend the interview if shortlisted.</li>
        <li><strong>Fee Payment:</strong> Complete the admission by paying the required fees.</li>
      </ol>

      <p>
        For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our <Link to="/courses">Courses page</Link> or <Link to="/contact">Contact us</Link> directly.
      </p>
    </div>
  );
};

export default Admissions;
