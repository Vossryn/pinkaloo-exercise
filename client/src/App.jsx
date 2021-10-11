import React from "react";
import axios from "axios";

import DataGrid from "./components/DataGrid/index";
import Pagination from "./components/Pagination";

import "./App.scss";

const columns = [
  { title: "Name", field: "name" },
  { title: "City", field: "city" },
  { title: "State", field: "state" },
];

function App() {
  const [queryParams, setQueryParams] = React.useState({
    search: "",
    currentPage: 1,
  });
  const [nameSearch, setNameSearch] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [data, setData] = React.useState([]);

  const fetchData = React.useCallback(async () => {
    try {
      console.log(queryParams);
      const response = await axios.get(`/api/endpoint`, {
        params: queryParams,
      });
      let parsedData = response.data.charities.map((di) => ({
        ...di,
        city: di.address.city,
        state: di.address.state,
      }));
      setData(parsedData);
      setTotalPages(Math.ceil(response.data.num_charities / 20));
    } catch (error) {
      console.log(error);
    }
  }, [queryParams]);

  React.useEffect(() => {
    fetchData();
  }, [queryParams, fetchData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPage(1);
    setQueryParams({ search: nameSearch, currentPage: 1 });
  };

  const handleChange = (event) => {
    event.preventDefault();
    setNameSearch(event.target.value);
  };

  const handlePageChange = (direction) => {
    let newPage = page + direction;
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      setQueryParams({ search: nameSearch, currentPage: newPage });
    }
  };

  return (
    <div className="App">
      <div className="search-container">
        <div className="search-wrapper">
          <form onSubmit={handleSubmit}>
            <label className="search-lable" htmlFor="nameSearch">
              Name Search
            </label>
            <input
              type="text"
              name="nameSearch"
              id="nameSearch"
              className="search-input"
              value={nameSearch}
              onChange={handleChange}
            />
            <input className="search-button" type="submit" value="Submit" />
          </form>
        </div>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          prevPage={() => handlePageChange(-1)}
          nextPage={() => handlePageChange(1)}
        />
        <DataGrid rows={data} columns={columns} />
      </div>
    </div>
  );
}

export default App;
