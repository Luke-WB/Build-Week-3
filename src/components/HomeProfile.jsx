import { useEffect } from "react";
import { Card, ListGroup, Button } from "react-bootstrap/";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfile } from "../redux/actions";
import logo from "../assets/camera.png";
import copertina from "../assets/user.jpg";
import { BsFillPersonPlusFill, BsBookmarkFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { DocumentTitle } from "react";

function HomeProfile() {
  const token = useSelector((state) => state.profile.token);
  const myProfile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile(token));
  }, []);
  return (
    <>
      <Card className="my-4 mx-0" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={copertina} className="copert" />
        <Card.Body className=" m-0">
          <div className="d-flex flex-column justify-content-center align-items-center topCard position-relative">
            <div className="position-absolute eccolo">
              <Link to={"/profile"}>
                <img
                  src="https://i.pinimg.com/736x/65/91/a0/6591a0cdc097b089c2b329d1feddee54.jpg"
                  alt="pic-profile "
                  id="photo"
                />
              </Link>
            </div>
            <Card.Title className="mt-5">Welcome, {myProfile.name}</Card.Title>
            <p className="mx-3 text-center proLight">{myProfile.email}</p>
            <a href="#" className="mb-2 proBlue">
              Add a photo
            </a>
          </div>

          <ListGroup variant="flush">
            <ListGroup.Item className="grigio">
              <div className="d-flex justify-content-between">
                <a href="#" className="m-0" style={{ color: "gray" }}>
                  Connection
                </a>
                <div className="d-flex align-items-center">
                  <BsFillPersonPlusFill />
                  <span className="proBlue ms-3"> {Math.floor(Math.random() * 100)}</span>
                </div>
              </div>
              <div>
                <a href="#" className="m-0" style={{ color: "black" }}>
                  Grow your network
                </a>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="grigio">
              <p className="m-0" style={{ cursor: "pointer" }}>
                Access exclusive tools & insights
              </p>
              <div className="d-flex align-items-center">
                <div className="square d-flex "></div>
                <a href="#" className="proGreyHBlue proGrey">
                  Try premium for free
                </a>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="grigio">
              <div className="d-flex align-items-center">
                <BsBookmarkFill className="d-flex  me-1" style={{ color: "grey", cursor: "pointer" }} />
                <div style={{ cursor: "pointer" }}>My items</div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }} className="mt-2">
        <ListGroup variant="flush">
          <ListGroup.Item>
            <p className="proBlue">Group</p>
            <div className="d-flex align-item-center justify-content-between tratto">
              <div className="proBlue">Events</div>
              <div title="Create an event" className="homeModalH">
                <AiOutlinePlus />
              </div>
            </div>
            <p className="proBlue">Followed Hashtags</p>
          </ListGroup.Item>
          <ListGroup.Item
            className="proGrey grigio d-flex justify-content-center"
            style={{ cursor: "pointer", fontWeight: "500" }}
          >
            Discover more
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}

export default HomeProfile;
