
document.getElementById("login").onclick = function () {
    document.getElementById("login1").style.display = 'block';
    document.getElementById("top-1").style.opacity=1;
    document.getElementById("top-2").style.opacity=0;
    document.getElementById("login2").style.display = 'none';
    document.getElementById("content").style.display = 'none';
}
document.getElementById("click").onclick = function () {
    document.getElementById("login1").style.display = 'none';
    document.getElementById("top-1").style.opacity=0;
}

document.getElementById("register").onclick = function () {
    document.getElementById("login2").style.display = 'block';
    document.getElementById("top-2").style.opacity=1;
    document.getElementById("top-1").style.opacity=0;
    document.getElementById("login1").style.display = 'none';
    document.getElementById("content").style.display = 'none';
}

document.getElementById("click2").onclick = function () {
    document.getElementById("login2").style.display = 'none';
    document.getElementById("top-2").style.opacity=0;
}

document.getElementById("btn1").onclick = function () {
    document.getElementById("content").style.display = 'block';
    document.getElementById("home").style.opacity = 1;
    document.getElementById("top-2").style.opacity=0;
    document.getElementById("top-1").style.opacity=0;
    document.getElementById("login2").style.display = 'none';
    document.getElementById("login1").style.display = 'none';

};
document.getElementById("btn2").onclick = function () {
    document.getElementById("content").style.display = 'none';
    document.getElementById("home").style.opacity = 1;
};
document.getElementById("more").onclick = function () {
    document.getElementById("learn").style.display = 'block';
    document.getElementById("col").style.top = '15%'
};
document.getElementById("an").onclick = function () {
    document.getElementById("learn").style.display = 'none';
    document.getElementById("col").style.top = '20%'

};
document.getElementsByClassName("choice").onclick = function(){
    document.getElementsByClassName("room1").style.opacity = 1
};
window.onscroll = function()  {

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        var header = document.getElementById("home");
        header.style.zIndex=0;
        var nav = document.getElementById("col");
        nav.style.opacity = 1
        nav.style.left = '45%';
        nav.style.transition = 'all 0.7s';
        var nav1 = document.getElementById("anh");
        nav1.style.opacity= 1;
        nav1.style.width = '50%';
        nav1.style.transition = 'all 0.7s';
    }
    
   
};  
var index=1;
    changImage = function () {
         var imgs = ["image/2.jpg" ,"image/1.jpg", "image/3.jpg", "image/4.jpg"];
         document.getElementById("anh").src = imgs[index];
         document.getElementById("anh").style.height = '506px';
         index++;
         if(index==4){
             index=0;
         }
         
   };
var Index =1 ;  
    changcontent= function () {
    var imgs = ["image/content3.jpg" ,"image/content1.jpg","image/content2.jpg","image/content4.jpg"
                  ,"image/content5.jpg","image/content6.jpg"  
                ];
    document.getElementById("img").src = imgs[Index];
    document.getElementById("img").style.height = '700px';
    Index++;
    if(Index==6){
        Index=0;
    }
}
    setInterval(changcontent,1500);

var r3=1;
var r1=1;
var r2=1;
document.getElementById("right1").onclick = function () {
    var rows3=["image/food3.jpg","image/food6.jpg","image/food9.jpg","image/food12.jpg","image/food15.jpg"];
            document.getElementById("img3").src = rows3[r3];
            r3++;
            if(r3==2)
            {
                document.getElementById("left1").style.opacity=1;
            }
            if(r3==5){
                r3=0;
                document.getElementById("left1").style.opacity=0;
            }
    var rows1=["image/food2.jpg","image/food4.jpg","image/food7.jpg","image/food10.jpg","image/food13.jpg" ];
            document.getElementById("img1").src = rows1[r1];
            r1++; 
            if(r1==2)
            {
                document.getElementById("left1").style.opacity=1;
            }
            if(r1==5){
                r1=0;
                document.getElementById("left1").style.opacity=0;
               }         
    var rows2=["image/food1.jpg","image/food5.jpg","image/food8.jpg","image/food11.jpg","image/food14.jpg" ];
            document.getElementById("img2").src = rows2[r2];
                r2++;
                if(r2==2)
                {
                document.getElementById("left1").style.opacity=1;
                } 
                if(r2==5){
                    r2=0;
                    document.getElementById("left1").style.opacity=0;
                }


            // left 
    document.getElementById("left1").onclick = function () {
        if(document.getElementById("left1").onclick){
            r2--;
            document.getElementById("img2").src = rows2[r2-1];
           if(r2==0)
           {
            document.getElementById("left1").style.opacity=0;
           }
        }
        if(document.getElementById("left1").onclick){
            r3--;
            document.getElementById("img3").src = rows3[r3-1];
            if(r3==0)
           {
            document.getElementById("left1").style.opacity=0;
           }
        }
        if(document.getElementById("left1").onclick){
            r1--;
            document.getElementById("img1").src = rows1[r1-1];
            if(r1==0)
           {
            document.getElementById("left1").style.opacity=0;
           }
        }
    }
};

