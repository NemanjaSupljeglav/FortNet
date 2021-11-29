import "./search.css";
function Search(props) {
  const searchHeandler = (event) => {
    props.setSearch(event.target.value);
  };
  return (
    <div className="Search-wrapper">
      <div className="search-title">Search</div>
      <input
        type="text"
        className="Search-input"
        placeholder="Search"
        onChange={searchHeandler}
      ></input>
    </div>
  );
}

export default Search;
