import React from "react";

import DataGrid from "./components/DataGrid/index";

import "./App.scss";

function App() {
  const [search, setSearch] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData([]);
  }, [currentPage]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handlePageChange = (dirrection) => {
    if (dirrection) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(currentPage - 1);
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
              value={search}
              onChange={handleChange}
            />
            <input className="search-button" type="submit" value="Submit" />
          </form>
        </div>
        <DataGrid
          data={data}
          currentPage={currentPage}
          totalPages={1}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default App;
