import _ from 'lodash';

export class BlogController {
  constructor() {
    this.message = 'All sorts of Angular stuff';

    this.posts = _.times(9, i => {
      return {
        title: `Post ${i}`,
        author: `Doug Shamoo`
      };
    });
  }
}
