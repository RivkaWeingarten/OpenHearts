import React from "react";

function Home() {
  return (
    <div>
      <div className="aboutUs">
        <h1>About Us</h1>
        <img className='family'  src="https://img.freepik.com/free-vector/big-family-meeting_74855-5220.jpg?" alt='illustration of family'></img>
        <p>
          We are a community organization with a mission to aid families
          struggling and in need of financial assistance. Our philosphy focusus
          on helping single-mothers acquire financial assistance but it doesn't
          end there. With the help of your contributions we can fund financial
          literacy and education for these lovely families. Help us in our
          mission to end poverty. You can select one or as many as you'd like
          from our list of families. Click "Get Involved" below to get to know our
          families and make your contributions.
        </p>
      </div>
      <button className="explore-button"  >
        <a href="/families" rel="explore button">
          Get Involved
        </a>
      </button>
    </div>
  );
}
export default Home


