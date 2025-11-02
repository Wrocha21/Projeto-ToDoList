import { ModalDelTask } from "./ModalDelTask";
import { useState } from "react";
import IconeDinamico from "./IconComponent";
import { CategoryToday } from "./categories";
import { CategoryTomorrow } from "./categories";

function ListTask({ valueSearch, deleteTask, ...props }) {
  const [openModalDel, setOpenModalDel] = useState(false);
  const [idTask, setIdTask] = useState(0);

  function addCategoryInTask(item) {
    if (item === "today") {
      return <CategoryToday />;
    }
    if (item === "tomorrow") {
      return <CategoryTomorrow />;
    }
    if (!item) {
      return "";
    }
  }

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
                  <IconeDinamico
                    nome={item.isCompleted ? "checkCircle" : "circle"}
                    cor="white"
                    tamanho={28}
                    onClick={() => {
                      props.toggleTask(item.id);
                    }}
                    style={{ margin: "0px 10px 0px 10px" }}
                  />
                  <div
                    className="title-task"
                    style={{ top: item.desc.length > 0 ? "-4px" : "" }}
                  >
                    {item.nameTask}
                    <div className="desc">{item.desc}</div>
                  </div>
                </div>
                {addCategoryInTask(item.category)}
                <IconeDinamico
                  nome="trash"
                  cor="white"
                  onClick={() => {
                    setIdTask(item.id);
                    setOpenModalDel(true);
                  }}
                />
              </li>
            ))}
        </ul>
      </div>
      {openModalDel && (
        <ModalDelTask
          setCloseModal={setOpenModalDel}
          task={idTask}
          delTask={deleteTask}
        />
      )}
    </>
  );
}

export { ListTask };
