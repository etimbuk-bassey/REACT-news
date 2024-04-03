/* eslint-disable react/prop-types */
import { Container, Row, Image } from "react-bootstrap";
import useNewsData from "../hooks/useNewsData";
import NewsItem from "./NewsItem.jsx";

function NewsList({ category, searchTerm }) {
  const { newsData, loading, error } = useNewsData(category, searchTerm);

  if (loading) {
    return (
      <Container className="text-center mt-5 mb-5">
        <Image
          src="/images/1494.gif"
          fluid="true"
          className="mt-5 mb-5 pt-5 pb-5"
        />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center">
        <Image
          src="/images/1493.gif"
          fluid="true"
          className="mt-5 mb-5 pt-5 pb-5"
        />
        <div className="mt-5 mb-5">
          <span>Error: {error.message}</span>
        </div>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row>
        <Container className="mb-3 text-center">
          <div>
            Category <b className="text-secondary">| {category}</b>
          </div>
        </Container>
        {newsData?.map((article, i) => (
          <NewsItem key={i} article={article} />
        ))}
      </Row>
    </Container>
  );
}

export default NewsList;
