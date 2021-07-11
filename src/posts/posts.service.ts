import { Injectable } from '@nestjs/common';
import { Post } from 'src/posts/models/post.model';

@Injectable()
export class PostsService {
  async findAll(): Promise<Post[]> {
    return [
      {
        id: 1,
        title: 'post1',
        votes: 1,
      },
      {
        id: 2,
        title: 'post2',
        votes: 2,
      },
    ];
  }
}
