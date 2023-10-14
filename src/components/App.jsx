import dataUser from 'data/user.json';
import UserCard from './userCard/UserCard'

export const App = () => {
  return (
    <>
      { <UserCard username={dataUser.username}
              tag={dataUser.tag}
              location={dataUser.location}
              avatar={dataUser.avatar}
              stats={dataUser.stats}
              
              /> }
    </>
  );
};
