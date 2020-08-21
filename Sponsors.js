Vue.component('Sponsors', {
  name: 'sponsor',
  props: ['sponsor'],
  data: function() {
    const comments = data.filter(comment => comment.post_id === this.post.id);
    return {
      message: '',
      comments: comments
    }
  },
  template: `
    <div class="blog-post">
      <h1 class="title">dasdf</h1>
    </div>
  `
})
