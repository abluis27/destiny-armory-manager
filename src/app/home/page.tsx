import Link from "next/link";
import Image from "next/image";

export default function Home() {
  
return (
    <div className="flex flex-col justify-center items-center py-10 gap-5">
        {/* Introduction */}
        <div className="w-300  bg-medium-dark
        flex justify-center items-center gap-3 rounded-md">
                {/* Img with message */}
            <div className="flex flex-col items-center gap-4 py-5 px-5">
                    <div  className="flex flex-col items-center">
                        <Link href="/home">
                            <Image
                            src="/icons/destiny-icon-white.svg"
                            alt="Icon of the page"
                            width={120}
                            height={120}
                            />
                        </Link>
                        <p className="text-2xl hidden lg:block mt-4 font-semibold"
                        >Destiny Armory Manager (D.A.M)</p>
                    </div>
                    <div className="flex flex-col text-start gap-1">
                        <p className="font-bold">Track your desired weapon rolls and stay ahead of the grind.</p>
                        <p>
                            Save your favorite weapons to a personalized wishlist, search across all weapon types, and view every possible perk combination.
                        </p>
                        <p>
                            With this app, you’ll never forget which god rolls you were chasing—or what perks to look for!
                        </p>
                    </div>
                </div>
                {/* Armory img */}
                <div className="w-full h-full relative">
                    <Image
                        src="/icons/home-page-armory.jpg"
                        alt="Icon of the page"
                        width={520}
                        height={520}
                        className="w-full h-full object-cover"
                    />
                <div className="absolute inset-0 bg-gradient-to-r from-medium-dark" />
            </div>
        </div>
        <div>
            <p>Another div</p>
        </div>
    </div>
   );
  }
  