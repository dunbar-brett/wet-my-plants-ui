export default function Page({ params }: { params: { id: number } }) {
  return <div>My Plant: {params.id}</div>
}