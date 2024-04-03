/* eslint-disable react/prop-types */
import { Col, Card, Image } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
function NewsItem({ article }) {
  const websiteUrl = article.url;
  const website = websiteUrl.split("https://").pop().split("/")[0];

  const date = article.publishedAt;
  const formatDate = date.replace("T", " ");
  const formatTime = formatDate.replace("Z", "");

  const str = article.title;
  const words = str.split(" ");
  const firstFiveWords = words.splice(0, 5);
  const result = firstFiveWords.join(" ");

  return (
    <Col xs={12} md={6} lg={4}>
      <Card className="shadow-lg m-2">
        <a href={article.url} target="blank" className="text-decoration-none">
          <Card.Img
            src={
              article.urlToImage === null
                ? "/images/undraw_News_re_6uub.png"
                : article.urlToImage
            }
            className="view zoom"
            variant="top"
            style={{ height: "12em" }}
            fluid="true"
            alt={result}
          />
          <Card.Body>
            <div className=" mb-3">
              <Image
                src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE%2CSIZE%2CURL&url=http://${website}&size=16`}
                alt={article.source.id}
                height={18}
                width={18}
                fluid="true"
                className="me-1"
              />
              <span className="text-dark">{article.source.name}</span>
            </div>
            <Card.Title className="text-dark">
              {result === "[Removed]" ? "lorem ipsum dolor cat phras" : result}
            </Card.Title>
            <Card.Text className="text-secondary">
              {article.description === "[Removed]"
                ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis non dignissimos voluptatibus optio at quisquam corrupti earum."
                : article.description}
            </Card.Text>
            <div>
              <small className="text-secondary">
                <b className="text-dark">Published At: </b>
                {formatTime}
              </small>
            </div>
          </Card.Body>
        </a>
      </Card>
    </Col>
  );
}

export default NewsItem;
