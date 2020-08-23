fetch('http://localhost:3333/sponsors').then(response => {
  response.json().then(data => {
    console.log(data)
    Vue.component('Sponsors', {
      props: ['sponsor'],
      data: function() {
        return {
          sponsors: data
        }
      },      
      template: `
      <div class="sponsorsContainer">
        <h2>Patrocinadores</h2>
        <ul class="sponsors">          
          <li v-for="sponsor in sponsors" :key="sponsor.id">
            <a v-bind:href="sponsor.link" target="_blank" rel="noopener noreferrer">            
            <nav>
              <img v-bind:src="sponsor.img_url" alt="logo" />
              <h3>{{sponsor.name}}</h3>
            </nav>
            </a>
          </li>
        </ul>
      </div>        
      `
    })
    
  })
})

