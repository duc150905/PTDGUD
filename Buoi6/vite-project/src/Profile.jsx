import { useRecoilValue } from "recoil";
import { userState } from "./userState";

function Profile() {
  const user = useRecoilValue(userState);

  return (
    <div>
      {user ? <p>Profile của {user.username}</p> : <p>Vui lòng login</p>}
    </div>
  );
}

export default Profile;