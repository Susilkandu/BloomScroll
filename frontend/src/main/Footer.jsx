export default function () {
    return (
      <div className="footer">
        <div className="footer-group flex flex-col sm:flex-row bg-[#0e1a2d] justify-evenly p-[2rem]">
          <ul className="ftr-category text-white">
            <b className="text-blue-400" >Get to Know Us</b>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Release</li>
            <li>Help Center/FAQ</li>
          </ul>
          <ul className="ftr-category text-white">
            <b className="text-blue-400">Connect with Us</b>
            <li>Facebook</li>
            <li>Careers</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <p className="bg-indigo-800 animate-pulse text-center"><b>copyright @2023</b></p>
      </div>
    );
  }
  