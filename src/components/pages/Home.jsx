export default function Home() {
  return (
    <section id="home" className="full-height px-lg-5" >
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <h1 className="display-4 fw-bold" data-aos="fade-up">I'M A <span className="text-brand">WEB
              WIZARD</span> FROM OC, CA</h1>
            <p className="lead mt-2 mb-4" data-aos="fade-up" data-aos-delay="300">I am Alex Rosu. I craft
              high-performing web applications that bring your visions to life, tailored with the highest
              quality of attention.</p>
            <div data-aos="fade-up" data-aos-delay="600" className="d-flex flex-wrap align-items-center">
              <a href="#Portfolio" className="btn btn-brand">Explore My Portfolio</a>
              <a href="tel:+17143182751" className="link-custom pt-2 pb-2 ms-3">Call: (714) 318 2751</a>
            </div>
          </div>
        </div>
      </div>
      <div className="social-icons">
        <a href="https://github.com/RaptureMe" className="size" data-aos="fade-left" data-aos-delay="800" data-aos-offset="30"><i className="lab la-github"></i></a>
      </div>
    </section >
  );
}
