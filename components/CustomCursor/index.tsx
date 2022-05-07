import { useContext, useEffect, useRef } from "react";
import CustomCursorContext from "./context/CustomCursorContext";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLInputElement>(null);
  const secondCursorRef = useRef<HTMLInputElement>(null);

  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      if (cursorRef.current && secondCursorRef.current) {
        positionRef.current.mouseX =
          clientX - secondCursorRef.current.clientWidth / 2;
        positionRef.current.mouseY =
          clientY - secondCursorRef.current.clientHeight / 2;

        const mouseX = clientX - cursorRef.current.clientWidth / 2; //메인커서
        const mouseY = clientY - cursorRef.current.clientHeight / 2; //메인커서

        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px,0)`;
      }
    });
  }, []);

  const { type } = useContext(CustomCursorContext);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse); //반복할 함수
      const {
        mouseX,
        mouseY,
        destinationX, //목적지
        destinationY,
        distanceX, //거리
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        //목적지가 0 이면
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        //목적지가 바뀌었을때
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
      }

      if (
        //움직이지 않을때
        Math.abs(positionRef.current.distanceX) +
          Math.abs(positionRef.current.distanceY) <
        0.1
      ) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        //움직일때
        positionRef.current.destinationX += distanceX;
        positionRef.current.destinationY += distanceY;
      }
      if (secondCursorRef.current) {
        //second커서 움직이기
        secondCursorRef.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px,0)`;
      }
    };
    followMouse();
  }, []);

  return (
    <>
      <div className={`cursor-wrapper ${type}`}>
        <div className="main-cursor " ref={cursorRef}>
          <div className="main-cursor-background"></div>
        </div>
        <div className="secondary-cursor" ref={secondCursorRef}>
          <div className="cursor-background"></div>
        </div>
      </div>

      <style>{`

.main-cursor,
.secondary-cursor {
  z-index: 10000;

  pointer-events: none;
  // overflow: hidden;
  transform: translate3d(0, 0, 0);
  position: fixed;
}

.main-cursor {
  transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1);
  animation: fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
  mix-blend-mode: difference;

  
}
.main-cursor .main-cursor-background {
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
}


.secondary-cursor {
  width: 60px;
  height: 60px;
}


.secondary-cursor .cursor-background {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid black;
  position: relative;
}


.secondary-cursor .cursor-background::before{
  content: "";
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: white;
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  animation: fadeOut 0.75s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
}

.secondary-cursor .cursor-background::after{
  content: "";
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: white;
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      animation: fadeOut 0.75s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
}


.link .cursor-background {
  animation: fadeOut 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
}

.link .main-cursor-background {
  animation: scaleUp 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
}



        
      @keyframes fadeIn{
        from {
          opacity:0;
        }
        to {
          opacity:1;
        }
      }

      @keyframes fadeOut{
        from {
          opacity:1;
        }
        to {
          opacity:0;
        }
      }

      @keyframes scaleUp{
        from {
          transform: scale(1);
        }
        to {
          transform: scale(2);
        }
      }
        
      `}</style>
    </>
  );
}
