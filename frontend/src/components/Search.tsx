import { SearchIcon } from "@/icons/Search"

export const Search = ({
  searchQuery,
  handleSearch
}: {
  searchQuery: string,
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {

  return (
    <div className="relative mb-8">
      <input id="searchQuery" autoComplete="off"
        value={searchQuery} onChange={handleSearch}
        spellCheck="false"
        name="searchQuery"
        placeholder="Search"
        tabIndex={0}
        role="textbox"
        aria-label="Search"
        aria-describedby="search-description"
        className="font-text border-white bg-background focus-visible:shadow-outline-white focus-visible:border-white invalid:border-danger input-text block h-20 w-full rounded-md border border-b-[6px] px-6 focus-visible:outline-none disabled:hover:cursor-not-allowed text-xl pl-[5.5rem] transition text-left font-light font-mono_heading" />

      <div className="absolute top-[0.875rem] left-6 z-50 h-12 w-12">
        <SearchIcon />
      </div>
    </div>
  )
}