import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import Chat from './Chat'

const Home = () => {
  useEffect(() => {
    // Load Google Charts
    const loadGoogleCharts = () => {
      const script = document.createElement("script");
      script.src = "https://www.gstatic.com/charts/loader.js";
      script.onload = () => {
        window.google.charts.load('current', {'packages':['corechart']});
        window.google.charts.setOnLoadCallback(drawChart);
      };
      document.body.appendChild(script);
    };

    loadGoogleCharts();

    // Draw the Pie Chart
    const drawChart = () => {
      const data = window.google.visualization.arrayToDataTable([
        ['Task', 'Crime per Day'],
        ['Uttar Pradesh', 12.2],
        ['Maharastra', 10.7],
        ['Bihar', 10.4],
        ['West Bengal', 2.6],
        ['Other states', 53.7]
      ]);

      const options = {
        title: 'CRIME RATE',
        width: 800,
        height: 600
      };

      const chart = new window.google.visualization.PieChart(document.getElementById('piechart'));
      chart.draw(data, options);
    };
  }, []);

  return (
    <div>
      <nav className="navbar navbar-custom navbar-expand-lg fixed-top">
        <a className="navbar-brand" href="#">
          <img src="https://wallpapercave.com/wp/wp8739660.jpg" alt="InLaw Logo" />
          <h1 className="logo-name"><span>IN</span>Law</h1>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Join Community</a></li>
            <li className="nav-item"><button className="nav-link btn btn-link" data-toggle="modal" data-target="#loginModal">Login</button></li>
            <li className="nav-item"><button className="nav-link btn btn-link" data-toggle="modal" data-target="#signupModal">Sign Up</button></li>
          </ul>
        </div>
      </nav>

      <div className="content">
        <div className="left-section">
          <img src="https://static.turbosquid.com/Preview/2016/03/04__05_28_46/LawBookandGavel3dmodel02.jpg" alt="Law Image" />
        </div>
        <div className="right-section">
          <span>
            Understanding the law is essential for every citizen. Get informed and stay empowered.
            <div className="search-bar">
              <button className="btn btn-pope" onClick={() => window.location.href='new.html'}>Start Quest</button>
            </div>
          </span>
        </div>
      </div>

      <h2 className="text-center mb-4"><b>Explore Legal Topics</b></h2>
      <section id="blog" className="container my-5">
        <div className="scrollable-container">
          {/* Image Cards */}
          {[
            { src: "https://th.bing.com/th/id/OIP.9ySOvEgEN9qOW1WsBEpi3gHaE8?rs=1&pid=ImgDetMain", alt: "Property crimes", article: "propertyCrime" },
            { src: "https://th.bing.com/th/id/OIP.GPV5mADRlKPj3y8aY0VD0gHaEu?rs=1&pid=ImgDetMain", alt: "POCSO", article: "pocso" },
            { src: "https://sl.sbs.com.au/public/image/file/b13b8c4e-7bc7-468a-b986-5fa1696ad8b7", alt: "Vandalism", article: "vandalism" },
            { src: "https://static.toiimg.com/thumb/msid-55256191,width-1070,height-580,imgsize-16110,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg", alt: "Chain Snatching", article: "chainSnatching" },
            { src: "https://coppertreesolutions.ca/wp-content/uploads/2020/11/CyberCrime_540167392-scaled-1170x570@2x.jpg", alt: "Cyber crime", article: "cyberCrime" },
            { src: "https://th.bing.com/th/id/OIP.nq43EB41B0K0TP3hvtEnLwHaE7?rs=1&pid=ImgDetMain", alt: "Drug", article: "drug" }
          ].map((card, index) => (
            <div key={index} className="image-card">
              <img src={card.src} alt={card.alt} />
              <button className="btn btn-primary" data-toggle="modal" data-target="#articleModal" data-article={card.article}>Read Article</button>
            </div>
          ))}
        </div>
      </section>

      {/* Login Modal */}
      <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">Login</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="loginEmail">Email address</label>
                  <input type="email" className="form-control" id="loginEmail" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label htmlFor="loginPassword">Password</label>
                  <input type="password" className="form-control" id="loginPassword" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <a href="#" className="d-block mt-2">Forgot Password?</a>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* Sign Up Modal */}
      <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="signupModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signupModalLabel">Sign Up</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="signupName">Name</label>
                  <input type="text" className="form-control" id="signupName" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="signupEmail">Email address</label>
                  <input type="email" className="form-control" id="signupEmail" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label htmlFor="signupPassword">Password</label>
                  <input type="password" className="form-control" id="signupPassword" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div className="chat-float">
        <Chat />
      </div>

      {/* Crime Rate Pie Chart */}
      <div id="piechart" style={{ width: "800px", height: "600px", margin: "auto" }}></div>
    </div>
  );
};

export default Home;
