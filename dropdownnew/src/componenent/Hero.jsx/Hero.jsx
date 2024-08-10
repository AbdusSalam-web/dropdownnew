import "./Hero.css";
import arrow_btn from "../../Assets/arrow_btn.png";
import pause_icon from "../../Assets/pause_icon.png";
import play_icon from "../../Assets/play_icon.png";
const Hero = ({
  heroData,
  setHeroCount,
  heroCount,
  setPlayStatus,
  playStatus,
}) => {
  return (
    <div className="hero">
      <div className="heroText">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="heroExplore">
        <p>Explore the feature</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="heroDotPlay">
        <ul className="heroDots">
          <li
            onClick={() => {
              setHeroCount(0);
            }}
            className={heroCount === 0 ? "heroDot orange" : "heroDot"}
          ></li>
          <li
            onClick={() => {
              setHeroCount(1);
            }}
            className={heroCount === 1 ? "heroDot orange" : "heroDot"}
          ></li>
          <li
            onClick={() => {
              setHeroCount(2);
            }}
            className={heroCount === 2 ? "heroDot orange" : "heroDot"}
          ></li>
        </ul>
        <div className="heroPlay">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt=""
          />
          <p>Play the video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
