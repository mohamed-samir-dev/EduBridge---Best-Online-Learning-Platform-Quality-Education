import React from "react";
import "./JoinUs.css";
export default function JoinUs() {
  return (
    <section id="join-us">
      <div className="container">
        <div className="join-us-header">
          <span>Join Us</span>
          <h2>Join Our Community</h2>
          <p>
            Connect with educators, teachers, and students from around the
            world.
          </p>
          <form>
            <input type="text" placeholder="Enter your email address" />
            <button type="submit"> Join Now</button>
          </form>
        </div>
      </div>
    </section>
  );
}
