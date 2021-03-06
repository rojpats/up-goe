/**
 * A class to represent commentposts
 * @class
 *
 * @property post_id identification for a commentpost
 * @property section_id identifies which section the post belongs to
 * @property user_id id of the user who posted the commentpost
 * @property post_content content of the post
 * @property post_comments[] array of postcomment replies of the commentpost
 * @property post_date date the commentpost was posted
 * @property commentable identifies if a post is commentable or not; 
 *  true if commentable and false if otherwise
 * @property is_post identifies if a commentpost is a post or a comment; 
 *  true if it is a post (a parent post) and false if it is a comment
 */
export class CommentPost {
    id: number;
    section_id: string;
    user_id: string;
    post_content: string;
    post_comments: number[];
    post_date: Date;
    commentable: boolean;
    is_post: boolean;

    constructor(
      section_id,
      user_id,
      post_content,
      post_comments,
      post_date,
      commentable,
      is_post,
    ){
      this.section_id = section_id;
      this.user_id = user_id;
      this.post_content = post_content;
      this.post_comments = post_comments;
      this.post_date = post_date;
      this.commentable = commentable;
      this.is_post = is_post;
    }

    
};