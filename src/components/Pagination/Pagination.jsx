import classes from "./Pagination.module.css";

export const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={classes.pagination}>
      {pageNumbers.map((number) => (
        <p
          key={number}
          className={currentPage === number ? `${classes.pageLink} ${classes.active}` : classes.pageLink}
          onClick={() => {
            paginate(number);
          }}
        >
          {number}
        </p>
      ))}
    </div>
  );
};
