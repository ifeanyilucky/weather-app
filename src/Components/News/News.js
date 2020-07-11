import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import style from "./news.module.css";
import Header from "../Header/Header";
const api = {
  base: "http://newsapi.org/v2/top-headlines?country=ng",
  key: "b709e093e17544a9b97f054a518c0889",
};
function News() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [articles, setArticles] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(`${api.base}&apiKey=${api.key}`);
    const articles = await data.json();

    setArticles(articles.articles);
    console.log(articles.articles);
  };
  return (
    <div>
      <Header />
      <Container>
        <div className="col-sm-10 mx-auto">
          {articles.map((article) => (
            <div key={article.id}>
              <div className="pt-4 pb-3">
                <span className="text-muted">
                  Source: {article.source.name}
                </span>
                <a
                  href={article.url}
                  style={{ textDecoration: "none", color: "#ffc400" }}
                >
                  <h4 className={`${style.newsTitle}`}>{article.title}</h4>
                </a>
              </div>
              <div className="d-flex">
                <img
                  alt={`News-${article.id}`}
                  href={article.url}
                  src={article.urlToImage}
                  className={style.newImg}
                />

                <div className="pl-4">
                  <p>{article.description}</p>
                  <a href={article.url}>
                    <button
                      className="btn btn-primary"
                      style={{
                        background: "#ffc400",
                        border: "none",
                        color: "white",
                      }}
                    >
                      Read more
                    </button>
                  </a>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default News;
