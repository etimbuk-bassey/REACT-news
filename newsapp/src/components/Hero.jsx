import { Row, Col, Image, Container } from "react-bootstrap";

function Hero() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <div className="py-5 position-relative">
            <h1>
              Fake <span className="text-secondary">NEWS</span> is cheap to
              produce. Genuine journalism is expensive.
            </h1>
            <span className="end-0 position-absolute">~ Etimbuk Bassey</span>
          </div>
          <div className="position-relative">
            <h1>
              <span className="text-secondary">NEWS</span> travels fast in
              places where nothing much ever happens.
            </h1>
            <span className="end-0 position-absolute">~ Charles Bukowski</span>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Image
            src="/images/undraw_News_re_6uub.png"
            alt=""
            fluid
            className="mx-auto d-block pt-3"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
