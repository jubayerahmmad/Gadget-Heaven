const Footer = () => {
  return (
    <div className="bg-slate-200 mt-8">
      <div className="container mx-auto p-8">
        <div className="flex flex-col space-y-4 justify-center text-center">
          <h1 className="font-bold text-3xl">Gadget Heaven</h1>
          <p>Leading The way in cutting-edge technology and innovation</p>
        </div>
        <div className="divider"></div>
        <div className="lg:flex justify-between items-center gap-12 space-y-4">
          <nav>
            <h6 className="footer-title">Services</h6>
            <div className="flex flex-col">
              <a className="link link-hover">Product Support</a>
              <a className="link link-hover">Order Tracking</a>
              <a className="link link-hover">Shipping and Delivery</a>
              <a className="link link-hover">Returns</a>
            </div>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <div className="flex flex-col">
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Careers</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Advertisement</a>
            </div>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <div className="flex flex-col">
              <a className="link link-hover">Terms of Service</a>
              <a className="link link-hover">Privacy Policy</a>
              <a className="link link-hover">Cookie Policy</a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
