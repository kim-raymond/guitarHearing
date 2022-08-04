
                var txt1 = document.getElementById('ans');
                var btn1 = document.getElementById('btn');
                var btn2 = document.getElementById('btn2');
                var btn3 = document.getElementById('btn3');
                var out1 = document.getElementById('p');
                const audio = document.getElementById('sound');
        
                var chords = {
                    A:1,
                    Asharp:2,
                    B:3,
                    C:4,
                    Csharp:5,
                    D:6,
                    Dsharp:7,
                    E:8,
                    F:9,
                    G:10
                }; 
        
                document.getElementById('getStarted').onclick = function (){
                    document.getElementById('main').style.display ="flex";
                    document.getElementById('home').style.display="none";
                }
                var correct = 0;
                var wrong = 0;
                var n = 0;
                function next(){
                    n = Math.ceil(Math.random()*10);
                    audio.src = "sounds/" + n + ".mp3";
                    out1.innerHTML = " ";
                    //out1.innerHTML = n;
                    //document.write(n);
                }
        
                btn2.addEventListener('click',next);
        
                function check(){
                    var x = txt1.value
                    var d = chords[x];
                    
                    btn2.value="Next";

                     if(d==n){
                        out1.innerHTML = "Yehey! " +x +" is correct";
                        correct+=1;
                     }
                     else if( x ==""){
                         alert("YOU HAVEN'T TYPE ANYTHING");
                     }
                     else{
                        out1.innerHTML = "Sorry "+ x +" is wrong";
                        wrong+=1;
                     }
                }
        
                btn1.addEventListener('click',check);
        
                function seeScore(){
                    alert("Your score is" + correct+"/"+ wrong);
                }
        
                btn3.addEventListener('click',seeScore);
                