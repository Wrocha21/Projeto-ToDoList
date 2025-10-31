import svgCircle from "../../../src/assets/images/circle.svg";
import svgCheckCircle from "../../../src/assets/images/check-circle.svg";

function ListTask({ valueSearch, ...props }) {
  return (
    <>
      <div className="box-listTask">
        <span>TASK TODAY</span>
        <ul>
          {props.listOfTask
            .filter((item) =>
              item.nameTask.toLowerCase().includes(valueSearch.toLowerCase())
            )
            .map((item, index) => (
              <li
                style={{
                  border:
                    item.isCompleted === true
                      ? "1px solid #5CFF7C"
                      : "1px solid white",
                  textDecoration:
                    item.isCompleted === true ? "line-through" : "",
                }}
                key={`${index}-${item}`}
              >
                <div className="box-verify">
                  <img
                    onClick={() => {
                      props.toggleTask(item.id);
                    }}
                    src={item.isCompleted ? svgCheckCircle : svgCircle}
                    width={26}
                    alt=""
                  />
                  <div
                    className="title-task"
                    style={{ top: item.desc.length > 0 ? "-4px" : "" }}
                  >
                    {item.nameTask}
                    <div className="desc">{item.desc}</div>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="#FFFFFF"
                  style={{
                    fill: item.isCompleted === true ? "grey" : "",
                  }}
                  onClick={() => props.deleteTask(item.id)}
                  viewBox="0 0 256 256"
                >
                  <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
                </svg>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export { ListTask };
