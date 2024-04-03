import { Container, Col, Row, Image } from "react-bootstrap";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar1 />
      <Container>
        <Row className="mt-5 mb-5">
          <Col xs={12} md={6} className="mt-4">
            <Image
              src="/images/undraw_Contact_us_re_4qqt.png"
              fluid="true"
              alt="img"
            />
          </Col>
          <Col xs={12} md={6}>
            <h2 className="mt-2">Contact Us</h2>
            <Row className="mt-5 d-flex mx-auto">
              <Col xs={12} md={2}>
                <Image
                  src="/images/undraw_Mail_sent_re_0ofv.png"
                  height={50}
                  width={50}
                  fluid="true"
                  alt="img"
                />
              </Col>
              <Col xs={12} md={8}>
                <h5 className="pt-2">ehrtyc@gmail.com</h5>
              </Col>
            </Row>
            <Row className="mt-5 d-flex mx-auto">
              <Col xs={12} md={2}>
                <Image
                  src="/images/undraw_going_offline_ihag.png"
                  height={40}
                  width={25}
                  fluid="true"
                  alt="img"
                  className="ms-2"
                />
              </Col>
              <Col xs={12} md={8}>
                <h5 className="pt-2">+234 802 572 9933</h5>
              </Col>
            </Row>
            <Row className="mt-5 d-flex mx-auto">
              <Col xs={12} md={2}>
                <Image
                  src="/images/undraw_Directions_re_kjxs (1).png"
                  height={40}
                  width={30}
                  fluid="true"
                  alt="img"
                  className="ms-1"
                />
              </Col>
              <Col xs={12} md={8}>
                <h5 className="mb-4">
                  43B Kenyatta Street C/o <br />
                  P.O.Box 15653, <br /> UNEC Post Office, Uwani <br /> Enugu
                  State
                </h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
