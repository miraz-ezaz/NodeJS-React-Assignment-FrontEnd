import React from 'react';
import SearchButtons from './SearchButtons';
import HiddenSearchbar from './HiddenSearchbar';
import ProfileMenu from './ProfileMenu';

const Header = () => {
  return (
    <div id="headerdiv">
      <header>
        <div className="headerItem">
        <div className="logo">
        </div>
          <SearchButtons />
          <HiddenSearchbar />
          <ProfileMenu />
        </div>
      </header>
    </div>
  );
};

export default Header;
