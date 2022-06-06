import React from 'react';

import "./flag.scss"

const Flag = () => (
  <>
    <div className='flag-line-1'>
      <div className="flag-1">
        <div flag1-icon></div>
        <div flag1-text></div>
      </div>
      <div className="flag-2">
        <div flag2-icon></div>
        <div flag2-text></div>
      </div>
      <div className="flag-3">
        <div flag3-icon></div>
        <div flag3-text></div>
      </div>
    </div>
    <div className='flag-line-2'>
      <div className="flag-4"></div>
      <div className="flag-5">
        <div flag5-icon>
        </div>
      </div>
      <div className="flag-6"></div>
    </div>
    <div className='flag-line-3'>
      <div className="flag-7">
        <div flag7-icon></div>
        <div flag7-text></div>
      </div>
      <div className="flag-8">
        <div flag8-icon></div>
        <div flag8-text></div>
      </div>
      <div className="flag-9">
        <div flag9-icon></div>
        <div flag9-text></div>
      </div>
    </div>
  </>
);

export default Flag;