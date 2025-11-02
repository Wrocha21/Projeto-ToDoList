const styleButton = {
  width: "81px",
  height: "23px",
  borderRadius: "10px",
  border: "none",
  color: "#302D2D",
  fontWeight: "500",
  background: "linear-gradient(182.32deg, #D9D9D9 -10.47%, #737373 171.33%)",
};

function CategoryToday() {
  return (
    <>
      <button style={styleButton}>Today</button>
    </>
  );
}
function CategoryTomorrow() {
  return (
    <>
      <button style={styleButton}>Tomorrow</button>
    </>
  );
}

export { CategoryToday, CategoryTomorrow };
