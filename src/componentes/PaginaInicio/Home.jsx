import React from 'react';
import './Home.css'


const Home = () => {
    return (
<>
  {/* <div id="carouselExampleIndicators" className="carousel slide sec1" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active"/>
      <li data-target="#carouselExampleIndicators" data-slide-to={1} />
      <li data-target="#carouselExampleIndicators" data-slide-to={2} />
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="./img/imagen1.jpg" />
      </div>
      <div className="carousel-item">
        <img src="./img/imagen2.jpg" />
      </div>
      <div className="carousel-item">
        <img src="./img/imagen3.jpg" />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"/>
      <span className="sr-only">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </button>
  </div> */}


<div id="carouselExampleIndicators" className="carousel slide sec1"  data-bs-ride="true">
  <div className="carousel-indicators">
    <li type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active botonSlide" aria-current="true" aria-label="Slide 1"/>
    <li type="button"  data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" className='botonSlide'/>
    <li type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" className='botonSlide'/>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./img/imagen3.jpg"  />
    </div>
    <div className="carousel-item">
      <img src="./img/imagen2.jpg"  />
    </div>
    <div className="carousel-item">
      <img src="./img/imagen1.jpg"  />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

</>
    );
}

export default Home;
