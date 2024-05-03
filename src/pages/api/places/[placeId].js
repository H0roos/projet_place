import { createRoute } from "@/api/createRoute"
import { PlaceModel } from "@/database/models/PlaceModel"

const handler = createRoute(async (req, res) => {
  const { placeId } = req.query
  const place = await PlaceModel.findById(placeId)

  if (!place) {
    res.status(404).send({ error: "not found" })

    return
  }

  // GET /places/[placeId] -> read resource item
  if (req.method === "GET") {
    res.send(place)

    return
  }

  // PATCH /places/[placeId] -> update resource item
  if (req.method === "PATCH") {
    const { typeLieu, nomLieu, adresse, codePostal, country } = await req.body

    Object.assign(place, {
      typeLieu: typeLieu || place.typeLieu,
      nomLieu: nomLieu || place.nomLieu,
      adresse: adresse || place.nomLieu,
      codePostal: codePostal || place.codePostal,
      country: country || place.country,
    })

    place.save()

    res.send(place)

    return
  }

  if (req.method === "DELETE") {
    await place.deleteOne()

    res.send(place)
  }
})

export default handler
