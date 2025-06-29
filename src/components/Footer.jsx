const Footer = () => (
  <footer className="bg-white border-t">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 px-4 py-20">
      {/* brand */}
      <div>
        <h3 className="text-2xl font-extrabold mb-4">Furniro.</h3>
        <p className="text-gray-500 leading-relaxed">
          400 University Drive Suite 200 Coral
          <br />Gables,<br />FL 33134 USA
        </p>
      </div>

      {/* links */}
      <div>
        <h4 className="font-semibold mb-4">Links</h4>
        <ul className="space-y-3">
          {['Home', 'Shop', 'About', 'Contact'].map(l => (
            <li key={l} className="hover:text-primary cursor-pointer">{l}</li>
          ))}
        </ul>
      </div>

      {/* help */}
      <div>
        <h4 className="font-semibold mb-4">Help</h4>
        <ul className="space-y-3">
          {['Payment Options', 'Returns', 'Privacy Policies'].map(l => (
            <li key={l} className="hover:text-primary cursor-pointer">{l}</li>
          ))}
        </ul>
      </div>

      {/* newsletter */}
      <div>
        <h4 className="font-semibold mb-4">Newsletter</h4>
        <form className="flex gap-2">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="border-b outline-none flex-1 placeholder-gray-500"
          />
          <button type="submit" className="border-b font-semibold hover:text-primary">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>

    <p className="text-center text-sm text-gray-500 py-6 border-t">
      2023 furniro. All rights reserved
    </p>
  </footer>
);

export default Footer;