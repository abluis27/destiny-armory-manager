import { getWeaponSimpleInfoByName} from "@/lib/apiCalls";

export default async function Home() {
  const weaponName = "Fatebringer";
  const results = await getWeaponSimpleInfoByName(weaponName);
  const baseUrl = "https://www.bungie.net"
  results.forEach(weapon => console.log(weapon))

  return (
    <div>
      <h1>Weapons List</h1>
      {results.length > 0 ? (
        results.map((weapon) => {
          return <div key={weapon.weaponHash}>
            <h3>{weapon.displayProperties.name}</h3>
            <img src={`${baseUrl}${weapon.displayProperties.icon}`}/>
            <img src={`${baseUrl}${weapon.iconWatermark}`}/>
            <p>{weapon.weaponType.name}</p>
          </div>
        })
      ) : (
        <p>No weapons found</p>
      )}
    </div>
  );
}
