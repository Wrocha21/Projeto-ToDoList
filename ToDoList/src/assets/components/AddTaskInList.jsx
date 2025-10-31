import svgClean from "../../../public/static/vasso.svg";

function AddTaskInList(props) {
  return (
    <>
      <div className="container-searchAndPlus">
        <div className="box-addTask">
          <input
            type="text"
            placeholder="Pesquise suas tarefas"
            value={props.valueSearch}
            onChange={(e) => props.setValueSearch(e.target.value)}
          />
          <div className="icons-add">
            <img
              width={39}
              src={svgClean}
              alt=""
              onClick={() => props.modalCleanOpen(true)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="39"
              fill="#cdcdcd"
              viewBox="0 0 256 256"
              onClick={() => props.modalOpen(true)}
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export { AddTaskInList };
