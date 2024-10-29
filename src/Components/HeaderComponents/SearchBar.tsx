interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="  Rechercher une recette"
      value={searchQuery}
      onChange={handleInputChange}
    />
  );
}

export default SearchBar;
