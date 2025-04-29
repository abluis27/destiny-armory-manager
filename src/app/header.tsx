const Header = () => {
    const pageIconUrl = "https://i.pinimg.com/736x/42/c3/3d/42c33d367ab70c83ac62a5b79cb25ea4.jpg"

    return (
        <header>
            <div className="flex bg-dark py-6">
                <div className="flex items-center">
                    <div className="w-20 object-scale-down">
                        <img src={pageIconUrl}/>
                    </div>
                    <h3>DAM</h3>
                </div>
            </div>
        </header>
    )
}

export default Header