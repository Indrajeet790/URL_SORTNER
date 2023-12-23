const Url=require("../models/UrlModel.js");
const shortid =require("shortid");
const passport =require("../config/passport-jwt-strategy.js");

// creating short url
module.exports.shortUrl=async (req, res) => {
  try {
    const { originalUrl } = req.body;
    const userId =req.user.id;
    if (originalUrl) {
      const shortUrl = shortid.generate();
      const urlData = new Url({
        originalUrl: originalUrl,
        shortedUrl: shortUrl,
        user: userId,
      });
      await urlData.save();
      res.status(201).json({
        status: "success",
        originalUrl: originalUrl,
        shortedUrl: `http://localhost:8000/${shortUrl}`,
      });
    } else {
      res.status(400).json({ status: "failed", message: "Please provide url" });
    }
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "error in shorting the url",
      error: error.message,
    });
  }
};

// accessing the original url using short url
module.exports.OriginalUrl = async (req, res) => {
  try {
    const { url } = req.params;
    if (url) {
      const urlData = await Url.findOne({ shortedUrl: url });
      if (urlData) {
        res.redirect(urlData.originalUrl);
      } else {
        res.status(400).json({ status: "failed", message: "Invalid Url" });
      }
    } else {
      res.status(400).json({ status: "failed", message: "Please provide url" });
    }
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "error in accessing the url",
      error: error.message,
    });
  }
};


