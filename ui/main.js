console.log('Loaded!');
var button=document.getElemenById('counter');
button.onclick= function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readuState===XMLHttpRequest.DONE){
            if(request.status===200){
                var counter =request.responseText;
                var span= document.getElemenById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','http://thanveersiddiq.imad.hasura-app.io/counter',true);
    request.send(null);
};