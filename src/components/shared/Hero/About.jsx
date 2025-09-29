import Footer from "../Footer";
import Header from "../Header";

function About() {
  return (
    <>
      <Header />

      <section className="py-5 bg-light text-dark">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Tentang Kami</h2>
          <p className="text-center lead">
            Kami adalah toko online yang fokus menghadirkan sepatu olahraga
            berkualitas tinggi dengan desain modern dan nyaman dipakai.
          </p>
          <div className="row mt-5">
            <div className="col-md-6">
              <h4>Misi Kami</h4>
              <p>
                Memberikan pengalaman belanja sepatu yang mudah, cepat, dan
                menyenangkan, dengan produk-produk yang selalu up-to-date.
              </p>
            </div>
            <div className="col-md-6">
              <h4>Hubungi Kami</h4>
              <p>Email: support@tokosepatu.com</p>
              <p>Telp: +62 812-3456-7890</p>
              <p>Alamat: Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
