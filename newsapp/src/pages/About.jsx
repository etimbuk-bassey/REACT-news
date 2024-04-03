import { Container, Row, Col, Image } from "react-bootstrap";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar1 />
      <Container>
        <Row className="mt-4 mb-">
          <Col xs={12} md={6} className="mt-2">
            <Image
              src="/images/undraw_Newsletter_re_wrob.png"
              alt="about img"
              fluid={true}
            />
          </Col>
          <Col xs={12} md={6}>
            <div className="pt-3">
              <h2>Who Are We?</h2>
              <p className="text-secondary fs-5 pt-2 lh-lg">
                We help people to build incredible brands and superior products.
                Our perspective is to furnish outstanding captivating services.
              </p>
              <p className="pt-3">
                We are a fast-growing company, but we have never lost sight of
                our core values. We believe in collaboration, innovation, and
                customer satisfaction. We are always looking for new ways to
                improve our products and services.
              </p>
              <Row className="pt-3">
                <Col xs={12} md={12} lg={6}>
                  <h4> Online Articles</h4>
                  <p className="text-secondary pt-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolores aperiam asperiores voluptatem.
                  </p>
                </Col>
                <Col xs={12} md={12} lg={6}>
                  <h4> Digital News</h4>
                  <p className="text-secondary pt-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolores aperiam asperiores voluptatem.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default About;
