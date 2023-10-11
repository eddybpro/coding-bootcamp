import PropTypes from "prop-types";
import { NextIcon, PrevIcon } from "./assets";
import "./Card.css";

function Card(props) {
  return (
    <div className={props.current === props.idx ? "Card active" : "Card"}>
      <div className="Card-ImgBox">
        <img src={props.img} alt={props.name} />
        <div className="Card-ImgBox-BtnsBox">
          <button
            className="Card-ImgBox-BtnsBox-Prev"
            onClick={props.prevSlide}
            aria-label="previous"
            id={`${props.idx}`}
          >
            <img src={PrevIcon} alt="" />
          </button>
          <button
            className="Card-ImgBox-BtnsBox-Next"
            onClick={props.nextSlide}
            aria-label="next"
            id={props.idx}
          >
            <img src={NextIcon} alt="" />
          </button>
        </div>
      </div>
      <div className="Card-TxtBox">
        <p className="Card-TxtBox-Desc">{props.desc}</p>
        <div className="Card-TxtBox-NameJobBox">
          <p className="Card-TxtBox-NameJobBox-Name">{props.name}</p>
          <p className="Card-TxtBox-NameJobBox-Job">{props.role}</p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  role: PropTypes.string,
  img: PropTypes.string,
  idx: PropTypes.number,
  current: PropTypes.number,
  nextSlide: PropTypes.func,
  prevSlide: PropTypes.func,
};
export default Card;
