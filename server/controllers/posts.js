import PostMessage from '../models/postMessage.js'

export const getPost = async (req, res) => {
  try {
      const getMessages = await PostMessage.find();

      res.status(200).json(getMessages);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const { title, message, selectedFile, creator, tag } = req.body;

  const newPost = new PostMessage({ title, message, selectedFile, creator, tag });

  try {
      await newPost.save();

      res.status(201).json(newPost);
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}