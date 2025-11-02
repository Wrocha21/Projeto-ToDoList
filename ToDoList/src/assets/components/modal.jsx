import { useEffect } from "react";

export function Modal(props) {
  const defautCategory = "today";

  useEffect(() => {
    props.setCategories(defautCategory);
  }, []);

  return (
    <>
      <div className="modal-box">
        <div className="modal">
          <div className="closeModal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#ffffffff"
              viewBox="0 0 256 256"
              onClick={() => props.modalOpen(false)}
            >
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
          </div>
          <div className="box-categories">
            <div className="title-category">
              <span>CATEGORIES</span>
            </div>
            <div className="buttons-category">
              <input
                type="radio"
                name="day"
                id={defautCategory}
                defaultChecked
                onClick={(e) => {
                  if (e.target.checked) {
                    props.setCategories(e.target.id);
                  }
                }}
              />
              <label htmlFor={defautCategory}>today</label>
              <input
                type="radio"
                name="day"
                id="tomorrow"
                onClick={(e) => {
                  if (e.target.checked) {
                    props.setCategories(e.target.id);
                  }
                }}
              />
              <label htmlFor="tomorrow">Tomorrow</label>
            </div>
          </div>
          <div className="box-newTask">
            <div className="Title-create">
              <span>CREATE TASK</span>
            </div>
            <input
              type="text"
              placeholder="Sua tarefa aqui"
              value={props.nameTaskValue}
              onChange={(e) => props.setNameTask(e.target.value)}
            />
            <textarea
              type="text"
              placeholder="Descrição da sua Tarefa"
              value={props.descTask}
              onChange={(e) => props.setDescTask(e.target.value)}
            />
            <div className="addTaskBtn">
              <button
                onClick={() => {
                  if (props.nameTaskValue.length > 0) {
                    props.saveTask();
                  }
                  return null;
                }}
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
