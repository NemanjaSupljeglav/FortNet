import "./search.css";
import { DebounceInput } from "react-debounce-input";
function Search(props) {
  const searchHeandler = (event) => {
    setTimeout(() => {
      props.setSearch(event.target.value);
    }, 700);
  };
  return (
    <div className="Search-wrapper">
      <div className="search-title">Search</div>
      <DebounceInput
        type="text"
        className="Search-input"
        placeholder="Search"
        onChange={searchHeandler}
        minLength={3}
        debounceTimeout={300}
      ></DebounceInput>
    </div>
  );
}

export default Search;
