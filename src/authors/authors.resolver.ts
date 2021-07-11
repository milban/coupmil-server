import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Author } from 'src/authors/models/author.model';
import { AuthorsService } from 'src/authors/authors.service';
import { PostsService } from 'src/posts/posts.service';
import { Post } from 'src/posts/models/post.model';

@Resolver((of) => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query((returns) => Author)
  async author(@Args('id', { type: () => Int }) id: number): Promise<Author> {
    return this.authorsService.findOneById(id);
  }

  @ResolveField()
  async posts(@Parent() author: Author): Promise<Post[]> {
    const {} = author;
    return this.postsService.findAll();
  }
}