document.getElementById("img1").onclick=function(){
    document.getElementById("img2").style.opacity=0;
    document.getElementById("img1").style.opacity=1;
    document.getElementById("img3").style.opacity=0;



    document.getElementById("img1").style.borderRadius='50%';
    document.getElementById("img1").style.width='170px';
    document.getElementById("img1").style.height='170px';
    document.getElementById("img1").style.marginLeft='90px';
    document.getElementById("img2").style.pointerEvents='none';
    document.getElementById("img3").style.pointerEvents='none';

    document.getElementById("food").style.display='block';
    document.getElementById("food").onclick=function(){
        document.getElementById("food").style.display='none';
        document.getElementById("img2").style.opacity=1;
        document.getElementById("img3").style.opacity=1;
        document.getElementById("img1").style.width='250px';
        document.getElementById("img1").style.height='250px';
        document.getElementById("img1").style.marginLeft='0px';
        document.getElementById("img1").style.borderRadius='0%';
        document.getElementById("img2").style.pointerEvents='all';
        document.getElementById("img3").style.pointerEvents='all';
    }
}



document.getElementById("img2").onclick=function(){
    document.getElementById("img1").style.opacity=0;
    document.getElementById("img3").style.opacity=0;

    document.getElementById("img2").style.borderRadius='50%';
    document.getElementById("img2").style.width='170px';
    document.getElementById("img2").style.height='170px';
    document.getElementById("img2").style.marginLeft='-170px';
    document.getElementById("img1").style.pointerEvents='none';
    document.getElementById("img3").style.pointerEvents='none';
    
    document.getElementById("food").style.display='block';

    document.getElementById("food").onclick=function(){
        document.getElementById("food").style.display='none';
        document.getElementById("img1").style.opacity=1;
        document.getElementById("img3").style.opacity=1;
        document.getElementById("img2").style.width='250px';
        document.getElementById("img2").style.height='250px';
        document.getElementById("img2").style.marginLeft='0px';
        document.getElementById("img2").style.borderRadius='0%';
        // document.getElementById("img2").style.overflow='hidden';
        document.getElementById("img1").style.pointerEvents='all';
        document.getElementById("img3").style.pointerEvents='all';
    }
}



document.getElementById("img3").onclick=function(){
    document.getElementById("img1").style.opacity=0;
    document.getElementById("img2").style.opacity=0;



    document.getElementById("img3").style.borderRadius='50%';
    document.getElementById("img3").style.width='170px';
    document.getElementById("img3").style.height='170px';
    document.getElementById("img3").style.marginLeft='-140px';
    document.getElementById("img1").style.pointerEvents='none';
    document.getElementById("img2").style.pointerEvents='none';
    
    document.getElementById("food").style.display='block';
    document.getElementById("food").onclick=function(){
        document.getElementById("food").style.display='none';
        document.getElementById("img1").style.opacity=1;
        document.getElementById("img2").style.opacity=1;
        document.getElementById("img3").style.width='250px';
        document.getElementById("img3").style.height='250px';
        document.getElementById("img3").style.marginLeft='0px';
        document.getElementById("img3").style.borderRadius='0%';
        document.getElementById("img1").style.pointerEvents='all';
        document.getElementById("img2").style.pointerEvents='all';
    }
}

document.getElementById("spa2").onclick= function(){
    var spa5=document.getElementById("spa5");
    var spa6=document.getElementById("spa6");
    var h5 =document.getElementById("h5");
    var h6 =document.getElementById("h6");
    var h7 =document.getElementById("h7");
    var h8 =document.getElementById("h8");
    spa5.style.display='block';
    spa6.style.display='block'; 
    spa6.style.cursor='pointer';
    spa5.style.cursor='pointer';
    h5.style.display='block';
    h6.style.display='block'; 
    h7.style.display='block';
    h8.style.display='block'; 
}


document.getElementById("adult").onclick = function(){
    document.getElementById("adult1").style.display='block';
    document.getElementById("children1").style.display='none';
    document.getElementById("times").style.opacity=1;
    document.getElementById("up1").style.opacity=1;
    document.getElementById("up2").style.opacity=0;
    document.getElementById("chtimes").style.opacity=0;
}
document.getElementById("times").onclick = function(){
    document.getElementById("adult1").style.display='none';
    document.getElementById("times").style.opacity=0;
    document.getElementById("up1").style.opacity=0;
}
var i=0;
 document.getElementById("button2").onclick=function(){
     if(i>0){
        document.getElementById("button1").style.pointerEvents='all';
        }

    else
        {
         document.getElementById("button1").style.pointerEvents='none';
        }
    var setnumber= document.getElementById("number").nodeValue=++i;
   document.getElementById("number").setAttribute("value",setnumber);
   document.getElementById("adult").setAttribute("placeholder",setnumber);
   if(i==10){
      document.getElementById("button2").style.pointerEvents='none'
   }
  }
  document.getElementById("button1").onclick=function(){
    
    var setnumber1= document.getElementById("number").nodeValue=--i;
     document.getElementById("number").setAttribute("value",setnumber1);
     document.getElementById("adult").setAttribute("placeholder",setnumber1);
     
     if(i==0)
     {
      document.getElementById("button1").style.pointerEvents='none';
     }
   }

   document.getElementById("children").onclick = function(){
    document.getElementById("children1").style.display='block';
    document.getElementById("adult1").style.display='none';
    document.getElementById("chtimes").style.opacity=1;
    document.getElementById("up2").style.opacity=1;
    document.getElementById("times").style.opacity=0;
    document.getElementById("up1").style.opacity=0;
}

    document.getElementById("chtimes").onclick = function(){
    document.getElementById("children1").style.display='none';
    document.getElementById("chtimes").style.opacity=0;
    document.getElementById("up2").style.opacity=0;
}

