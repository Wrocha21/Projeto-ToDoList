import { useState } from "react";
import IconeDinamico from "./IconComponent";
function ModalFilter({ closeModal, totalTasks }) {
  const [selectedFilterName, setSelectedFilterName] = useState(null);
  console.log("renderizei");

  const [filters] = useState([
    {
      filterName: "All Tasks",
      checked: false,
    },
    {
      filterName: "All Tasks Completed",
      checked: false,
    },
    {
      filterName: "All Tasks  incomplete",
      checked: false,
    },
  ]);

  function verifyNameAndSetCheckIcon(NameFilter) {
    if (NameFilter === filters.filterName) {
      setSelectedFilterName(null);
    }

    setSelectedFilterName(NameFilter);
  }
  return (
    <>
      <div className="box-modalFilter">
        <div className="modalFilter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="#ffffffff"
            viewBox="0 0 256 256"
            onClick={closeModal}
          >
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
          </svg>
          <div className="title">
            <IconeDinamico nome="filter" cor="white" />
            <span>Filters</span>
          </div>
          <div className="box-filters">
            <ul>
              {filters.map((filter, index) => (
                <li
                  key={`${index}-${filter}`}
                  onClick={() => verifyNameAndSetCheckIcon(filter.filterName)}
                >
                  <div className="title-filterName">
                    {filter.filterName === selectedFilterName && (
                      <IconeDinamico nome="verify" cor="white" />
                    )}
                    {filter.filterName}
                  </div>
                  {filter.filterName === "All Tasks" && (
                    <div className="countAllTask">{totalTasks}</div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export { ModalFilter };
