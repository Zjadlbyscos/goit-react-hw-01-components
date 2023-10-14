import dataUser from 'data/user.json';
import UserCard from './userCard/UserCard'
import data from 'data/data.json';
import Statistics from './statistics/Statistics';

export const App = () => {
  return (
    <>
       <UserCard username={dataUser.username}
              tag={dataUser.tag}
              location={dataUser.location}
              avatar={dataUser.avatar}
              stats={dataUser.stats}
              
              /> 

<Statistics stats={data} />
    </>
  );
};
