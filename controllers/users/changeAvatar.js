const userService = require("../../services/userService");
const path = require("path");
const fs = require("fs");
var Jimp = require("jimp");

const tempDirPath = path.join(__dirname, "../..", "temp/");
const avatarsDirPath = path.join(__dirname, "../..", "public/avatars/");

async function changeAvatar(req, res, next) {
  const { file, user } = req;
  try {
    fs.renameSync(
      path.join(tempDirPath + file.filename),
      path.join(avatarsDirPath + file.filename)
    );

    const pic = await Jimp.read(path.join(avatarsDirPath, file.filename));
    pic
      .resize(Jimp.AUTO, 250)
      .quality(30)
      .write(path.join(avatarsDirPath, file.filename));

    user.avatarURL = "avatars/" + file.filename;
    const result = await userService.changeAvatar(user);
    res.status(200).json({ data: result });
  } catch (error) {
    console.log(error);
    error.code = 500;
    next(error);
  }
}

module.exports = changeAvatar;
