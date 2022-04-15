import "./Header.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { FiSettings } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <div className="header-grid">
        {/* <div className="div1">
          <AiOutlineQuestionCircle />
        </div> */}

        <div className="div2">WORDSKI</div>
        {/* <div className="div3">
          <GoGraph />
        </div>
        <div className="div4">
          <FiSettings />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
