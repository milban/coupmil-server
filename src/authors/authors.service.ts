import { Injectable } from '@nestjs/common';
import { Author } from 'src/authors/models/author.model';

@Injectable()
export class AuthorsService {
  private data: Author[] = [
    {
      id: 1,
      firstName: 'junhyeok',
      lastName: 'park',
      posts: [],
    },
    {
      id: 2,
      firstName: 'milban',
      lastName: 'park',
      posts: [],
    },
  ];

  async findOneById(id: number): Promise<Author> {
    return this.data[id];
  }
}
