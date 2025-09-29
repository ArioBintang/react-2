import Footer from "../Footer";
import Header from "../Header";

function Team() {
  return (
    <>
    <Header/>
    

      <section className="py-5 bg-light text-dark">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Meet Our Team</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm h-100 border-0">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  className="card-img-top" 
                  alt="Team Member"
                />
                <div className="card-body">
                  <h5 className="card-title">Alex Johnson</h5>
                  <p className="card-text">Creative Director</p>
                  <p className="text-muted small">Pencipta desain sepatu sporty yang fresh & modern.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm h-100 border-0">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  className="card-img-top" 
                  alt="Team Member"
                />
                <div className="card-body">
                  <h5 className="card-title">Maya Smith</h5>
                  <p className="card-text">Marketing Lead</p>
                  <p className="text-muted small">Menghidupkan brand vibes lewat kampanye yang berani.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm h-100 border-0">
                <img 
                  src="https://randomuser.me/api/portraits/men/65.jpg" 
                  className="card-img-top" 
                  alt="Team Member"
                />
                <div className="card-body">
                  <h5 className="card-title">David Lee</h5>
                  <p className="card-text">Product Manager</p>
                  <p className="text-muted small">Selalu fokus pada kenyamanan & kualitas produk.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}

export default Team;
