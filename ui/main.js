console.log('Loaded!');
var button=document.getElementById('counter');
button.onclick= function(){
    var request=new XMLHttpRequest();
    request.open('GET','http://thanveersiddiq.imad.hasura-app.io/counter',true);
    request.send(null);
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                var counter =request.responseText;
                var span= document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
};





/*$.ajax({
url:'/create-user',
contentType: "application/json",
data:'{"username":"thanveerul_huq","password":"password"}',
type:'POST',
success:function(data){
   console.log('success');
}
});*/


$('#login').click(function(){
    var username=$('#username').val();
    var password=$('#password').val();
    $.ajax({
url:'/login',
contentType: "application/json",
data:JSON.stringify({username:username,password:password}),
type:'POST',
success:function(data){
   alert('credentials are right');
},
fail:function(data){
   alert(data);
},

});
    
    
});




$('#submit_btn').click(function(){
    var name=$('#name').val();
console.log(name);
$.ajax({
url:'/getnames?name='+name,
success:function(data){
   var names= JSON.parse(data);
   var list='';
   for(var i=0;i<names.length; i++){
       list+='<li>'+names[i]+'</li>';
   }
   $('ul').html(list);
}
});

});