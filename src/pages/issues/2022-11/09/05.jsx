function download(contentType, base64Data) {
  const linkSource = `data:${contentType};base64,${base64Data}`
  const downloadLink = document.createElement('a')
  downloadLink.href = linkSource
  downloadLink.download = fileName
  downloadLink.click()
}

export default function Page() {
  return <div onClick={() => download()}>download</div>
}
