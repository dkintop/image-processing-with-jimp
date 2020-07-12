const Jimp = require("jimp");

Jimp.read("./images/test-image.jpg")
  .then((image) => {
    return image
      .resize(256, 256) // resize
      .quality(100) // set JPEG quality
      .blur(2)
      .write("test-image-small-bw.jpg"); // save
  })
  .catch((err) => {
    console.error(err);
  });
