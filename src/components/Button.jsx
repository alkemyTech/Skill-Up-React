export const Button = ({ variant = 'btn-primary', action, children }) => {
  return (
    <button
      className={`btn ${variant}`}
      onClick={() => action()}
    >
      {children}
    </button>
  );
};
