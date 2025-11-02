import { useState } from "react";
import IconeDinamico from "./IconComponent";
import { ModalFilter } from "./modalFilter";

function AddTaskInList({ countTask, ...props }) {
  const [modalFilterList, setModalFilter] = useState(false);

  function closeModalFilter() {
    setModalFilter(false);
  }
  return (
    <>
      <div className="container-searchAndPlus">
        <div className="box-addTask">
          <IconeDinamico
            nome="filter"
            cor="white"
            id="filterList"
            onClick={() => setModalFilter(true)}
          />
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
      {modalFilterList && (
        <ModalFilter totalTasks={countTask} closeModal={closeModalFilter} />
      )}
    </>
  );
}

export { AddTaskInList };
