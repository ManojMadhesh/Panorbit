import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, List, Avatar } from 'antd';
import './pages.css';

const LandingPage = ({ setSelectedUser, userAccounts }) => {
  const navigate = useNavigate();

  const handleAccountClick = (user) => {
    // Navigate to the profile page with the selected account ID
    setSelectedUser(user);
    navigate(`/profile`);
  };

  return (
    <div style={{ position: 'relative' }}>
      <svg id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} class="transition duration-300 ease-in-out delay-150"><path d="M 0,600 C 0,600 0,300 0,300 C 62.915384615384625,309.1333333333333 125.83076923076925,318.2666666666667 215,300 C 304.16923076923075,281.7333333333333 419.5923076923077,236.06666666666666 511,207 C 602.4076923076923,177.93333333333334 669.8,165.4666666666667 744,193 C 818.2,220.5333333333333 899.2076923076925,288.06666666666666 977,331 C 1054.7923076923075,373.93333333333334 1129.3692307692309,392.26666666666665 1206,383 C 1282.6307692307691,373.73333333333335 1361.3153846153846,336.8666666666667 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#5542C8" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path></svg>
      <div className="account-list">
        <Card title="Select an account" className="account-card">
          <List
            className="listscroll"
            dataSource={userAccounts}
            renderItem={(user) => (
              <List.Item key={user.id} onClick={() => handleAccountClick(user)}>
                <List.Item.Meta
                  avatar={<Avatar size="large" src={user.profilepicture} />}
                  title={user.name}
                />
              </List.Item>
            )}
          />
        </Card>
      </div>
    </div>
  );
};

export default LandingPage;
