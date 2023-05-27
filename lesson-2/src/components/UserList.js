import UserItem from './UserItem'

function UserList({ title, users, hidden }) { // Parent & Child Component
    return (
      <>
        <ul>
          <h2>{title}</h2>
          {
            users.map(user => (
              <UserItem name={user.name} age={user.age} />
            ))
          }
        </ul>
      </>
    )
}

export default UserList