var j=0;
 document.getElementById("chbutton2").onclick=function(){
     if(j>0){
        document.getElementById("chbutton1").style.pointerEvents='all';
        }
    else
        {
         document.getElementById("chbutton1").style.pointerEvents='none';
        }
    var setnumberch= document.getElementById("chnumber").nodeValue=++j;
   document.getElementById("chnumber").setAttribute("value",setnumberch);
   document.getElementById("children").setAttribute("placeholder",setnumberch);
   if(j==10){
      document.getElementById("chbutton2").style.pointerEvents='none'
   }
  }
  document.getElementById("chbutton1").onclick=function(){
    
    var setnumberch1= document.getElementById("chnumber").nodeValue=--j;
     document.getElementById("chnumber").setAttribute("value",setnumberch1);
     document.getElementById("children").setAttribute("placeholder",setnumberch1);
     
     if(j==0)
     {
      document.getElementById("chbutton1").style.pointerEvents='none';
     }
   }


   var h2 =0 ;  
    changcontenth2= function () {
     
    var h2s=["I","n ","o","u","r ","h","o","t","e","l ","y","o","u ","w","i","l","l ",
            "f","i","n","d ","o","u","r ","e","v","e","r","y ","t","h","i","n","g ","y","o","u ",
            "n","e","e","d ","t","o ","e","n","j","o","y ","y","o","u","r ","v","a","c","a","t",
            "i","o","n"]
    document.getElementById("h2").innerHTML += h2s[h2]
    h2++;
    if(h2==61){
      h2=0;
      document.getElementById("h2").innerHTML =" ";
      
    }
}
    setInterval(changcontenth2,150);

document.getElementById("c2").onclick=function(){
        document.getElementById("fit21").style.display='none';
        document.getElementById("fit21_1").style.display='block';
        document.getElementById("fit21_2").style.display='none';
    }
document.getElementById("c3").onclick=function(){
        document.getElementById("fit21").style.display='none';
        document.getElementById("fit21_1").style.display='none';
        document.getElementById("fit21_2").style.display='block';
    }
document.getElementById("c1.1").onclick=function(){
        document.getElementById("fit21").style.display='block';
        document.getElementById("fit21_1").style.display='none';
        document.getElementById("fit21_2").style.display='none';
    } 
document.getElementById("c3.1").onclick=function(){
        document.getElementById("fit21").style.display='none';
        document.getElementById("fit21_1").style.display='none';
        document.getElementById("fit21_2").style.display='block';
    }   
document.getElementById("c3.2").onclick=function(){
        document.getElementById("fit21").style.display='none';
        document.getElementById("fit21_1").style.display='none';
        document.getElementById("fit21_2").style.display='block ';
    } 
document.getElementById("c2.2").onclick=function(){
        document.getElementById("fit21").style.display='none';
        document.getElementById("fit21_1").style.display='block';
        document.getElementById("fit21_2").style.display='none ';
    }         
document.getElementById("c1.2").onclick=function(){
        document.getElementById("fit21").style.display='block';
        document.getElementById("fit21_1").style.display='none';
        document.getElementById("fit21_2").style.display='none ';
    } 
var p=0

fitp=function(){
    var ps=["R","e","a","d","y ","t","o ","c","h","a","n","g","e ","y",
              "o","u","r ","p","h","y","s","i","q","u","e",", ","b","u","t ",
              "c","a","n","'","t ","w","o","r","k ","o","u","t ","i","n ","t","h","e ",
              "g","y","m","?"  
            ]
    document.getElementById("p").innerHTML+=ps[p];
    p++;
    if(p==51)
    {
        p=0;
        document.getElementById("p").innerHTML=""
    }        
}
setInterval(fitp,150);




var b=0;
changefit= function(){
    var bs=["I ","d","o","n","'","t ","s","t","o","p","<br/>","w","h","e","n","<br/>","i","'","m ",
            "t","i","r","e","d","<br/>","I ","s","t","o","p","<br/>","w","h","e","n","<br/>","i ",
            "d","o","n","e","<br/>"
        ]
    document.getElementById("fit1").innerHTML+=bs[b];   
    b++;
    if(b>=26 && b<43){
      
        document.getElementById("fit1").style.color='orangered'
    }
    if(b==43){
        b=0;
        document.getElementById("fit1").innerHTML=" "; 
        document.getElementById("fit1").style.color='#fff'
    } 
}
setInterval(changefit,200);

document.getElementById("checkin").onclick=function(){
    document.getElementById("rowdate").style.display="block"
    document.getElementById("rowadult").style.display="none"
}