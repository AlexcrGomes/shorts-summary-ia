import ytdl from "ytdl-core"
import fs from "fs"

export const download = (videoId) => {
  const vídeoURL = "https://www.youtube.com/shorts/" + videoId
  console.log("realizando o download:", videoId)

  ytdl(vídeoURL, { quality: "lowestaudio", filter: "audioonly" })
    .on("info", (info) => {
      const seconds = info.formats[0].approxDurationMs / 1000

      if (seconds > 60) {
        throw new Error("A duração desse vídeo é maior do que 60 segundos.")
      }
    })
    .on("end", () => {
      console.log("Download do video finalizado")
    })
    .on("error", (error) => {
      console.log("não foi possivel fazer o download do vídeo:", error)
    })
    .pipe(fs.createWriteStream("./tmp/audio.mp4"))
}
