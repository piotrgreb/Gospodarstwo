class Slider {
  constructor(sliderSection) {
    this.currentSlide = 0;
    this.sliderSection = sliderSection;
    this.slider = null;
    this.slides = null;
    this.pageNumber = [];
    this.createSlider();
    this.changeSlide(this.currentSlide);
  }

  createSlider() {
    this.slider = document.querySelector(this.sliderSection);
    this.slides = document.querySelectorAll(".slider__slide");
    this.createPagination();
  }

  slideNext() {
    this.currentSlide++;
    if (this.currentSlide > this.slides.length - 1) {
      this.currentSlide = 0;
    }
    this.changeSlide(this.currentSlide);
  }

  changeSlide(index) {

    this.slides.forEach((slide) => {
      slide.classList.remove("slider-slide-active");
    });
   
    this.slides[index].classList.add("slider-slide-active");
    this.currentSlide = index;
    this.pageNumber.forEach((dot) => {
      dot.classList.remove("slider-pagination-element-active");
    });
    this.pageNumber[index].classList.add("slider-pagination-element-active");

    const slider = document.querySelector(".slider-slide-active .slider__info");
   
    const image = document.querySelector(".slider-slide-active .slider__image");

    let tl = gsap.timeline({delay: 0, duration: 1, scrollTrigger: ".slider"});
    tl.fromTo(
      slider.children,
      { x: "-=100", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.5,
        duration: 1
      
      }
    ).fromTo(
      image,
      { x: "-=300", opacity: 0 },
      { x: 0, opacity: 1,  duration: 1 }
    );
    gsap.fromTo(".slider__line", { scaleX: 0 }, {  opacity: 1, scaleX: 1, delay:3, duration:2, scrollTrigger: ".slider"});

  }

  createPagination() {
    const pageNum = document.createElement("ul");
    pageNum.classList.add("dot");

    for (let i = 0; i < this.slides.length; i++) {
      const li = document.createElement("li");
      li.classList.add("dot__page--number");
      const spanNumber = document.createElement("span");
      spanNumber.innerText = i + 1;
      li.addEventListener("click", () => this.changeSlide(i));
      li.appendChild(spanNumber);
      pageNum.appendChild(li);
      this.pageNumber.push(li);
    }

    this.slider.appendChild(pageNum);
  }
}
const slide = new Slider(".footer");




  
