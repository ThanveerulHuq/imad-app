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
$.ajax({
url:'/create-user',
data:"{'username':'thanveer','password':'password'}",
type:'POST',
success:function(data){
   console.log('success');
}
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