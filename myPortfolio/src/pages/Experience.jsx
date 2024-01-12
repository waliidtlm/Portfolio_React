import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {faGraduationCap, faBriefcase} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/Experience.css"



function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#00abf0">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2011"
          iconStyle={{ background: "#00abf0" }}
          icon={
            <FontAwesomeIcon
              icon={faGraduationCap}
              style={{ color: "#081b29" }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Bachelor's degree</h3>
          <p>In Economics and Accounting </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2014"
          iconStyle={{ background: "#00abf0" }}
          icon={
            <FontAwesomeIcon
              icon={faGraduationCap}
              style={{ color: "#081b29" }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Business Management
          </h3>

          <p> Diploma of Higher Technician</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2019"
          iconStyle={{ background: "#081b29" }}
          icon={
            <FontAwesomeIcon icon={faBriefcase} style={{ color: "#00abf0" }} />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Technical Support Agent - Orange
          </h3>
          <p>
            <ul>
              <li>Technical Support</li>
              <li>Phone & mail handling</li>
              <li>Client prospecting</li>
              <li>Claims processing </li>
            </ul>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2021"
          iconStyle={{ background: "#081b29" }}
          icon={
            <FontAwesomeIcon icon={faBriefcase} style={{ color: "#00abf0" }} />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Customer Advisor - Videotron
          </h3>
          <p>
            <ul>
              <li>Customer Support</li>
              <li>Retention</li>
              <li>Sales and commercialization </li>
              <li>Client advising and guidance </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - July 2023"
          iconStyle={{ background: "#081b29" }}
          icon={
            <FontAwesomeIcon icon={faBriefcase} style={{ color: "#00abf0" }} />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Team Leader - Personnal Project
          </h3>
          <p>
            <ul>
              <li>Recruitment and training officer</li>
              <li>Follow-up with advisors (Coaching)</li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August 2023 - Dec 2023"
          iconStyle={{ background: "#081b29" }}
          icon={
            <FontAwesomeIcon icon={faBriefcase} style={{ color: "#00abf0" }} />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Bootcamp - Full-Stack Developer
          </h3>
          <h3 className="vertical-timeline-element-title">
            ARKx Academy - "JOB IN TECH "
          </h3>

          <p>
            <label htmlFor="#">Work Done :</label>
            <ul>
              <li>E-commerce website</li>
              <li>Blog</li>
              <li>Weather Wep App</li>
            </ul>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;