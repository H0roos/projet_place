import { createRoute } from "@/api/createRoute"
import { PlaceModel } from "@/database/models/PlaceModel"

const handler = createRoute(async (req, res) => {
  if (req.method === "GET") {
    const { typeLieu } = req.query
    const places = await PlaceModel.find(typeLieu ? { typeLieu } : {})

    res.send(places)

    return
  }

  if (req.method === "POST") {
    const newPlace = new PlaceModel(req.body)

    await newPlace.save()

    res.send(newPlace)
  }
})

export default handler
