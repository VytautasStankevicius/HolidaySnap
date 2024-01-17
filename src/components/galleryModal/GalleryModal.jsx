import React from 'react';
import style1 from '../../images/style1.jpg'
import style2 from '../../images/style2.jpg'
import style3 from '../../images/style3.jpg'
import style4 from '../../images/style4.jpg'
import style5 from '../../images/style5.jpg'
import style6 from '../../images/style6.jpg'
import style7 from '../../images/style7.jpg'
import style9 from '../../images/style9.jpg'
import style10 from '../../images/style10.jpg'

const GalleryModal = ({  onClick, onStyleClick }) => {
  const handleClick = (style) => {
    onStyleClick(style);
  };

  return (
      <div className="gallery-container">
        <div>
          <h2>Photo styling choices:</h2>
        </div>
        <div className="gallery-content">
          <div>
            <img className='#' src={style1} alt="Style 0" onClick={() => handleClick('st1')}/>
            <img className='#' src={style2} alt="Style 1" onClick={() => handleClick('st2')} />
            <img className='#' src={style3} alt="Style 2" onClick={() => handleClick('st7')}/>
            <img className='#' src={style4} alt="Style 3" onClick={() => handleClick('st4')}/>
            <img className='#' src={style5} alt="Style 4" onClick={() => handleClick('st3')}/>
            <img className='#' src={style6} alt="Style 5" onClick={() => handleClick('st6')}/>
            <img className='#' src={style7} alt="Style 6" onClick={() => handleClick('st5')}/>
            <img className='#' src={style9} alt="Style 7" onClick={() => handleClick('st9')}/>
            <img className='#' src={style10} alt="Style 8" onClick={() => handleClick('st5')}/>
          </div>
        </div>
      </div>
  );
};

export default GalleryModal;
