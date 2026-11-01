  import { useRef } from "react";
export default function Search({ value, onQueryChange }) {
  const searchBox = useRef(null);

      function handleClear() {
        //clear out the search
        onQueryChange("");
        searchBox.current.focus();

    }
  return (
    <>
      <div className="search">
        <input
          className="search-input"
          ref={searchBox}
          type="text"
          value={value}
          onChange={(evt) => onQueryChange(evt.target.value)}
        />
        {value !== "" && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={handleClear}
          >
            ×
          </button>
        )}
      </div>
    </>
  );
}
