import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group"; // ES6
const TestimonialCard = ({ testimonial }) => {
  const { lorem, name, designation, message, id } = testimonial;
  const title = message.slice(0, 20);
  return (
    <TransitionGroup>
      <CSSTransition key={id} timeout={600} ent classNames="messageout">
        <div className="testimonials-card">
          <p className="card-heading" key={Math.random()}>
            {title}
          </p>
          <p className="card-content" key={Math.random()}>
            {lorem}
          </p>
          <p className="card-footer " key={Math.random()}>
            {name}, &nbsp;
            <span className="card-footer-content">{designation}</span>{" "}
          </p>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TestimonialCard;
