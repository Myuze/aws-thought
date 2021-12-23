const { v4: uuidv4 } = require('uuid');

const params = fileName => {
  const myFile = fileName.originalname.split('.');
  const fileType = myFile[myFile.length - 1];

  const imageParams = {
    Bucket: 'user-images-714b9163-4b86-4b59-aaa6-d2fdc87c05f7',
    Key: `${uuidv4()}.${fileType}`,
    Body: fileName.buffer
  };

  return imageParams;
};

module.exports = params;
