let multerS3 = require('multer-s3');
let multer = require("multer")
const { S3Client } = require('@aws-sdk/client-s3');

const bucketName = "projectanu";   ///name of bucket is forimg12345

//store file in AWS S3 configuration 
const s3 = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_KEY
      }
})

//Storage Configuraion
let storage = multerS3({
      s3: s3,
      bucket: bucketName,
      acl: 'public-read',
      metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname })
      },
      contentType: multerS3.AUTO_CONTENT_TYPE,
      key: (req, file, cb) => {
            cb(null, file.originalname)
      }

})
let upload = multer({ storage: storage })