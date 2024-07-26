import React from 'react';

const SearchButtons = () => {
  const showHiddenSearchBar = () => {
    document.getElementById('mainSearchBar').style.display = 'none'
    document.getElementById('hiddenSearchbar').style.display = 'flex';
  };

  return (
    <div className="search-bar" id="mainSearchBar">
      <button className="searchButtons" onClick={showHiddenSearchBar}>
        <div className="buttonText">Anywhere</div>
      </button>
      <span className="divider"></span>
      <button className="searchButtons" onClick={showHiddenSearchBar}>
        <div className="buttonText">Any week</div>
      </button>
      <span className="divider"></span>
      <button className="searchButtons" onClick={showHiddenSearchBar}>
        <div className="buttonText">Add guests</div>
        <div className="serachIcon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"
            role="presentation" focusable="false"
            style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible' }}>
            <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default SearchButtons;
