import PropTypes from 'prop-types';
import st from './FriendList.module.css';

export default function FriendList({ friend }) {
  return (
    <ul className={st.friendList}>
      {friend.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id} className={st.item}>
            <span className={isOnline ? st.statusOnline : st.statusOffline}>
              {isOnline}
            </span>
            <img className={st.avatar} src={avatar} alt={name} width="28" />
            <p className={st.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}
FriendList.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ),
  };