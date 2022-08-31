import React, { useState } from 'react';
import { GoPlusSmall } from 'react-icons/go';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const [rotateChevron, setRotateChevron] = useState(false);

  const handleRotate = () => setRotateChevron(!rotateChevron);

  const rotate = rotateChevron ? 'rotate(45deg)' : 'rotate(0)';

  return (
    <>
      <div className='accordion-item'>
        <hr />
        <div onClick={handleRotate}>
          <div
            className='accordion-title'
            onClick={() => setIsActive(!isActive)}
          >
            <div>{title}</div>
            <div>
              <GoPlusSmall
                size={18}
                className='button__accordion'
                style={{ transform: rotate, transition: 'all 0.2s linear' }}
                onClick={handleRotate}
              />
            </div>
          </div>
        </div>
        {isActive && (
          <div
            className='accordion-content'
            style={{
              /* transition all east in out */
              transition: 'all 1s ease-in-out; ',
            }}
          >
            {content}
          </div>
        )}
      </div>
    </>
  );
};

export default Accordion;
