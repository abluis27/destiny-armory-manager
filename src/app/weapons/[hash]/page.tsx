export default async function WeaponDetailas({
  params,
}: {
  params: Promise<{ hash: string }>
}) {
  const { hash } = await params
  return (
    <div>
      <p>Weapon Details</p>
    </div>
  )
}
