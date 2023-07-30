import React, { useState } from 'react';
import { Row, Col, Avatar, Collapse, List } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import MapView from './Map';
import Header from './Header/Header';

function AdditionalCollapse({ user, onClose }) {
  return (
    <Collapse activeKey={user.id}>
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

const Profile = ({ selectedUser, userAccounts, setSelectedUser }) => {
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
  };

  const handleAdditionalCollapseClose = () => {
    setClickedUser(null);
    setExpandedWidth(false);
  };

  if (!selectedUser) {
    return <div>No user selected.</div>;
  }
  return (
    <>
      <Header pageTitle="Profile" user={userFromHeader ? userFromHeader : selectedUser} otherUser={userAccounts} sendDataToHeader={handleDataFromHeader} />
      <Row>
        <Col span={10} className="user-col">
          <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 150, xxl: 150 }} src={userFromHeader ? userFromHeader.profilepicture : selectedUser.profilepicture} />
          <h2>{userFromHeader ? userFromHeader.name : selectedUser.name}</h2>
          <table>
            <tr>
              <td className="title">Username:</td>
              <td className="value">{userFromHeader ? userFromHeader.username : selectedUser.username}</td>
            </tr>
            <tr>
              <td className="title">e-mail:</td>
              <td className="value">{userFromHeader ? userFromHeader.email : selectedUser.email}</td>
            </tr>
            <tr>
              <td className="title">Phone:</td>
              <td className="value">{userFromHeader ? userFromHeader.phone : selectedUser.phone}</td>
            </tr>
            <tr>
              <td className="title">Website:</td>
              <td className="value">{userFromHeader ? userFromHeader.website : selectedUser.website}</td>
            </tr>
          </table>
          <hr />
          <h2 className="company-col">Company</h2>
          <table>
            <tr>
              <td className="title">Name:</td>
              <td className="value">{userFromHeader ? userFromHeader.company.name : selectedUser.company.name}</td>
            </tr>
            <tr>
              <td className="title">catchphrase:</td>
              <td className="value">{userFromHeader ? userFromHeader.company.catchPhrase : selectedUser.company.catchPhrase}</td>
            </tr>
            <tr>
              <td className="title">bs:</td>
              <td className="value">{userFromHeader ? userFromHeader.company.bs : selectedUser.company.bs}</td>
            </tr>
          </table>
        </Col>

        <Col span={14}>
          <h2 className="addr-title">Address : </h2>
          <table className="addr-content">
            <tr>
              <td className="title">Street:</td>
              <td className="value">{userFromHeader ? userFromHeader.address.street : selectedUser.address.street}</td>
            </tr>
            <tr>
              <td className="title">Suite:</td>
              <td className="value">{userFromHeader ? userFromHeader.address.suite : selectedUser.address.suite}</td>
            </tr>
            <tr>
              <td className="title">City:</td>
              <td className="value">{userFromHeader ? userFromHeader.address.city : selectedUser.address.city}</td>
            </tr>
            <tr>
              <td className="title">Zipcode:</td>
              <td className="value">{userFromHeader ? userFromHeader.address.zipcode : selectedUser.address.zipcode}</td>
            </tr>
          </table>

          <div className="map-view">
            <MapView user={userFromHeader ? userFromHeader : selectedUser} />
          </div>

          <div>
            <h4 className="lat-lng">Lat: {userFromHeader ? userFromHeader.address.geo.lat : selectedUser.address.geo.lat}  Long: {userFromHeader ? userFromHeader.address.geo.lat : selectedUser.address.geo.lng}</h4>
          </div>

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
        </Col>
      </Row>
    </>
  );
};

export default Profile;
