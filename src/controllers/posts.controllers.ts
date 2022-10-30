import { Request, Response } from "express";
import PostModel from '../models/Post.models';
export const createPost = async (req: Request, res: Response) => {
  try {
    const newPost = await PostModel.create(req.body) 
    res.json(newPost);    
  } catch (error) {
    console.log(error);
  }  
};
export const getPosts = async (req: Request, res: Response) => {
  try{
  const posts= await PostModel.find({});
  res.json(posts);
  }catch(err){
    console.log(err);
  }
};
export const updateePost = async (req: Request, res: Response) => {
  res.send("updateePost");
};
export const deletePost = async (req: Request, res: Response) => {
  res.send("deletePost");
};
export const getPost = async (req: Request, res: Response) => {
  res.send("getPost");
};
