import { Module } from '@nestjs/common';
import { AuthorsService } from 'src/authors/authors.service';
import { PostsModule } from 'src/posts/posts.module';
import { AuthorsResolver } from 'src/authors/authors.resolver';

@Module({
  imports: [PostsModule],
  providers: [AuthorsService, AuthorsResolver],
  exports: [AuthorsService, AuthorsResolver],
})
export class AuthorsModule {}
