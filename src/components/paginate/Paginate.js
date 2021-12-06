import React from "react";
import ReactPaginate from "react-paginate";
import "./paginate.css";
function Paginate(props) {
  const handlePageclick = (data) => {
    console.log(data.selected);
    props.setSkipPage(data.selected * 9);
  };

  return (
    <>
      <ReactPaginate
        className="pagination"
        previousLabel={""}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={31}
        marginPagesDisplayed={3}
        pageRangeDisplayed={2}
        onPageChange={handlePageclick}
        activeClassName={"active"}
      ></ReactPaginate>
    </>
  );
}

export default Paginate;
