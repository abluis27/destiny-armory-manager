interface SearchModalMessageProps {
    message: string
}

const SearchModalMessage = ({message}: SearchModalMessageProps) => {
    return (
        <div className="h-full flex justify-center items-center py-3">
            <p>{message}</p>
        </div>
    )
}

export default SearchModalMessage