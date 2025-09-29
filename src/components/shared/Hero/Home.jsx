import Footer from "../Footer";
import Header from "../Header";

export default function  Home (){
    return(
        <>

        <Header/>

        {/* Hero Section */}
      <section className="py-5 bg-danger text-white">
        <div className="container">
          <div className="row align-items-center">
            {/* Text content */}
            <div className="col-md-6">
              <h1 className="display-4 fw-bold">Just Do It.</h1>
              <p className="lead">
                Temukan sepatu olahraga terbaik untuk setiap langkahmu. Nyaman,
                stylish, dan siap menemani performa maksimal.
              </p>
              <button className="btn btn-light btn-lg me-2">Shop Now</button>
              <button className="btn btn-outline-light btn-lg">Explore</button>
            </div>

            {/* Image content */}
            <div className="col-md-6 text-center">
              <img
                src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/f9abf33680d431f74c352f80f5a5f7b35d5c6397"
                className="img-fluid rounded"
                alt="Nike Shoes"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Produk */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold text-danger">
            Koleksi Sepatu Terbaru
          </h2>
          <div
            id="nikeCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* Item 1 */}
              <div className="carousel-item active text-center">
                <img
                  src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/20547d52-3e1b-4c3d-b917-f0d7e0eb8bdf/custom-nike-air-force-1-low-by-you-shoes.png"
                  className="d-block mx-auto img-fluid"
                  alt="Nike Air Force 1"
                  style={{ maxHeight: "400px" }}
                />
                <h5 className="mt-3">Nike Air Force 1</h5>
              </div>

              {/* Item 2 */}
              <div className="carousel-item text-center">
                <img
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/58154ed6-11f3-4df4-905a-c16db9deb91e/WMNS+AIR+JORDAN+1+MID+SE.png"
                  className="d-block mx-auto img-fluid"
                  alt="Nike Air Jordan"
                  style={{ maxHeight: "400px" }}
                />
                <h5 className="mt-3">Nike Air Jordan</h5>
              </div>

              {/* Item 3 */}
              <div className="carousel-item text-center">
                <img
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/af2bab3f-7895-4086-9845-d71346c887ef/W+NIKE+AIR+MAX+SNDR.png"
                  className="d-block mx-auto img-fluid"
                  alt="Nike Vaporfly Next%"
                  style={{ maxHeight: "400px" }}
                />
                <h5 className="mt-3">Nike Air Max</h5>
              </div>

              {/* Item 4 */}
              <div className="carousel-item text-center">
                <img
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c1b23568-00cf-43e7-a1f1-b6dc5d2e2e3f/dunk-low-shoes-rBb6Fq.png"
                  className="d-block mx-auto img-fluid"
                  alt="Nike Dunk Low"
                  style={{ maxHeight: "400px" }}
                />
                <h5 className="mt-3">Nike Dunk Low</h5>
              </div>

              {/* Item 5 */}
              <div className="carousel-item text-center">
                <img
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4c9e7e8a-d037-4b09-a3fc-85e17e5a47f4/blazer-mid-77-vintage-shoes-NT5vbk.png"
                  className="d-block mx-auto img-fluid"
                  alt="Nike Blazer Mid"
                  style={{ maxHeight: "400px" }}
                />
                <h5 className="mt-3">Nike Blazer Mid '77</h5>
              </div>
            </div>

            {/* Control button */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#nikeCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bg-dark rounded-circle"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#nikeCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bg-dark rounded-circle"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <Footer/>

        </>
    )
}