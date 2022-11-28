async function sendPost(e) {
  const imagePrefix = `${imageUpload.name + uuidv4()}`

  if (imageUpload) {
    const imageRef = ref(storage, imagePrefix)

    await uploadBytes(imageRef, imageUpload)

    console.log('Image uploaded. ' + imageUpload)

    const url = await getDownloadURL(ref(storage, imagePrefix))

    const docRef = await addDoc(collection(db, 'posts'), {
      caption: caption,
      image: url,
    })

    setImageUrl(url)
  }
}
