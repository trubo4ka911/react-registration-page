import { css } from "@emotion/css";
import user1Avatar from "../../avatars/user1.png";
import user2Avatar from "../../avatars/user2.png";
import user3Avatar from "../../avatars/user3.png";
import user4Avatar from "../../avatars/user4.png";
import user5Avatar from "../../avatars/user5.png";
import user6Avatar from "../../avatars/user6.png";
import user7Avatar from "../../avatars/user7.png";
import user8Avatar from "../../avatars/user8.png";

export const AVATARS = [
  { id: 1, url: user1Avatar },
  { id: 2, url: user2Avatar },
  { id: 3, url: user3Avatar },
  { id: 4, url: user4Avatar },
  { id: 5, url: user5Avatar },
  { id: 6, url: user6Avatar },
  { id: 7, url: user7Avatar },
  { id: 8, url: user8Avatar },
];

const AvatarSelect = ({ selectedAvatar, onAvatarSelect }) => {
  const handleAvatarClick = (avatar) => {
    onAvatarSelect(avatar);
  };

  return (
    <div className={"details__wrapper"}>
      <label>Select your avatar:</label>
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 10px;
        `}
      >
        {AVATARS.map((avatar) => (
          <img
            key={avatar.id}
            src={avatar.url}
            alt={`Avatar ${avatar.id}`}
            className={css`
              width: 80px;
              height: 80px;
              object-fit: cover;
              border-radius: 50%;
              cursor: pointer;
              border: 2px solid ${selectedAvatar === avatar ? "blue" : "transparent"};
            `}
            onClick={() => handleAvatarClick(avatar)}
          />
        ))}
      </div>
    </div>
  );
};

export default AvatarSelect;
