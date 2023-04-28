import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDebounce } from "react-use";

function Header() {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const navigate = useNavigate();

  const handlerSearch = (e) => {
    setValue(e.target.value);
  };

  console.log(value);

  const [] = useDebounce(
    () => {
      setDebouncedValue(value);
    },
    2000,
    [value]
  );

  useEffect(() => {
    debouncedValue && navigate(`/search2?${debouncedValue}`);
  }, [debouncedValue]);

  console.log("debouncedValue=", debouncedValue);

  return (
    <div className=" bg-gray-900 text-gray-200 py-7 mb-11">
      <Link to="/" title="Header">
        <p className="text-4xl text-center my-8">Header</p>
      </Link>
      <input
        className="w-10/12 block mx-auto rounded-lg text-center text-black italic"
        type="text"
        value={value}
        placeholder="Enter movie or people to search..."
        onChange={handlerSearch}
      />
    </div>
  );
}

export default Header;
