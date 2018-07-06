window.onload = function(){
  var example1 = new Vue({
    el: '#friend',
    data: {
      items: [
        { name: 'Luda' , email : "Luda1@naver.com", img:"img/1.jpg"},
        { name: 'luda' , email : "Luda2@naver.com", img:"img/2.jpg"},
        { name: '루다' , email : "Luda3@naver.com", img:"img/3.jpg"},
        { name: 'Luda' , email : "Luda4@naver.com", img:"img/4.jpg"},
        { name: '루다' , email : "Luda5@naver.com", img:"img/5.jpg"}
      ]
    },
    methods:{
      goChat: function(email){
        var link = '/chat/'+email;
        location.href = link
      }
    }
  })
}
