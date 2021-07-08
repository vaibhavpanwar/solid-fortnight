import React, { useState, useEffect } from "react";
import "./styles/Home.css";
import arrow from "../assets/left-arrow.png";
import TestimonialCard from "../components/Testimonials/testimonialCard.component";
import axios from "axios";
const Home = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(null);

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://testimonialapi.toolcarton.com/api"
      );
      console.log(data);
      setTestimonials(data);
      setActiveTestimonial(data?.[0]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const setCurrentTestimonial = (object) => {
    setActiveTestimonial(object);
  };

  const prevHandler = () => {
    const index = testimonials.indexOf(activeTestimonial);
    if (index === 0) {
      setActiveTestimonial(testimonials?.[testimonials?.length - 1]);
    } else {
      setActiveTestimonial(testimonials?.[index - 1]);
    }
  };

  const nextHandler = () => {
    const index = testimonials.indexOf(activeTestimonial);
    if (index === testimonials?.length - 1) {
      setActiveTestimonial(testimonials?.[0]);
    } else {
      setActiveTestimonial(testimonials?.[index + 1]);
    }
  };
  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div className="testimonials-main-container">
      {loading && <p>Loading..</p>}
      <div className="testimonials-inside-container">
        <p className="testimonials-heading">TESTIMONIALS</p>
        {activeTestimonial && (
          <TestimonialCard testimonial={activeTestimonial} />
        )}
        <div className="testimonials-navigator">
          <div className="images-navigation">
            {/* <img
              src={
                "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
            /> */}
            {testimonials?.map((item) => (
              <img
                onClick={() => setCurrentTestimonial(item)}
                key={item?.id}
                src={item?.avatar}
                className={`${
                  item?.id === activeTestimonial?.id ? "border-img" : ""
                }`}
              />
            ))}
          </div>
          <div className="buttons-navigation">
            <button className="arrow" onClick={prevHandler}>
              <img src={arrow} />
            </button>
            <button onClick={nextHandler} className="arrow next">
              <img src={arrow} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

/*
card heading #3d495f
conainer bg #f3f8fe
card content #646d7f
card footer oa1c36
image border #115ed5


*/
