const Footer = () => {
  return (
    <footer
      className="bg text-white py-5 fotter-bg"
      style={{ backgroundImage: `url('/image/footer-bg-2.jpg')` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <img src="/image/logo.png" alt="A2Z SMS Logo" width="80px" />
            <p className="pt-1">
              Bulk SMS is the most popular marketing method compared to other
              marketing methods. It is trusted, reliable, and cost-effective.
            </p>
            <h5 className="fw-bold mt-4">Payment Method</h5>
            <div>
              <img className="me-4" src="/image/visa-logo.png" alt="Visa" />
              <img className="me-4" src="/image/payoneer-logo.png" alt="Visa" />
              <img className="me-4" src="/image/mastercard-logo.png" alt="Visa" />
              <img className="me-4" src="/image/affirm-logo.png" alt="Visa" />
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} by <strong>A2ZSMS</strong>.
                All rights reserved.
              </p>
            </div>

            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
              <a
  href="/terms/"
  className="text-white text-decoration-none me-3"
  style={{ fontWeight: "500" }}
>
  Terms & Condition
</a>
<a
  href="/privacy/"
  className="text-white text-decoration-none"
  style={{ fontWeight: "500" }}
>
  Privacy Policy
</a>

              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
