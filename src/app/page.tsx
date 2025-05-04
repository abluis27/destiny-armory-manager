export default async function Home() {
  let savedWeapons = []

  return (
    // For testing porpuses
    <div>
      <div className="flex justify-center items-center
      bg-medium-dark py-3">
        <p className="text-sm">
          Your companion for Destiny 2 Weapons and Perks tracking</p>
      </div>
      <div>
        <p className="py-4 px-3 text-xl">Weapon List</p>
      </div>
      {
        savedWeapons.length != 0 ? (
          <p>Balls</p>
        ) : (
        <div className="w-full h-screen flex justify-center items-center">
          <p>No weapons added yet.</p>
        </div>
        )
      }
    </div>
  );
}
