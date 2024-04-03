import { useState } from "react";
import { Navbar, Container, Stack, Badge } from "react-bootstrap";
import NewsList from "./components/NewsList";
import { useRef } from "react";
import Navbar1 from "./components/Navbar1";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
function App() {
  const [category, setCategory] = useState(["general"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [active, setActive] = useState(1);
  const ref = useRef(null);

  const handleCategoryClick = (id, value) => {
    setSearchTerm("");
    setActive(id);
    setCategory(value);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { id: 1, name: "General", value: "general" },
    { id: 2, name: "Business", value: "business" },
    { id: 3, name: "Entertainment", value: "entertainment" },
    { id: 4, name: "Health", value: "health" },
    { id: 5, name: "Science", value: "science" },
    { id: 6, name: "Sport", value: "sport" },
    { id: 7, name: "Technology", value: "technology" },
  ];

  return (
    <>
      <Navbar1 setCategory={setCategory} setSearchTerm={setSearchTerm} />

      <Navbar sticky="top" bg="dark">
        <Container>
          <Stack className="d-inline-block fs-5" align="center">
            {links?.map((link) => (
              <Badge
                pill
                key={link.id}
                className={`mx-2 text-secondary ${
                  active == link.id ? "border border-3 border-secondary" : ""
                }`}
                bg="light"
                role="button"
                onClick={() => handleCategoryClick(link.id, link.value)}
              >
                {link.name}
              </Badge>
            ))}
          </Stack>
        </Container>
      </Navbar>

      <Hero />

      <div ref={ref}>
        <Container className="mt-5 bg-dark">
          <div>emptyk</div>
        </Container>
        <NewsList category={category} searchTerm={searchTerm} />
      </div>

      <Footer />
    </>
  );
}

export default App;
