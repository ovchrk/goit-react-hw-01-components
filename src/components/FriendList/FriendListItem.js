const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class="item">
      <span class={isOnline}></span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

//       <span className={isOnline ? styles.online : styles.offline}></span>;
export default FriendListItem;
