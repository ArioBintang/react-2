import Footer from "../Footer";
import Header from "../Header";

function Login() {
  return (
    <>
<Header/>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h3 className="fw-bold text-center mb-4">Login</h3>
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Masukkan email"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Masukkan password"
                      />
                    </div>
                    <button type="submit" className="btn btn-danger w-100">
                      Login
                    </button>
                  </form>
                  <p className="mt-3 text-muted small text-center">
                    Belum punya akun? <a href="#">Daftar sekarang</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Login;
