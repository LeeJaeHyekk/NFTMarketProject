import styled from "styled-components";
// import uin from "./universe.jpg";
import cat from "./cat.png";

const LoadingComp = () => {
  return (
    <LoadingBox>
      <div className="sky">
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
      </div>

      {/* <h1>
        <span>m</span>
        <span>a</span>
        <span>k</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
        <span class="w"> </span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </h1> */}

      {/* <div className="boi">
        <div className="dog"></div>
        <img src={cat} width="400px" alt="" />
      </div>
      <div className="boi">
        <div className="dog"></div>
        <img src={cat} width="400px" alt="" /> */}
      {/* <div className="rightleg"></div>
        <div className="leftleg"></div>
        <div className="."></div>
        <div className="belly"></div>
        <div className="eye"></div>
        <div className="leftleg"></div> */}
      {/* </div> */}

      <svg xmlns="http://www.w3.org/2000/svg">
        <filter id="inset" x="-50%" y="-50%" width="200%" height="200%">
          <feFlood flood-color="black" result="outside-color" />
          <feMorphology in="SourceAlpha" operator="dilate" radius="3.5" />
          <feComposite
            in="outside-color"
            operator="in"
            result="outside-stroke"
          />
          <feFlood flood-color="#0c9fc4" result="inside-color" />
          <feComposite in2="SourceAlpha" operator="in" result="inside-stroke" />
          <feMerge>
            <feMergeNode in="outside-stroke" />
            <feMergeNode in="inside-stroke" />
          </feMerge>
        </filter>
      </svg>
    </LoadingBox>
  );
};

export default LoadingComp;

