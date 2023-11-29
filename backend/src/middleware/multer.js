import multer from 'multer'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  },
  limits: {
    fileSize:2 * 1024 * 1024
  },
  filterFilter: (req, file, cb) => {
    const typePermitted = ['image/png', 'image/jpg', 'image/jpeg', 'image/svg']

    if(typePermitted.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(null, false)
    }
  }
})

const uploads = multer({ storage })

export { uploads }