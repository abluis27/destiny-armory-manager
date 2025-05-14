import Image from 'next/image';
import { useState } from 'react';
import { useDebouncedCallback } from "use-debounce";
import { WeaponPreviewInfo } from '../../types/zodSchemasForDatabase/weaponPreviewInfo';
import WeaponSearchResult from './WeaponSearchResult';

interface SearchModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchModal = ({ isOpen, setIsOpen }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState("")
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
      const weaponsPreviewInfo: WeaponPreviewInfo[] = await response.json()
      if(response.ok) {
        setSearchResults(sortResults(weaponsPreviewInfo))
        console.log(weaponsPreviewInfo)
      } else {
        setSearchResults([])
      }
    } catch (error) {
      console.log("API ERROR: ", error)
    }
  }, 300)

  const sortResults = (weapons: WeaponPreviewInfo[]) => {
    return weapons
      .sort((a, b) => a.displayProperties.name.localeCompare(b.displayProperties.name));
  };
  
  return (
    // Semi transparent background
    <div
    className="bg-black/75
      inset-0 z-100 fixed overflow-y-auto
      sm:flex sm:items-center sm:justify-center sm:bg-opacity-50"
      onClick={() => setIsOpen(false)}
    >
      {/* Modal */}
      <div
        className="bg-medium-dark py-4 rounded-lg border-1 border-light-medium
        inset-0 h-screen
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
        <div className="px-4 overflow-y-auto h-full
        sm:overflow-y-scroll sm:max-h-[49vh]">
          {
             searchResults.length != 0 ? (
              <div className='flex flex-col'>
                <div className='py-3'>
                  <p>Results: {searchResults.length}</p>
                </div>
                {
                  (
                    searchResults.map(weapon =>
                      <WeaponSearchResult
                        weaponPreviewInfo={weapon}
                        setIsOpen={setIsOpen}
                      />
                    )
                  )
                }
              </div>
            ) : (
              <div className="h-full flex justify-center items-center py-3">
                <p>Start typing to see results!</p>
              </div>
            )
          }
        </div>
      </div >
    </div>
  );
};
  
export default SearchModal;