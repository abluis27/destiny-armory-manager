import { WeaponPreviewInfo } from "@/app/types/zodSchemasForDatabase/weaponPreviewInfo"
import WeaponSearchResult from "./WeaponSearchResult";

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
              <div className="h-full flex justify-center items-center py-3">
                <p>Start typing to see results!</p>
              </div>
            )
          }
        </div>)
}

export default WeaponSearchResultDisplay