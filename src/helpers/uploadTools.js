import cloudinary from 'cloudinary'

export const uploadToCloudinary = file => new Promise((resolve, reject) => {
  cloudinary.v2.uploader.upload(file.src, {publicId: file.name}, (error, upload) => {
    if (error) reject(error)
    else resolve(upload)
  })
})
