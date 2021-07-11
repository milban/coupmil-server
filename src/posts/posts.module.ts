import { Module } from '@nestjs/common';
import { PostsService } from 'src/posts/posts.service';

@Module({
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsModule {}
