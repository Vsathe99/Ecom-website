
const url = `https://api.cloudinary.com/v1_1/dys2c3fvb/image/upload`

const uploadImage = async(imgae) =>{
    const formData = new FormData()
    formData.append('file', imgae)
    formData.append('upload_preset', 'react-images')



    const dataResponse = await fetch(url,{
        method: 'POST',
        body : formData
    })

    return dataResponse.json()
}

export default uploadImage