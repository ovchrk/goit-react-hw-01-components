import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

// const FriendsList = ({ avatar, name, isOnline }) => {};
const FriendsList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(({ name, avatar, isOnline, id }) => (
        <FriendListItem
          key={id}
          name={name}
          isOnline={isOnline}
          avatar={avatar}
        />
      ))}
    </ul>
  );
};
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
export default FriendsList;
// {
//     PropTypes.shape({
//        name: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
//     id: PropTypes.number.isRequired,
//     })
//   }
