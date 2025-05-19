import Image from 'next/image';
import { useState } from 'react';
import { useDebouncedCallback } from "use-debounce";
import WeaponSearchResultDisplay from './WeaponSearchResultsDisplay';
import SearchModalMessage from './searchModalMessage';
import { WeaponPreviewInfo } from '@/types/zodSchemasForDatabase/weaponPreviewInfo';

interface SearchModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchModal = ({ setIsOpen }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchError, setSearchError] = useState("")
  const [searchResults, setSearchResults] = useState<WeaponPreviewInfo[]>([])

  const handleSearch = async (query: string) => {
    setSearchQuery(query)
    getResults(query)
  }

  const getResults = useDebouncedCallback(async (query: string) => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    try {
      const response = await fetch(
        `/api/weapons/preview?name=${encodeURIComponent(query)}`
      )
      handleApiResponse(response)
    } catch (error: unknown) {
      if (error instanceof Error) {
        const errorMessage = error.message
        console.log("API ERROR:", errorMessage);
        setSearchError(errorMessage)
      } else {
        console.log("Unexpected error:", error);
      }
    }
  }, 300)

  const handleApiResponse = async (response: Response) => {
    if(response.ok) {
      setSearchError("")
      const weaponsPreviewInfo: WeaponPreviewInfo[] = await response.json()
      setSearchResults(sortResults(weaponsPreviewInfo))
    } else {
      setSearchResults([])
      handleError(response)
    }
  }

  const sortResults = (weapons: WeaponPreviewInfo[]) => {
    return weapons
      .sort((a, b) => 
        a.displayProperties.name.localeCompare(b.displayProperties.name))
  }

  const handleError = async (response: Response) => {
    const error = await response.json();
    if(response.status === 404) {
      setSearchError(error.error);
    }
  }
  
  return (
    // Semi transparent background
    <div
    className="bg-black/75
      inset-0 z-100 fixed top-15 overflow-y-auto
      sm:flex sm:items-center sm:justify-center sm:bg-opacity-50"
      onClick={() => setIsOpen(false)}
    >
      {/* Modal */}
      <div
        className="bg-medium-dark py-4 sm:rounded-lg border-1 border-light-medium
        h-screen
        sm:w-170 sm:h-130"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input*/}
        <div className="px-4 pb-3 flex items-center border-b-1 border-light-medium">
          <input
          className="w-full focus:outline-none caret-off-white"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) =>
              handleSearch(e.target.value)
            }
          />
          <Image
              src="/icons/close-icon.svg"
              alt="Button to close the search modal"
              width={32}
              height={32}
              className="sm:hidden"
              onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Displaying the search results */}
        {
          searchError ? (
            <SearchModalMessage message={searchError} />
        ) : (
          <WeaponSearchResultDisplay
            searchResults={searchResults}
            setIsOpen={setIsOpen}
          />
        )
        }
      </div >
    </div>
  );
};
  
export default SearchModal;
