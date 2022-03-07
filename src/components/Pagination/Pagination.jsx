import classes from "./Pagination.module.css";

export const Pagination = ({ usersPerPage, totalUsers, paginate, currentPage }) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={classes.pagination}>
      {pageNumbers.map((number) => (
        <p
          key={number}
          className={currentPage === number ? classes.pageLink + " " + classes.active : classes.pageLink}
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
