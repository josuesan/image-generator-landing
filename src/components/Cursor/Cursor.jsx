import React, { useCallback, useEffect } from 'react'
import { TweenMax } from 'gsap';

const Cursor = () => {

  const onMouseMove = (e) => {
    if (document.querySelector('.ball')) {
      TweenMax.to(document.querySelector('.ball'), .1, {
        x: e.pageX - 5,
        y: e.pageY - 7
      });
    }
  }

  const onMouseHover = (e) => {
    if (document.querySelector('.ball')) {
      TweenMax.to(document.querySelector('.ball'), .1, {
        x: e.pageX - 5,
        y: e.pageY - 7,
        scale: 3,
      });
    }
  }

  const onMouseHoverOut = (e) => {
    if (document.querySelector('.ball')) {
      TweenMax.to(document.querySelector('.ball'), .1, {
        x: e.pageX - 5,
        y: e.pageY - 7,
        scale: 1,
      });
    }
  }

  useEffect(() => {
    document.addEventListener('mouseenter', function () {
      document.querySelector('.cursor .ball').classList.add('visible');
    });
    document.addEventListener('mouseout', function (evt) {
      if (evt.toElement === null && evt.relatedTarget === null) {
        document.querySelector('.cursor .ball').classList.remove('visible');
      }
    });
    window.addEventListener('mousemove', onMouseMove);
    document.querySelectorAll('.hoverable').forEach((elem) => {
      elem.addEventListener('mouseenter', onMouseHover);
      elem.addEventListener('mouseleave', onMouseHoverOut);
    });
  }, []);

  return (
    <div className="cursor">
      <div className="ball">
        <svg height="45" width="45">
          <circle cx="15" cy="15" r="12" strokeWidth="0" />
        </svg>
      </div>
    </div>
  )
}

export default Cursor;
