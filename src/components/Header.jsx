import { Link } from "react-router-dom";
function Header() {
    return (
      <>
        <nav className=" z-10 flex justify-between items-center bg-[#111827] text-white py-4 px-12 sticky top-0">
          <div className="flex">
            <Link to=""><img src=".\download.svg" className="pr-4"></img></Link>
            <Link to=""><h2 className="text-2xl font-bold">GeekFoods</h2></Link>
          </div>
          <div>
            <ul className="flex gap-6">
              <Link to="/" className="text-blue-400 text-lg"><li >Home</li></Link>
              <Link to="/quotes" className="hover:text-blue-400 text-base"><li>Quote</li></Link>
              <Link to="/resturants" className="hover:text-blue-400 text-base"><li>Resturants</li></Link>
              <Link to="/food" className="hover:text-blue-400 text-base"><li>Foods</li></Link>
              <Link to="/contact" className="hover:text-blue-400 text-base"><li>Contact</li></Link>
            </ul>
          </div>
          <button className="px-4 text-sm py-2 rounded-lg bg-blue-700 hover:bg-blue-800">Get stated</button>
        </nav>
      </>
    )
}
export default Header;