const LoadingBox = styled.div`
  width: 100%;
  margin: 0;
  overflow-x: hidden;

  .sky {
    display: block;
    background: black;
    width: 100%;
    height: 100%;
  }

  .star {
    border-radius: 50%;
    background: white;
    position: absolute;
    -webkit-animation: star linear infinite;
    animation: star linear infinite;
  }
  .star:nth-child(1) {
    width: 7px;
    height: 7px;
    -webkit-animation-duration: 21s;
    animation-duration: 21s;
    -webkit-animation-delay: -10s;
    animation-delay: -10s;
    top: 45vh;
  }
  .star:nth-child(2) {
    width: 10px;
    height: 10px;
    -webkit-animation-duration: 16s;
    animation-duration: 16s;
    -webkit-animation-delay: -17s;
    animation-delay: -17s;
    top: 48vh;
  }
  .star:nth-child(3) {
    width: 10px;
    height: 10px;
    -webkit-animation-duration: 21s;
    animation-duration: 21s;
    -webkit-animation-delay: -18s;
    animation-delay: -18s;
    top: 84vh;
  }
  .star:nth-child(4) {
    width: 7px;
    height: 7px;
    -webkit-animation-duration: 22s;
    animation-duration: 22s;
    -webkit-animation-delay: -2s;
    animation-delay: -2s;
    top: 10vh;
  }
  .star:nth-child(5) {
    width: 4px;
    height: 4px;
    -webkit-animation-duration: 19s;
    animation-duration: 19s;
    -webkit-animation-delay: -22s;
    animation-delay: -22s;
    top: 48vh;
  }
  .star:nth-child(6) {
    width: 6px;
    height: 6px;
    -webkit-animation-duration: 23s;
    animation-duration: 23s;
    -webkit-animation-delay: -32s;
    animation-delay: -32s;
    top: 16vh;
  }
  .star:nth-child(7) {
    width: 9px;
    height: 9px;
    -webkit-animation-duration: 44s;
    animation-duration: 44s;
    -webkit-animation-delay: -17s;
    animation-delay: -17s;
    top: 9vh;
  }
  .star:nth-child(8) {
    width: 9px;
    height: 9px;
    -webkit-animation-duration: 24s;
    animation-duration: 24s;
    -webkit-animation-delay: -20s;
    animation-delay: -20s;
    top: 55vh;
  }
  .star:nth-child(9) {
    width: 10px;
    height: 10px;
    -webkit-animation-duration: 26s;
    animation-duration: 26s;
    -webkit-animation-delay: -25s;
    animation-delay: -25s;
    top: 62vh;
  }
  .star:nth-child(10) {
    width: 4px;
    height: 4px;
    -webkit-animation-duration: 39s;
    animation-duration: 39s;
    -webkit-animation-delay: -34s;
    animation-delay: -34s;
    top: 81vh;
  }
  .star:nth-child(11) {
    width: 9px;
    height: 9px;
    -webkit-animation-duration: 27s;
    animation-duration: 27s;
    -webkit-animation-delay: -10s;
    animation-delay: -10s;
    top: 50vh;
  }
  .star:nth-child(12) {
    width: 9px;
    height: 9px;
    -webkit-animation-duration: 25s;
    animation-duration: 25s;
    -webkit-animation-delay: -19s;
    animation-delay: -19s;
    top: 11vh;
  }
  .star:nth-child(13) {
    width: 6px;
    height: 6px;
    -webkit-animation-duration: 29s;
    animation-duration: 29s;
    -webkit-animation-delay: -29s;
    animation-delay: -29s;
    top: 28vh;
  }
  .star:nth-child(14) {
    width: 8px;
    height: 8px;
    -webkit-animation-duration: 29s;
    animation-duration: 29s;
    -webkit-animation-delay: -18s;
    animation-delay: -18s;
    top: 52vh;
  }
  .star:nth-child(15) {
    width: 8px;
    height: 8px;
    -webkit-animation-duration: 16s;
    animation-duration: 16s;
    -webkit-animation-delay: -39s;
    animation-delay: -39s;
    top: 80vh;
  }
  .star:nth-child(16) {
    width: 7px;
    height: 7px;
    -webkit-animation-duration: 28s;
    animation-duration: 28s;
    -webkit-animation-delay: -24s;
    animation-delay: -24s;
    top: 65vh;
  }
  .star:nth-child(17) {
    width: 10px;
    height: 10px;
    -webkit-animation-duration: 33s;
    animation-duration: 33s;
    -webkit-animation-delay: -9s;
    animation-delay: -9s;
    top: 35vh;
  }
  .star:nth-child(18) {
    width: 10px;
    height: 10px;
    -webkit-animation-duration: 41s;
    animation-duration: 41s;
    -webkit-animation-delay: -12s;
    animation-delay: -12s;
    top: 16vh;
  }
  .star:nth-child(19) {
    width: 8px;
    height: 8px;
    -webkit-animation-duration: 40s;
    animation-duration: 40s;
    -webkit-animation-delay: -3s;
    animation-delay: -3s;
    top: 23vh;
  }
  .star:nth-child(20) {
    width: 10px;
    height: 10px;
    -webkit-animation-duration: 27s;
    animation-duration: 27s;
    -webkit-animation-delay: -39s;
    animation-delay: -39s;
    top: 57vh;
  }
  .star:nth-child(21) {
    width: 4px;
    height: 4px;
    -webkit-animation-duration: 33s;
    animation-duration: 33s;
    -webkit-animation-delay: -15s;
    animation-delay: -15s;
    top: 1vh;
  }
  .star:nth-child(22) {
    width: 5px;
    height: 5px;
    -webkit-animation-duration: 23s;
    animation-duration: 23s;
    -webkit-animation-delay: -10s;
    animation-delay: -10s;
    top: 81vh;
  }
  .star:nth-child(23) {
    width: 9px;
    height: 9px;
    -webkit-animation-duration: 41s;
    animation-duration: 41s;
    -webkit-animation-delay: -11s;
    animation-delay: -11s;
    top: 95vh;
  }
  .star:nth-child(24) {
    width: 8px;
    height: 8px;
    -webkit-animation-duration: 45s;
    animation-duration: 45s;
    -webkit-animation-delay: -9s;
    animation-delay: -9s;
    top: 11vh;
  }
  .star:nth-child(25) {
    width: 8px;
    height: 8px;
    -webkit-animation-duration: 43s;
    animation-duration: 43s;
    -webkit-animation-delay: -9s;
    animation-delay: -9s;
    top: 28vh;
  }
  .star:nth-child(26) {
    width: 6px;
    height: 6px;
    -webkit-animation-duration: 20s;
    animation-duration: 20s;
    -webkit-animation-delay: -29s;
    animation-delay: -29s;
    top: 21vh;
  }
  .star:nth-child(27) {
    width: 9px;
    height: 9px;
    -webkit-animation-duration: 27s;
    animation-duration: 27s;
    -webkit-animation-delay: -38s;
    animation-delay: -38s;
    top: 64vh;
  }
  .star:nth-child(28) {
    width: 8px;
    height: 8px;
    -webkit-animation-duration: 30s;
    animation-duration: 30s;
    -webkit-animation-delay: -7s;
    animation-delay: -7s;
    top: 47vh;
  }
  .star:nth-child(29) {
    width: 7px;
    height: 7px;
    -webkit-animation-duration: 21s;
    animation-duration: 21s;
    -webkit-animation-delay: -31s;
    animation-delay: -31s;
    top: 52vh;
  }
  .star:nth-child(30) {
    width: 6px;
    height: 6px;
    -webkit-animation-duration: 35s;
    animation-duration: 35s;
    -webkit-animation-delay: -3s;
    animation-delay: -3s;
    top: 16vh;
  }
  .star:nth-child(31) {
    width: 8px;
    height: 8px;
    -webkit-animation-duration: 36s;
    animation-duration: 36s;
    -webkit-animation-delay: -27s;
    animation-delay: -27s;
    top: 35vh;
  }
  .star:nth-child(32) {
    width: 9px;
    height: 9px;
    -webkit-animation-duration: 29s;
    animation-duration: 29s;
    -webkit-animation-delay: -4s;
    animation-delay: -4s;
    top: 54vh;
  }
  .star:nth-child(33) {
    width: 5px;
    height: 5px;
    -webkit-animation-duration: 36s;
    animation-duration: 36s;
    -webkit-animation-delay: -5s;
    animation-delay: -5s;
    top: 98vh;
  }
  .star:nth-child(34) {
    width: 4px;
    height: 4px;
    -webkit-animation-duration: 29s;
    animation-duration: 29s;
    -webkit-animation-delay: -20s;
    animation-delay: -20s;
    top: 1vh;
  }
  .star:nth-child(35) {
    width: 8px;
    height: 8px;
    -webkit-animation-duration: 34s;
    animation-duration: 34s;
    -webkit-animation-delay: -9s;
    animation-delay: -9s;
    top: 66vh;
  }
  .star:nth-child(36) {
    width: 10px;
    height: 10px;
    -webkit-animation-duration: 34s;
    animation-duration: 34s;
    -webkit-animation-delay: -22s;
    animation-delay: -22s;
    top: 73vh;
  }
  .star:nth-child(37) {
    width: 7px;
    height: 7px;
    -webkit-animation-duration: 26s;
    animation-duration: 26s;
    -webkit-animation-delay: -13s;
    animation-delay: -13s;
    top: 88vh;
  }
  .star:nth-child(38) {
    width: 4px;
    height: 4px;
    -webkit-animation-duration: 45s;
    animation-duration: 45s;
    -webkit-animation-delay: -15s;
    animation-delay: -15s;
    top: 62vh;
  }
  .star:nth-child(39) {
    width: 10px;
    height: 10px;
    -webkit-animation-duration: 39s;
    animation-duration: 39s;
    -webkit-animation-delay: -34s;
    animation-delay: -34s;
    top: 21vh;
  }
  .star:nth-child(40) {
    width: 7px;
    height: 7px;
    -webkit-animation-duration: 32s;
    animation-duration: 32s;
    -webkit-animation-delay: -29s;
    animation-delay: -29s;
    top: 56vh;
  }
  .star:nth-child(41) {
    width: 10px;
    height: 10px;
    -webkit-animation-duration: 29s;
    animation-duration: 29s;
    -webkit-animation-delay: -10s;
    animation-delay: -10s;
    top: 49vh;
  }
  .star:nth-child(42) {
    width: 4px;
    height: 4px;
    -webkit-animation-duration: 38s;
    animation-duration: 38s;
    -webkit-animation-delay: -23s;
    animation-delay: -23s;
    top: 18vh;
  }
  .star:nth-child(43) {
    width: 5px;
    height: 5px;
    -webkit-animation-duration: 45s;
    animation-duration: 45s;
    -webkit-animation-delay: -7s;
    animation-delay: -7s;
    top: 55vh;
  }
  .star:nth-child(44) {
    width: 9px;
    height: 9px;
    -webkit-animation-duration: 19s;
    animation-duration: 19s;
    -webkit-animation-delay: -18s;
    animation-delay: -18s;
    top: 47vh;
  }
  .star:nth-child(45) {
    width: 5px;
    height: 5px;
    -webkit-animation-duration: 37s;
    animation-duration: 37s;
    -webkit-animation-delay: -34s;
    animation-delay: -34s;
    top: 6vh;
  }
  .star:nth-child(46) {
    width: 4px;
    height: 4px;
    -webkit-animation-duration: 33s;
    animation-duration: 33s;
    -webkit-animation-delay: -29s;
    animation-delay: -29s;
    top: 81vh;
  }
  .star:nth-child(47) {
    width: 4px;
    height: 4px;
    -webkit-animation-duration: 18s;
    animation-duration: 18s;
    -webkit-animation-delay: -18s;
    animation-delay: -18s;
    top: 88vh;
  }
  .star:nth-child(48) {
    width: 10px;
    height: 10px;
    -webkit-animation-duration: 21s;
    animation-duration: 21s;
    -webkit-animation-delay: -22s;
    animation-delay: -22s;
    top: 72vh;
  }
  .star:nth-child(49) {
    width: 10px;
    height: 10px;
    -webkit-animation-duration: 32s;
    animation-duration: 32s;
    -webkit-animation-delay: -6s;
    animation-delay: -6s;
    top: 97vh;
  }
  .star:nth-child(50) {
    width: 8px;
    height: 8px;
    -webkit-animation-duration: 35s;
    animation-duration: 35s;
    -webkit-animation-delay: -8s;
    animation-delay: -8s;
    top: 34vh;
  }
  .star:nth-child(51) {
    width: 9px;
    height: 9px;
    -webkit-animation-duration: 28s;
    animation-duration: 28s;
    -webkit-animation-delay: -4s;
    animation-delay: -4s;
    top: 68vh;
  }
  .star:nth-child(52) {
    width: 9px;
    height: 9px;
    -webkit-animation-duration: 18s;
    animation-duration: 18s;
    -webkit-animation-delay: -4s;
    animation-delay: -4s;
    top: 4vh;
  }
  .star:nth-child(53) {
    width: 6px;
    height: 6px;
    -webkit-animation-duration: 23s;
    animation-duration: 23s;
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
    top: 64vh;
  }
  .star:nth-child(54) {
    width: 5px;
    height: 5px;
    -webkit-animation-duration: 22s;
    animation-duration: 22s;
    -webkit-animation-delay: -10s;
    animation-delay: -10s;
    top: 41vh;
  }
  .star:nth-child(55) {
    width: 5px;
    height: 5px;
    -webkit-animation-duration: 41s;
    animation-duration: 41s;
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    top: 13vh;
  }
  .star:nth-child(56) {
    width: 5px;
    height: 5px;
    -webkit-animation-duration: 22s;
    animation-duration: 22s;
    -webkit-animation-delay: -9s;
    animation-delay: -9s;
    top: 93vh;
  }
  .star:nth-child(57) {
    width: 5px;
    height: 5px;
    -webkit-animation-duration: 44s;
    animation-duration: 44s;
    -webkit-animation-delay: -5s;
    animation-delay: -5s;
    top: 54vh;
  }
  .star:nth-child(58) {
    width: 9px;
    height: 9px;
    -webkit-animation-duration: 44s;
    animation-duration: 44s;
    -webkit-animation-delay: -10s;
    animation-delay: -10s;
    top: 93vh;
  }
  .star:nth-child(59) {
    width: 6px;
    height: 6px;
    -webkit-animation-duration: 37s;
    animation-duration: 37s;
    -webkit-animation-delay: -30s;
    animation-delay: -30s;
    top: 75vh;
  }
  .star:nth-child(60) {
    width: 7px;
    height: 7px;
    -webkit-animation-duration: 28s;
    animation-duration: 28s;
    -webkit-animation-delay: -13s;
    animation-delay: -13s;
    top: 19vh;
  }
  .star:nth-child(61) {
    width: 8px;
    height: 8px;
    -webkit-animation-duration: 32s;
    animation-duration: 32s;
    -webkit-animation-delay: -25s;
    animation-delay: -25s;
    top: 4vh;
  }
  .star:nth-child(62) {
    width: 6px;
    height: 6px;
    -webkit-animation-duration: 39s;
    animation-duration: 39s;
    -webkit-animation-delay: -12s;
    animation-delay: -12s;
    top: 90vh;
  }
  .star:nth-child(63) {
    width: 6px;
    height: 6px;
    -webkit-animation-duration: 30s;
    animation-duration: 30s;
    -webkit-animation-delay: -34s;
    animation-delay: -34s;
    top: 40vh;
  }
  .star:nth-child(64) {
    width: 7px;
    height: 7px;
    -webkit-animation-duration: 32s;
    animation-duration: 32s;
    -webkit-animation-delay: -25s;
    animation-delay: -25s;
    top: 17vh;
  }
  .star:nth-child(65) {
    width: 10px;
    height: 10px;
    -webkit-animation-duration: 40s;
    animation-duration: 40s;
    -webkit-animation-delay: -23s;
    animation-delay: -23s;
    top: 0vh;
  }
  .star:nth-child(66) {
    width: 7px;
    height: 7px;
    -webkit-animation-duration: 36s;
    animation-duration: 36s;
    -webkit-animation-delay: -8s;
    animation-delay: -8s;
    top: 36vh;
  }
  .star:nth-child(67) {
    width: 9px;
    height: 9px;
    -webkit-animation-duration: 43s;
    animation-duration: 43s;
    -webkit-animation-delay: -28s;
    animation-delay: -28s;
    top: 65vh;
  }
  .star:nth-child(68) {
    width: 9px;
    height: 9px;
    -webkit-animation-duration: 24s;
    animation-duration: 24s;
    -webkit-animation-delay: -33s;
    animation-delay: -33s;
    top: 66vh;
  }
  .star:nth-child(69) {
    width: 9px;
    height: 9px;
    -webkit-animation-duration: 38s;
    animation-duration: 38s;
    -webkit-animation-delay: -20s;
    animation-delay: -20s;
    top: 63vh;
  }
  .star:nth-child(70) {
    width: 10px;
    height: 10px;
    -webkit-animation-duration: 18s;
    animation-duration: 18s;
    -webkit-animation-delay: -29s;
    animation-delay: -29s;
    top: 45vh;
  }

  @-webkit-keyframes star {
    from {
      transform: translate3d(-100%, 0, 1px);
    }
    to {
      transform: translate3d(100vw, 0, 1px);
    }
  }

  @keyframes star {
    from {
      transform: translate3d(-100%, 0, 1px);
    }
    to {
      transform: translate3d(100vw, 0, 1px);
    }
  }
  .boi {
    position: absolute;
    left: 0%;
    top: 50%;
    -webkit-animation: eject 5s infinite ease-in-out;
    animation: eject 5s infinite ease-in-out;
    transform-origin: 13vmin 25vmin;
    transform: translate3d(-50vmin, -20vmin, 0px) rotate(0turn);
  }

  @-webkit-keyframes eject {
    0% {
      transform: translate3d(-50vmin, -20vmin, 0px) rotate(0turn);
    }
    50%,
    100% {
      transform: translate3d(100vw, -20vmin, 0px) rotate(-2turn);
    }
  }

  @keyframes eject {
    0% {
      transform: translate3d(-50vmin, -20vmin, 0px) rotate(0turn);
    }
    50%,
    100% {
      transform: translate3d(100vw, -20vmin, 0px) rotate(-2turn);
    }
  }

  /* .eye {
    position: absolute;
    left: 13vmin;
    top: 9vmin;
    border: 6px solid black;
    width: 10vmin;
    height: 11vmin;
    border-radius: 26vmin;
    transform: rotate(18deg) scale(1, 0.5);
    border-top-width: 12px;
    border-bottom-width: 12px;
    background: radial-gradient(ellipse at 31% 20%, #f9fff7 15%, #fff0 20%),
      radial-gradient(ellipse at 50% 40%, #82c9e4 65%, #fff0 70%),
      radial-gradient(ellipse at 60% 30%, #40646f 100%, #fff0 100%);
    background-size: 140% 100%, 96% 80%, 100% 100%;
    background-repeat: no-repeat;
  }

  .belly {
    position: absolute;
    width: 15vmin;
    height: 25vmin;
    background: #0c9fc4
      radial-gradient(ellipse at 42% 33%, #14ebe1 50%, #fff0 52%);
    border-radius: 10vmin;
    top: 7vmin;
    left: 6vmin;
    transform: rotate(10deg);
    background-size: 140% 114%;
    border: 7px solid black;
  }

  .backpack {
    position: absolute;
    left: 1.2vmin;
    top: 14vmin;
    background: #14ebe1;
    width: 7vmin;
    height: 11vmin;
    border-radius: 3vmin;
    transform: rotate(7deg);
    border: 7px solid black;
  }

  .leftleg {
    position: absolute;
    left: 1vmin;
    top: 25vmin;
    width: 11vmin;
    height: 11vmin;
    background: radial-gradient(ellipse at 20% 70%, #0c9fc4 15%, #fff0 15%),
      radial-gradient(ellipse at 0% 29%, #fff0 40%, #0c9fc4 40%);
    background-repeat: no-repeat;
    border-radius: 20vmin;
    background-size: 150% 96%, 100% 100%;
  }
  .leftleg:not(:nth-child(2)) {
    -webkit-clip-path: polygon(
      -10% 110%,
      100% 110%,
      110% 60%,
      70% 20%,
      -5% 30%
    );
    clip-path: polygon(-10% 110%, 100% 110%, 110% 60%, 70% 20%, -5% 30%);
  }
  .leftleg:nth-child(2) {
    filter: url(#inset);
  }

  .rightleg {
    position: absolute;
    left: 4vmin;
    top: 28vmin;
    width: 11vmin;
    height: 11vmin;
    background: radial-gradient(ellipse at 20% 70%, #0c9fc4 15%, #fff0 15%),
      radial-gradient(ellipse at 0% 29%, #fff0 40%, #0c9fc4 40%);
    background-repeat: no-repeat;
    border-radius: 20vmin;
    background-size: 150% 96%, 100% 100%;
    filter: url(#inset);
  } */

  h1 {
    position: absolute;
    color: white;
    font-family: arial, sans-serif;
    left: 0;
    top: 50%;
    width: 100%;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    transform: translateY(-50%);
  }
  @media (min-width: 600px) {
    h1 {
      font-size: 30px;
    }
  }

  span {
    display: inline-block;
    font-weight: 600;
  }
  span.w {
    display: inline;
  }
  span:nth-child(1) {
    -webkit-animation: type1 5s infinite linear both;
    animation: type1 5s infinite linear both;
  }
  @-webkit-keyframes type1 {
    0%,
    21.5% {
      width: 0px;
      opacity: 0;
    }
    22%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  @keyframes type1 {
    0%,
    21.5% {
      width: 0px;
      opacity: 0;
    }
    22%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  span:nth-child(2) {
    -webkit-animation: type2 5s infinite linear both;
    animation: type2 5s infinite linear both;
  }
  @-webkit-keyframes type2 {
    0%,
    23% {
      width: 0px;
      opacity: 0;
    }
    23.5%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  @keyframes type2 {
    0%,
    23% {
      width: 0px;
      opacity: 0;
    }
    23.5%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  span:nth-child(3) {
    -webkit-animation: type3 5s infinite linear both;
    animation: type3 5s infinite linear both;
  }
  @-webkit-keyframes type3 {
    0%,
    24.5% {
      width: 0px;
      opacity: 0;
    }
    25%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  @keyframes type3 {
    0%,
    24.5% {
      width: 0px;
      opacity: 0;
    }
    25%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  span:nth-child(4) {
    -webkit-animation: type4 5s infinite linear both;
    animation: type4 5s infinite linear both;
  }
  @-webkit-keyframes type4 {
    0%,
    26% {
      width: 0px;
      opacity: 0;
    }
    26.5%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  @keyframes type4 {
    0%,
    26% {
      width: 0px;
      opacity: 0;
    }
    26.5%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  span:nth-child(5) {
    -webkit-animation: type5 5s infinite linear both;
    animation: type5 5s infinite linear both;
  }
  @-webkit-keyframes type5 {
    0%,
    27.5% {
      width: 0px;
      opacity: 0;
    }
    28%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  @keyframes type5 {
    0%,
    27.5% {
      width: 0px;
      opacity: 0;
    }
    28%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  span:nth-child(6) {
    -webkit-animation: type6 5s infinite linear both;
    animation: type6 5s infinite linear both;
  }
  @-webkit-keyframes type6 {
    0%,
    29% {
      width: 0px;
      opacity: 0;
    }
    29.5%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  @keyframes type6 {
    0%,
    29% {
      width: 0px;
      opacity: 0;
    }
    29.5%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  span:nth-child(7) {
    -webkit-animation: type7 5s infinite linear both;
    animation: type7 5s infinite linear both;
  }
  @-webkit-keyframes type7 {
    0%,
    30.5% {
      width: 0px;
      opacity: 0;
    }
    31%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  @keyframes type7 {
    0%,
    30.5% {
      width: 0px;
      opacity: 0;
    }
    31%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  span:nth-child(8) {
    -webkit-animation: type8 5s infinite linear both;
    animation: type8 5s infinite linear both;
  }
  @-webkit-keyframes type8 {
    0%,
    32% {
      width: 0px;
      opacity: 0;
    }
    32.5%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  @keyframes type8 {
    0%,
    32% {
      width: 0px;
      opacity: 0;
    }
    32.5%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  span:nth-child(9) {
    -webkit-animation: type9 5s infinite linear both;
    animation: type9 5s infinite linear both;
  }
  @-webkit-keyframes type9 {
    0%,
    33.5% {
      width: 0px;
      opacity: 0;
    }
    34%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  @keyframes type9 {
    0%,
    33.5% {
      width: 0px;
      opacity: 0;
    }
    34%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  span:nth-child(10) {
    -webkit-animation: type10 5s infinite linear both;
    animation: type10 5s infinite linear both;
  }
  @-webkit-keyframes type10 {
    0%,
    35% {
      width: 0px;
      opacity: 0;
    }
    35.5%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  @keyframes type10 {
    0%,
    35% {
      width: 0px;
      opacity: 0;
    }
    35.5%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  span:nth-child(11) {
    -webkit-animation: type11 5s infinite linear both;
    animation: type11 5s infinite linear both;
  }
  @-webkit-keyframes type11 {
    0%,
    36.5% {
      width: 0px;
      opacity: 0;
    }
    37%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  @keyframes type11 {
    0%,
    36.5% {
      width: 0px;
      opacity: 0;
    }
    37%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  span:nth-child(12) {
    -webkit-animation: type12 5s infinite linear both;
    animation: type12 5s infinite linear both;
  }
  @-webkit-keyframes type12 {
    0%,
    38% {
      width: 0px;
      opacity: 0;
    }
    38.5%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  @keyframes type12 {
    0%,
    38% {
      width: 0px;
      opacity: 0;
    }
    38.5%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  span:nth-child(13) {
    -webkit-animation: type13 5s infinite linear both;
    animation: type13 5s infinite linear both;
  }
  @-webkit-keyframes type13 {
    0%,
    39.5% {
      width: 0px;
      opacity: 0;
    }
    40%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  @keyframes type13 {
    0%,
    39.5% {
      width: 0px;
      opacity: 0;
    }
    40%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  span:nth-child(14) {
    -webkit-animation: type14 5s infinite linear both;
    animation: type14 5s infinite linear both;
  }
  @-webkit-keyframes type14 {
    0%,
    41% {
      width: 0px;
      opacity: 0;
    }
    41.5%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  @keyframes type14 {
    0%,
    41% {
      width: 0px;
      opacity: 0;
    }
    41.5%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  span:nth-child(15) {
    -webkit-animation: type15 5s infinite linear both;
    animation: type15 5s infinite linear both;
  }
  @-webkit-keyframes type15 {
    0%,
    42.5% {
      width: 0px;
      opacity: 0;
    }
    43%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  @keyframes type15 {
    0%,
    42.5% {
      width: 0px;
      opacity: 0;
    }
    43%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  span:nth-child(16) {
    -webkit-animation: type16 5s infinite linear both;
    animation: type16 5s infinite linear both;
  }
  @-webkit-keyframes type16 {
    0%,
    44% {
      width: 0px;
      opacity: 0;
    }
    44.5%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  @keyframes type16 {
    0%,
    44% {
      width: 0px;
      opacity: 0;
    }
    44.5%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  span:nth-child(17) {
    -webkit-animation: type17 5s infinite linear both;
    animation: type17 5s infinite linear both;
  }
  @-webkit-keyframes type17 {
    0%,
    45.5% {
      width: 0px;
      opacity: 0;
    }
    46%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
  @keyframes type17 {
    0%,
    45.5% {
      width: 0px;
      opacity: 0;
    }
    46%,
    90% {
      width: auto;
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }
`;
// const LoadingComp = () => {
//   return (
//     <LoadingBox>
//       <div className="nyanbox">
//         <div className="nyan"></div>
//       </div>
//       <div>
//         <p>Loading...</p>
//       </div>
//     </LoadingBox>
//   );
// };

