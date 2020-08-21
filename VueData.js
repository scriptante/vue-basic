const sponsors = [
  {
    name: 'meiobit',
    img_url: 'http://www.w3.org/2000/svg'
  }
]

fetch('http://localhost:3333/posts').then(response => {
  response.json().then(data => {
    new Vue({
      el: '#app',
      data: {
        posts: data,
        sponsors: [
          {
            id: 1,
            name: 'meiobit',
            img_url: 'http://www.w3.org/2000/svg'
          },
          {
            id: 2,
            name: 'meiobit',
            img_url: 'http://www.w3.org/2000/svg'
          }
        ],
      },
      methods: {
        getComments: function (postId) {
          fetch(`http://localhost:3333/comments?post_id=${postId}`).then(response => {
            response.json().then(data => {
              console.log(data);
              return data;
            })
          })
        },        
      }     
    });
  })
})