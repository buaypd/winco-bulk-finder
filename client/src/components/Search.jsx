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
      <div className="relative w-full">
        <input
          className="w-full rounded-full border border-gray-200 bg-gray-100 py-3 pl-5 pr-12 text-sm text-gray-900"
          placeholder="Search for bulk products"
          aria-label="Search bulk products"
          ref={searchBox}
          type="text"
          value={value}
          onChange={(evt) => onQueryChange(evt.target.value)}
        />
        {value !== "" && (
          <button
            className="absolute right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-xl text-gray-600"
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
