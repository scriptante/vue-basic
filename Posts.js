fetch('http://localhost:3333/comments').then(response => {
  response.json().then(data => {
    Vue.component('Posts', {
      props: ['post'],
      data: function() {
        const comments = data.filter(comment => comment.post_id === this.post.id);
        return {
          message: '',
          comments: comments
        }
      },
      methods: {
        sendComment: function (postId, message) {
          if (!message) {
           return 
          }
          const comment = {
            name: 'user logado',
            content: message,
            post_id: postId,
            created_at: new Date(),
          };
          fetch('http://localhost:3333/comments', {
            method: "POST",
            body: JSON.stringify(comment),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          }).then(response => {
            response.json().then(data => {
              this.comments.push(data);
            })
          })
        }
      },
      template: `
        <div class="blog-post">
          <h1 class="title">{{ post.title }}</h1>
          <div class="content">
            <h3>{{post.content}}</h3>
            <img v-bind:src="post.img_url" alt="post.img_url"/>
          </div>
          <h3 v-if="comments.length === 0">Seja o primeiro a comentar</h3>
          <div class="newComment">
            <nav>
              <img src="https://a.disquscdn.com/1596763802/images/noavatar92.png" alt="user" />
              <button v-on:click="sendComment(post.id, message)">Enviar</button>
            </nav>
            <textarea v-model="message" placeholder="Comente!"></textarea>
          </div>
          <ul>
            <li v-for="item in comments" :key="item.id">            
            <nav>
              <img src="https://a.disquscdn.com/1596763802/images/noavatar92.png" alt="user" />
              <h3>{{item.name}}</h3>
            </nav>
            <p>{{item.content}}</p>
            </li>
          </ul>
        </div>
      `
    })
  })
})

