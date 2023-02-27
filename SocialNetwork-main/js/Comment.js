class Comment{
    post_id = ''
    user_id = ''
    content = ''
    api_url = 'https://637bd9e86f4024eac2199bae.mockapi.io'
/*
   create(){
  
   
        let data = {
            post_id: this.post_id,
            user_id: this.user_id,
            content: this.content
        };

        data = JSON.stringify(data);

         fetch(this.api_url + '/comments', {
            method: 'POST',
            headers:{
                'Content-Type' : 'appliciton/json',
            },
            body : data
        })
       .then ( response => response.json(data))
        .then (data => {alert('Postavljen komentar')})
    }*/
    async create(){
        let session = new Session()
        session_id = session.getSession();

        let data = {
            post_id:this.post_id,
            user_id: session_id,
            content: this.content,
            
        }
        data = JSON.stringify(data);
       let response = await fetch(this.api_url + '/comments', {
        method : 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:data
       })
       data = await response.json(data)
       .then(data=>{alert('Postavljen komentar')}) 
       return data
     ;
    }

  async  get(post_id){

    const response = await fetch (this.api_url + '/comments')
    const data = await response.json()
    let post_comments = []

    let i = 0 
    data.forEach (item =>{
        if(item.post_id === post_id){
            post_comments [i]= item
            i++;
        }
    })
    return post_comments
  }
  /*
  async getComUser(user_id){
    
    let response = await fetch(this.api_url + '/comments')
    let data = await response.json()
    comUser = []
    data.forEach(item=> {
        if(item.user_id === user_id){
           comUser = user_id
        }
    })
    return comUser
  }*/

}