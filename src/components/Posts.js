import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Collapse, List, Avatar } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import Header from './Header/Header';


function AdditionalCollapse({ user, onClose }) {
  return (
    <Collapse activeKey={user.id} bordered={false}>
      <Collapse.Panel key={user.id} header={
        <div className="collapse-header">
          {user.name}
          {onClose && <CloseCircleOutlined onClick={() => onClose()} />}
        </div>
      }
        className="custom-collapse-content">
        <p className="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p className="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p className="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p className="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </Collapse.Panel>
    </Collapse>
  );
}

const Posts = ({ selectedUser, userAccounts, setSelectedUser }) => {
  const navigate = useNavigate();
  const [clickedUser, setClickedUser] = useState(null);
  const [expandedWidth, setExpandedWidth] = useState(false);
  const [userFromHeader, setuserFromHeader] = useState(null);

  const handleUserClick = (user) => {
    setClickedUser(user);
    setExpandedWidth(true);
  };

  const handleDataFromHeader = (data) => {
    setuserFromHeader(data);
    setSelectedUser(data);
    navigate('/profile');
  };

  const handleAdditionalCollapseClose = () => {
    setClickedUser(null);
    setExpandedWidth(false);
  };

  return <div>
    <Header pageTitle="Posts" user={userFromHeader ? userFromHeader : selectedUser} otherUser={userAccounts} sendDataToHeader={handleDataFromHeader} />
    <h1 className="comingsoon">Coming Soon</h1>
    <div className={`chat-box ${expandedWidth ? 'expanded' : ''}`}>
      <div className="collapse">
        <div className="additionalCollapse">
          <Collapse>
            <Collapse.Panel key="1" header="Chats" className="custom-collapse-content">
              <List
                dataSource={userAccounts}
                renderItem={(user) => (
                  <List.Item key={user.id} onClick={() => handleUserClick(user)}>
                    <List.Item.Meta
                      avatar={<Avatar size="large" src={user.profilepicture} />}
                      title={user.name}
                    />
                  </List.Item>
                )}
              />
            </Collapse.Panel>
          </Collapse>
        </div>

        {clickedUser && (
          <div className="additionalCollapse">
            <AdditionalCollapse user={clickedUser} onClose={handleAdditionalCollapseClose} />
          </div>
        )}
      </div>
    </div>
  </div>
};

export default Posts;