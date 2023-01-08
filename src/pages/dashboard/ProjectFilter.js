const filterList = [
  "all",
  "mine",
  "development",
  "design",
  "finance",
  "marketing",
];

function ProjectFilter({ currentFilter, changeFilter }) {
  return (
    <div className="project-filter">
      <nav>
        <p>Filter by</p>
        <div>
          {filterList.map((f) => (
            <button
              key={f}
              onClick={() => changeFilter(f)}
              className={currentFilter === f ? "active" : ""}
            >
              {f}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default ProjectFilter;
