import { SaveRollButtonProps } from "@/interfaces/weaponDetails/WeaponDetailsInterfaces"

const SaveRollButton = ({
    onSaved,
    className
}: SaveRollButtonProps) => {
    return (
        <>
            <button className={`bg-medium py-2 px-5 rounded-lg border-2
           border-light-medium cursor-pointer
           transition duration-300 hover:bg-blue-500 ${className}`}
           onClick={() => onSaved()}
          >+ Save roll</button>
        </>
    )
}

export default SaveRollButton