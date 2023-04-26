import React, {FC} from 'react';
import { IPost } from '@/models/post.interface';

interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({post, remove, update}) => {
    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post)
    }

    const handleUpdate = (event: React.MouseEvent) => {
        const title = prompt() ?? "no"
        update({...post, title})
    }

    return (
        <div className="post" id="post-list" onClick={handleUpdate}>
            {post.id}. {post.title}
            <button id="post-btn-remove" onClick={handleRemove}>Delete</button>
        </div>
    );
};

export default PostItem;