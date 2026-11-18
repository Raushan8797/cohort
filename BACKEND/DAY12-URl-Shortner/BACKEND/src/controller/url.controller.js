import generateCode from "../utils/generateCode.js";
import urlModel from "../module/Url.model.js";

export const urlController = async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({
      message: "Url is required",
    });
  }

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return res.status(400).json({
      message: "enter a vaid url",
    });
  }

  if (url.length > 1000) {
    return res.status(400).json({
      message: "url is too long",
    });
  }
  const code = generateCode();
  const newurl = await urlModel.create({
    originalUrl: url,
    ShortCode: code,
  });

  return res.status(201).json({
    message: "url shorted successfuly",
    data: {
      originalUrl: newurl.originalUrl,
      ShortCode: newurl.ShortCode,
    },
  });
};

export const allUrl = async (req, res) => {
  const allUrls = await urlModel.find();
  return res.status(200).json({
    message: "All URLs retrieved successfully",
    data:{
        urls: allUrls
    },
  });
};

export const deleteUrl = async (req, res) => {
  const { id } = req.params;
  const deletedUrl = await urlModel.findByIdAndDelete(id);
  if (!deletedUrl) {
    return res.status(404).json({
      message: "URL not found",
    });
  }
  return res.status(200).json({
    message: "URL deleted successfully",
  });
};
