import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Dropdown, Button } from 'antd';
import './header.css';

function Header({ pageTitle, user, otherUser, sendDataToHeader }) {
  const navigate = useNavigate();

  const handleClick = (value) => {
    sendDataToHeader(value);
  };

  const handleSignout = () => {
    navigate(`/`);
  };
  const filteredOtherUsers = otherUser.filter(
    (u) => u.id !== user.id
  );
  const dropdownContent = (
    <div className="custom-dropdown">
      <div className="dropdown-item">
        <Avatar className="dropdown-avatar" size={80} src={user.profilepicture} />
      </div>
      <div className="dropdown-item">
        <span className="header-selecteduser">{user.name}</span>
      </div>
      <div className="dropdown-item">
        <span className="header-email">{user.email}</span>
      </div>
      <hr />
      <div className="dropdown-item">
        <Avatar src={filteredOtherUsers[0].profilepicture} className="header-selectedavatar" size="large"></Avatar>
        <span onClick={() => handleClick(filteredOtherUsers[0])}>{filteredOtherUsers[0].name}</span>
      </div>
      <hr />
      <div className="dropdown-item">
        <Avatar src={filteredOtherUsers[1].profilepicture} className="header-selectedavatar" size="large"></Avatar>
        <span onClick={() => handleClick(filteredOtherUsers[1])}>{filteredOtherUsers[1].name}</span>
      </div>
      <div className="dropdown-item">
        <Button type="primary" shape="round" size="large" className="signout-btn" onClick={handleSignout}>Sign out</Button>
      </div>
    </div>
  );
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <h1 className="logo me-auto">
            <a href="/" className="header-logo">{pageTitle}</a>
          </h1>
        </section>

        <section className="header-top__navbar">
          <div className="header-name">
            <Avatar src={user.profilepicture} size="large"></Avatar>
            <Dropdown
              overlay={dropdownContent}
              trigger={['click']}
            >
              <span className="header-username">{user.name}</span>
            </Dropdown>

          </div>
        </section>
      </section>
    </section>
  )
}

export default Header;