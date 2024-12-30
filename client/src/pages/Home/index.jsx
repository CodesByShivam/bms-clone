import { useEffect, useState } from "react";
import { HideLoading, ShowLoading } from "../../redux/loaderSlice";
import { getAllMovies } from "../../api/movie";
import { message, Row, Col, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import moment from "moment";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const getData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await getAllMovies();
      if (response.success) {
        setMovies(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="main-content">
      <Row className="movie-search">
        <Col span={24}>
          <Input
            placeholder="Type here to search for movies"
            onChange={handleSearch}
            prefix={<SearchOutlined />}
          />
        </Col>
      </Row>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 48 }}
        justify="space-around"
      >
        {
          movies &&
          movies
            .filter(
              movie => movie.title.toLowerCase().includes(searchText.toLowerCase())
            ).map(movie => (
              <Col
                className="gutter-row"
                span={{ xs: 24, sm: 12, md: 8, lg: 6, xl: 4, xxl: 3 }}
                key={movie._id}
              >
                <div
                  className="text-center poster cursor-pointer"
                  onClick={() => {
                    navigate(
                      `/movie/${movie._id}?date=${moment().format(
                        "YYYY-MM-DD"
                      )}`
                    );
                  }}
                >
                  <img
                    src={movie.poster}
                    alt="Movie Poster"
                    width={200}
                    height={300}
                    style={{ borderRadius: "8px" }}
                  />
                  <h3>
                    {movie.title}
                  </h3>
                </div>
              </Col>
            ))
        }
      </Row>
    </div>
  );
};

export default Home;
