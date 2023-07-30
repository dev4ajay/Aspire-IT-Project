import React from "react"


const NewSlider =()=>{
return(

    <>
    <section className="slider_main">
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active btn_border" aria-current="true"  aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className="btn_border" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className="btn_border" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" className="btn_border" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" className="btn_border" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" className="btn_border" aria-label="Slide 6"></button>
  </div>
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require("../Assets/image/slider-1 new.jpg")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require("../Assets/image/slider-2 new.jpg")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require("../Assets/image/slider-3 new.jpg")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require("../Assets/image/slider-4 new.jpg")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require("../Assets/image/slider-5 new.jpg")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require("../Assets/image/slider-6 new.jpg")} class="d-block w-100" alt="..."/>
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span   aria-hidden="true"><img src={require("../Assets/image/download arrow right-PhotoRoom.png-PhotoRoom.png")} style={{width:'40px' }} className="arrow_btn"/></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span  aria-hidden="true"><img src={require("../Assets/image/download arrow left-PhotoRoom.png-PhotoRoom.png")} style={{width:'72px'}} className="arrow_btn"/></span>
    <span class="visually-hidden">Next</span>

  </button>
 
</div>
</div>
</section>
    </>

)


}

export default NewSlider;





