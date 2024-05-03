import axios from "axios"
import Link from "next/link"

export const getServerSideProps = async ({ params: { placeId } }) => {
  const { data: place } = await axios(
    `http://localhost:3000/api/places/${placeId}`,
  )

  return {
    props: { place },
  }
}
const PlacePage = ({ place }) => (
  <>
    <h1 className="text-2xl font-semibold">Description: {place.description}</h1>
    <Link href={`/places/${place._id}/edit`}>
      {place.description}Category: {place.category}
    </Link>
  </>
)

export default PlacePage