// export default LoadingComp;

// const LoadingBox = styled.div`
//   width: 100%;
//   height: 100vh;
//   text-align: center;
//   background-image: url(${uin});
//   background-size: 100%;
//   background-repeat: no-repeat;
//   background-position: center;

//   .nyanbox {
//     margin: auto;
//     height: 50vh;
//     display: flex;
//     width: 100%;
//   }
//   .nyan {
//     width: 100%;
//     position: relative;
//     background-image: url(${dog});
//     background-size: 9.1%;
//     background-position: center;
//     background-repeat: repeat-x;
//     animation: run 10s infinite ease-out;
//   }
//   p {
//     font-size: 80px;
//     font-weight: 800;
//     animation: rainbow 1s infinite;
//   }
//   @keyframes run {
//     0% {
//       left: -1000px;
//     }
//     100% {
//       left: 2000px;
//     }
//   }
//   @keyframes rainbow {
//     0% {
//       color: rgb(255, 0, 0);
//     }
//     8% {
//       color: rgb(255, 127, 0);
//     }
//     16% {
//       color: rgb(255, 255, 0);
//     }
//     25% {
//       color: rgb(127, 255, 0);
//     }
//     33% {
//       color: rgb(0, 255, 0);
//     }
//     41% {
//       color: rgb(0, 255, 127);
//     }
//     50% {
//       color: rgb(0, 255, 255);
//     }
//     58% {
//       color: rgb(0, 127, 255);
//     }
//     66% {
//       color: rgb(0, 0, 255);
//     }
//     75% {
//       color: rgb(127, 0, 255);
//     }
//     83% {
//       color: rgb(255, 0, 255);
//     }
//     91% {
//       color: rgb(255, 0, 127);
//     }
//   }
// `;
