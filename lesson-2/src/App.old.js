import React from 'react';

/*
    THE APP BEFORE BREAKING IT INTO SUB-COMPONENTS WITH PROPS
*/

const ParentComponent = () => {
  const users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 28 }
  ];

  return (
    <div>
      <h2>User List</h2>
      <UserList users={users} />
      <UserStatistics users={users} />
    </div>
  );
};

const UserList = (props) => {
  const { users } = props;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
  );
};

const UserStatistics = (props) => {
  const { users } = props;
  const totalUsers = users.length;
  const averageAge = users.reduce((sum, user) => sum + user.age, 0) / totalUsers;

  return (
    <div>
      <h3>Statistics</h3>
      <p>Total Users: {totalUsers}</p>
      <p>Average Age: {averageAge.toFixed(2)}</p>
    </div>
  );
};

export default ParentComponent;