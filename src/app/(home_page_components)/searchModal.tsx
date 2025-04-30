interface SearchModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchModal = ({ isOpen, setIsOpen }: SearchModalProps) => {
  return (
    <div
    className="bg-black/75
      inset-0 z-50 fixed flex items-center justify-center bg-opacity-50"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-medium p-50"
        onClick={(e) => e.stopPropagation()}
      >
        <p>I am a modal</p>
      </div>
    </div>
  );
};

  
export default SearchModal;
  