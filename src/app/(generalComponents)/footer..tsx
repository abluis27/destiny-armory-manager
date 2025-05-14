import Image from 'next/image';


const Footer = () => {
    return (
        <footer className="bottom-0 mt-20 bg-medium-dark pt-5 pb-10 px-15 
        border-t-1 border-light-medium
        flex items-center justify-between">
            <div className="flex flex-col gap-2">
                <p>Destiny Armory Manager</p>
                <p>Made with <span>❤</span> by Luis</p>
            </div>
            <div className='flex flex-col gap-2'>
                <a
                    href='#'
                    className='flex gap-3 transition hover:scale-105'
                    >
                    <Image
                        src="/icons/github-icon.svg"
                        width={20}
                        height={20}
                        alt="GitHub Icon"
                    />
                    <p>Github</p>
                </a>
                <a
                    href='#'
                    className='flex gap-3  transition hover:scale-105'
                    >
                    <Image
                        src="/icons/linkedin-icon.svg"
                        width={20}
                        height={20}
                        alt="Linkedin Icon"
                    />
                    <p>Linkedin</p>
                </a>
            </div>
        </footer>
    )
}

export default Footer