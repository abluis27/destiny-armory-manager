import Image from "next/image";

const Page404 = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col gap-5">
                <div className="flex items-center justify-center gap-5">
                <Image
                    src="/icons/error-page-icon.svg"
                    width={100}
                    height={100}
                    alt="404 page icon"
                />
                <p className="text-2xl">Page Not Found</p>
            </div>
            <p>The page you’re looking for doesn’t exist or may have been moved.</p>
            </div>
        </div>
    )
}

export default Page404