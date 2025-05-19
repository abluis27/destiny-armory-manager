import Link from "next/link";
import Image from "next/image";

export default function Home() {
return (
    <div className="flex flex-col justify-center items-center py-10 px-5">
        <div className="xl:w-300 2xl:w-340
        flex flex-col gap-10">
            {/* Introduction */}
            <div className="  bg-medium-dark
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
                            <p className="text-2xl mt-4 font-semibold"
                            >Destiny Armory Manager (D.A.M)</p>
                        </div>
                        <div className="flex flex-col text-start gap-1">
                            <p className="font-bold text-center">Track your desired weapon rolls and stay ahead of the grind.</p>
                            <p>
                                Save your favorite weapons to a personalized wishlist, search across all weapon types, and view every possible perk combination.
                            </p>
                            <p>
                                With this app, you’ll never forget which god rolls you were chasing—or what perks to look for!
                            </p>
                        </div>
                    </div>
                    {/* Armory img */}
                    <div className="hidden xl:block w-full h-full relative">
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
            {/* Tutorial */}
            <div className="self-start">
                <p className="text-2xl pb-5">A little tutorial.</p>
                <ol className="list-decimal pl-5 text-lg space-y-2">
                    <li>
                        <div className="flex flex-col gap-2">
                            <p>Click in the search bar to open the search modal</p>
                            <Image
                                src="/images/tutorial-images/step-1.png"
                                alt="Step 1 tutorial"
                                width={500}
                                height={500}
                                className="border-2 border-medium rounded"
                            />
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col gap-2">
                            <p>Search your desired weapon</p>
                            <Image
                                src="/images/tutorial-images/step-2.png"
                                alt="Step 2 tutorial"
                                width={500}
                                height={500}
                            />
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col gap-2">
                            <p>Check its information and select the rolls you want</p>
                            <Image
                                src="/images/tutorial-images/step-3.png"
                                alt="Step 3 tutorial"
                                width={400}
                                height={400}
                            />
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col gap-2">
                            <p>Click "Save roll" to save the combination into the wishlist</p>
                            <Image
                                src="/images/tutorial-images/step-4.png"
                                alt="Step 4 tutorial"
                                width={200}
                                height={200}
                                className="border-2 border-medium rounded"
                            />
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-2">
                            <p>Click in the wish list icon to check all the weapons you are chasing!</p>
                            <Image
                                src="/icons/wish-list-icon.svg"
                                alt="Step 5 tutorial"
                                width={30}
                                height={30}
                            />
                        </div>
                    </li>
                    <Image
                        src="/images/tutorial-images/step-5.png"
                        alt="Step 5 tutorial"
                        width={500}
                        height={30}
                    />
                </ol>
            </div>
        </div>
    </div>
   );
  }
  