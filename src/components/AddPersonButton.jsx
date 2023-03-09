import { Button } from "react-bootstrap";
import { BsPersonPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addFriend, removeFriend } from "../redux/actions";

const AddPersonButton = ({ personInfo, keyuser }) => {
  const dispatch = useDispatch();
  const friend = useSelector((state) => state.profile.friend);
  const consollogga = () => {
    console.log("friend: ", personInfo);
  };

  return (
    <>
      {friend.includes(personInfo._id) ? (
        <Button
          onClick={() => {
            dispatch(removeFriend(personInfo._id));
            consollogga();
          }}
          className="proOpenTo d-flex align-items-center"
          variant="danger"
        >
            <BsPersonPlusFill className="me-2" />
          <span>
            Unfollow
          </span>
        </Button>
      ) : (
        <Button
          onClick={() => {
            dispatch(addFriend(personInfo._id));
            consollogga();
          }}
          className=" proMore align-items-center"
          variant="outline"
        >
          <BsPersonPlusFill /> Follow
        </Button>
      )}
    </>
  );
};

export default AddPersonButton;
