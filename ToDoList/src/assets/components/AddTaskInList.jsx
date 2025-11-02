import IconeDinamico from "./IconComponent";

function AddTaskInList(props) {
  return (
    <>
      <div className="container-searchAndPlus">
        <div className="box-addTask">
          <IconeDinamico nome="filter" cor="white" id="filterList" />
          <input
            type="text"
            placeholder="Pesquise suas tarefas"
            value={props.valueSearch}
            onChange={(e) => props.setValueSearch(e.target.value)}
          />
          <div className="icons-add">
            <IconeDinamico
              nome="circuloAdd"
              cor="white"
              tamanho={40}
              onClick={() => props.modalOpen(true)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export { AddTaskInList };
