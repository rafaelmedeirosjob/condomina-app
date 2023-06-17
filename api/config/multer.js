import multer from 'multer'
import path from 'path'
import crypto from 'crypto'
import multerS3 from 'multer-s3'
import aws from 'aws-sdk'

const storageTypes =
{
    local: multer.diskStorage(
        {
            destination: (req,file,cb) => {
                cb(null, path.resolve(__dirname,'..', 'tmp', 'uploads'))
            },
            filename: (req,file, cb) => {
                crypto.randomBytes(16,(err,hash) => {
                    if(err) cb(err)
                    const filename = `${hash.toString('hex')}-${file.originalname}`
                    cb(null, filename)
                })
            }
        }
    ),
    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'condomina',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req,file, cb) => {
            crypto.randomBytes(16,(err,hash) => {
                if(err) cb(err)

                const filename = `${hash.toString('hex')}-${file.originalname}`
                cb(null, filename)
            })
        }
    })
}
module.exports = {
dest: path.resolve(__dirname,'..', 'tmp', 'uploads'),
storage: storageTypes[process.env.APP_MODE === 'development' ? 'local' : 's3'] ,
limits: {
    fileSize: 2 * 1024 * 1024
},
fileFilter: (req,file,cb) => {
    const allowedMimes = [
        'image/jpeg',
        'image/pjpeg',
        'image/png'
    ]
    if(allowedMimes.includes(file.mimetype)){
        cb(null,true)
    } else {
        cb(new Error('Tipo de arquivo inválido'))
    }
},
}