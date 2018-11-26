import React from 'react';
import renderAuthorize from 'components/Authorized';

const Authroized = renderAuthorize('user');

class User extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>User Page</h1>
        <Authroized authority="admin" noMatch={<p>权限不足</p>}>
          admin node
        </Authroized>
        <Authroized authority="user" noMatch={<p>权限不足</p>}>
          你不是管理员
        </Authroized>
      </div>
    );
  }
}

export default User;
