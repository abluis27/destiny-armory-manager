import Link from "next/link";

export default function Home() {
  
return (
    <div className="flex flex-col">
        <p> I am a home page</p>
        <Link
          href="/wishlist"
          className="bg-medium-dark p-2 w-20"
        >Go to wish list</Link>
    </div>
    );
  }
  