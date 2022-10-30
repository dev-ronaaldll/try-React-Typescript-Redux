import {prop, getModelForClass} from '@typegoose/typegoose';

export class Post{
    @prop()
    title: string;
    @prop()
    description: string;
    @prop()
    image: string;
}

const PostModel = getModelForClass(Post);
export default PostModel;
