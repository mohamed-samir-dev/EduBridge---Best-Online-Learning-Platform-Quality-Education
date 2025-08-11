import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { coursesData } from "../data/data";
// Icons
import { FaStar, FaChevronRight } from "react-icons/fa";
import { CiAlarmOn } from "react-icons/ci";
import { FiBookOpen } from "react-icons/fi";
import "./Courses.css";
export default function Courses() {
  return (
    <section id="courses">
      <div className="container">
        <SectionHeader
          title={"Make Online education accessible"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia illo numquam, ratione veniam saepe facilis aperiam fugit, deserunt commodi minima magnam culpa voluptatem dolorum deleniti unde accusantium accusamus repudiandae?"
          }
        />
        <div className="courses-container">
          {/* Map through coursesData to render each course card */}
          {coursesData.map((course) => (
            <div className="course-card" key={course.id}>
              <span className="sale">Sale</span>
              <img src={course.img} alt={course.title} />
              <div className="course-field">
                <p className="department">{course.department}</p>
                <p className="rating">
                  {course.rating} <FaStar />
                </p>
              </div>
              <h3>{course.title}</h3>
              <p className="description">{course.description}</p>
              <p className="sales">{course.sales} Sales</p>
              <p className="price">
                <del>{course.price}</del>
                <span className="text-secondary">{course.discount}</span>
              </p>
              <div className="course-info">
                <p>
                  <CiAlarmOn />
                  {course.duration}
                </p>
                <p>
                  <FiBookOpen />
                  {course.lessons}
                </p>
                <a href="#" className="btn-learn">
                  Learn More <FaChevronRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
