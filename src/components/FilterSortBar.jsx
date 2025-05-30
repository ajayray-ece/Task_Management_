function FilterSortBar({ filter, setFilter, sortBy, setSortBy }) {
  return (
    <div className="filter-sort-bar">
      <div className="filter-group">
        <label htmlFor="filter">Filter:</label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Tasks</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="sort-group">
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="dueDate">Due Date</option>
          <option value="priority">Priority</option>
        </select>
      </div>
    </div>
  );
}

export default FilterSortBar; 