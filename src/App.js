import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import Profile from "./components/Profile"
import "./sass/App.scss"
import NavCustom from "./components/NavCustom"
import FooterProfilePage from "./components/FooterProfilePage"
import People from "./components/People"
import TestFetch from "./components/TestFetch"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NewPerson from "./components/NewPerson"
import Home from "./components/Home"
import MyNetwork from "./components/MyNetwork"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavCustom />
        <TestFetch />
        <Container>
          <Row className="d-flex flex-column flex-md-row">
            <Col xs={12} lg={12}>
              <Routes>
                <Route path="/user/me" element={<Profile />} />
                <Route path="user/:userID" element={<NewPerson />} />
                <Route path="/mynetwork" element={<MyNetwork />} />
                <Route path="/" element={<Home />} />
                <Route path="/" element={<People />} />
              </Routes>
            </Col>
          </Row>
          <FooterProfilePage />
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
