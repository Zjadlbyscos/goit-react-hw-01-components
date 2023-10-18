
import Statistics from './statistics/Statistics';
import UserCard from './userCard/UserCard'
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactionHistory/TransactionHistory';

import data from 'data/data.json';
import dataUser from 'data/user.json';
import friends from 'data/friends.json'
import transList from 'data/transactions.json'
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
<FriendList friend={friends}/>
<TransactionHistory transaction={transList}/>

    </>
  );
};
