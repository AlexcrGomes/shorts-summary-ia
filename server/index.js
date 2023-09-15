import cors from "cors"
import Express, { request, response } from "express"

import { download } from "./download.js"

const app = Express()
app.use(cors())

app.get("/summary/:id", (request, response) => {
  download(request.params.id)
  response.json({ result: "Download do vídeo realizado com sucesso." })
})

app.listen(3333, () => console.log("Server is running on port  3333"))
