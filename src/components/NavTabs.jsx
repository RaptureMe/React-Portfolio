// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container flex-lg-column">
        <a class="navbar-brand mx-lg-auto mb-lg-4" href="#">
          <span class="h3 fw-bold d-block d-lg-none">Alex Rosu</span>
          <img src="./assets/images/DSC03793-3.jpg" class="d-none d-lg-block rounded-circle" alt="" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto flex-lg-column text-lg-center">

            <li class="nav-item">
              <a class="nav-link" onClick={() => handlePageChange('Home')} href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => handlePageChange('Services')} href="#services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => handlePageChange('Portfolio')} href="#Portfolio">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => handlePageChange('Reviews')} href="#reviews">Reviews</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => handlePageChange('Contact')} href="#contact">Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     <a
    //       href="#home"
    //       onClick={() => handlePageChange('Home')}
    //       // This is a conditional (ternary) operator that checks to see if the current page is "Home"
    //       // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
    //       className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Home
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       onClick={() => handlePageChange('About')}
    //       // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
    //     >
    //       About
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#blog"
    //       onClick={() => handlePageChange('Blog')}
    //       // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Blog
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#contact"
    //       onClick={() => handlePageChange('Contact')}
    //       // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Contact
    //     </a>
    //   </li>
    // </ul>
  );
}

export default NavTabs;
