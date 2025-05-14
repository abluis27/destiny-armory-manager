import { WeaponPreviewInfo } from "@/app/types/zodSchemasForDatabase/weaponPreviewInfo"
import WeaponSearchResult from "./WeaponSearchResult";
import SearchModalMessage from "./searchModalMessage";

interface WeaponSearchResultDisplayProps {
    searchResults: WeaponPreviewInfo[]
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WeaponSearchResultDisplay =  ({
    searchResults,
    setIsOpen
}: WeaponSearchResultDisplayProps) => {
    return (
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
                        key={weapon.hash}
                        weaponPreviewInfo={weapon}
                        setIsOpen={setIsOpen}
                      />
                    )
                  )
                }
              </div>
            ) : (
                <SearchModalMessage 
                    message="Start typing to see results!"
                />
            )
          }
        </div>)
}

export default WeaponSearchResultDisplay