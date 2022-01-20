import "./topbar.scss";
import { Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Chaeyun's Portfolio
          </a>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>sharryun@gamil.com</span>
          </div>

          {/* 모든 페이지에 id을 준다음에 쓴다 */}
          {/* 클릭시 intro섹션으로 이동 */}
        </div>

        <div className="right">
          <div
            className="hamburger"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
