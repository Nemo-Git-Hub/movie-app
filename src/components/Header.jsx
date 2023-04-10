import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex justify-center bg-gray-900 text-gray-200 py-7 mb-11">
        <div className="container">
          <Link to="/" title="Header">
            {" "}
            <p className="text-4xl">Header</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
