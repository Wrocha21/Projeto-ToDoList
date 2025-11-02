import { AddTaskInList } from "./assets/components/AddTaskInList";
import { ListTask } from "./assets/components/ListTask";
import { Modal } from "./assets/components/Modal";
import { useState } from "react";
import IconeDinamico from "./assets/components/IconComponent";

import userPerfilImg from "./assets/images/user-perfil.png";

import "../src/assets/css/ListTask.css";
import "../src/assets/css/global.css";
import "../src/assets/css/modal.css";
import "../src/assets/css/modalDelTask.css";
import "../src/assets/css/addTask.css";
import "../src/assets/css/modalFilter.css";

function App() {
  const [listOfTask, setListOfTask] = useState([]);
  const [nameTask, setNameTask] = useState("");
  const [descTask, setDescTask] = useState("");
  const [nextId, setNextId] = useState(0);
  const [modal, setModal] = useState(false);
  const [countTaskImcomplete, setCountTaskImcomplete] = useState(0);
  const [countTaskComplete, setCountTaskComplete] = useState(0);
  const [search, setSearch] = useState("");
  const [categories, setCategory] = useState("");

  function modalOpen(boolean) {
    setModal(boolean);
  }

  function countTaskCompleted(taskIsCompleted) {
    if (taskIsCompleted === true) {
      setCountTaskComplete((prev) => prev + 1);
      console.log(countTaskComplete);
    }
  }

  function setCategories(categoryID) {
    setCategory(categoryID);
  }

  function addNewTaskOnList() {
    const task = {
      nameTask: nameTask,
      id: nextId,
      desc: descTask,
      category: categories,
      isCompleted: false,
    };
    setListOfTask((prev) => [...prev, task]);
    setNextId((prev) => prev + 1);
    setCountTaskImcomplete((prev) => prev + 1);
    setNameTask("");
    countTaskCompleted();
    setDescTask("");
    setModal(false);
  }

  function deleteTaskOnList(taskID) {
    const task = listOfTask.filter((task) => task.id !== taskID);
    setListOfTask(task);
  }

  function toggleTaskOnList(taskID) {
    const newTasks = listOfTask.map((task) => {
      if (task.id === taskID) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setListOfTask(newTasks);
  }

  return (
    <>
      <div className="navbar">
        <div className="user-perfil">
          <img src={userPerfilImg} alt="" />
          <span>Juliwwa</span>
        </div>
        <div className="icons-info">
          <div className="notify-box">
            <IconeDinamico nome="bell" cor="white" tamanho={26} />
          </div>
          <div className="gear-box">
            <IconeDinamico nome="gear" cor="white" tamanho={26} />
          </div>
        </div>
      </div>
      <AddTaskInList
        modalOpen={modalOpen}
        valueSearch={search}
        setValueSearch={setSearch}
        countTask={countTaskImcomplete}
      />
      <ListTask
        listOfTask={listOfTask}
        toggleTask={toggleTaskOnList}
        deleteTask={deleteTaskOnList}
        valueSearch={search}
        countTasksCompleted={countTaskCompleted}
      />
      {modal && (
        <Modal
          modalOpen={modalOpen}
          saveTask={addNewTaskOnList}
          setNameTask={setNameTask}
          nameTaskValue={nameTask}
          descTask={descTask}
          setDescTask={setDescTask}
          setCategories={setCategories}
        />
      )}

      <div className="footer">
        <div className="task-menu">
          <IconeDinamico nome="notepad" cor="white" />
          <span>Tarefas</span>
        </div>
        <div className="calendar-menu">
          <IconeDinamico nome="calendar" cor="white" />
          <span>Calendar</span>
        </div>
      </div>
    </>
  );
}

export default App;
