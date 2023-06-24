const Author = require("../../models/Auther");
const Post = require("../../models/Post");

exports.postCreate = async (req, res, next) => {
  try {
    const { authorId } = req.params;
    const foundAuthor = await Author.findById(authorId);
    const newPost = await Post.create({ ...req.body, author: foundAuthor._id });
    await foundAuthor.updateOne({ $push: { posts: newPost._id } });
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

exports.authorCreate = async (req, res, next) => {
  try {
    const newAuthor = await Author.create(req.body);
    res.status(201).json(newAuthor);
  } catch (error) {
    next(error);
  }
};

exports.authorGet = async (req, res, next) => {
  try {
    const author = await Author.find().populate("posts");
    res.json(author);
  } catch (error) {
    next(error);
  }
};
