export default function Footer(){
    return(
        <>
        {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <p className="mb-1">
            © {new Date().getFullYear()} Nike Clone | ario bintang
          </p>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link px-2 text-white">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link px-2 text-white">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">
                About
              </a>
            </li>
          </ul>
        </div>
      </footer>
        </>
    )
}