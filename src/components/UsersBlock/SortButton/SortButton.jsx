export const SortButton = ({ children, onClick, className }) => {
  return (
    <button className={className} onClick={() => onClick()}>
      {children}
    </button>
  );
};
