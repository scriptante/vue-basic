Vue.component('blog-post', {
  props: ['comment'],
  template: `
    <div class="blog-post">
      <h3>{{ comment.name }}</h3>
      <div v-html="post.content"></div>
    </div>
  `
})