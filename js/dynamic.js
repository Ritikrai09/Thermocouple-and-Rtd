var ran1= Math.random()*6000
var ran2= Math.random()*3000
var ran3= Math.random()*1000

var test=[ran1,ran2,ran3];

const resistanceconstance1=[
    {
        alpha:" 0.00392",
      
    },
    {
        alpha:" 0.0038",
       
    },
    {
        alpha:" 0.00672",
        
    },
    {
        alpha:" 0.0041",
    
    }
]

const dynamic1=[];
const dynamic20=[];


function change11(){
    const selecter11=document.getElementById("barematerial").value ;

      if(selecter11==="0"){
       const alphaconstant= document.getElementById("baretimeconstant").innerHTML="Time Constant(τ):" + resistanceconstance1[0].alpha;
       
      } else if(selecter11==="1"){
        const alphaconstant= document.getElementById("baretimeconstant").innerHTML="Time Constant(τ):"   + resistanceconstance1[1].alpha;
         
      } else if(selecter11==="2"){
        const alphaconstant= document.getElementById("baretimeconstant").innerHTML="Time Constant(τ):" + resistanceconstance1[2].alpha;
         
      } else if(selecter11==="3"){
        const alphaconstant= document.getElementById("baretimeconstant").innerHTML="Time Constant(τ):" + resistanceconstance1[3].alpha;
         
      }
    
}

function change12(){
  const selecter12=document.getElementById("withseaththickness").value ;

  if(selecter12=="0"||selecter12=="1"||selecter12=="2"||selecter12=="3"||selecter12==""){
    const alphaconstant= document.getElementById("withseathtimeconstant").innerHTML="Time Constant(τ):" +resistanceconstance1[0].alpha;
    
   }
}

function change13(){
  const selecter13=document.getElementById("thermowellfilling").value ;

  if(selecter13=="0"||selecter13=="1"||selecter13=="2"||selecter13=="3"||selecter13==""){
    const alphaconstant= document.getElementById("thermowelltimeconstant").innerHTML="Time Constant(τ):" +resistanceconstance1[2].alpha;
    
   }
}


   
function response1(){
    const selecter11=document.getElementById("barematerial").value ;
    const r1=resistanceconstance1[selecter11].alpha;
  var q= (2*r1);
    const selecter12=document.getElementById("withseaththickness").value
    const r2=resistanceconstance1[selecter12].alpha;
   var w= (3*r2);
    const selecter13=document.getElementById("thermowellfilling").value
    const r3=resistanceconstance1[selecter13].alpha;
       dynamic1.push(r1,r2,r3);
       dynamic20.push(q,w,r3);
    //const Ratzero=document.getElementById("ratzero").value;
    //const temper=document.getElementById("inputtemp").value;
    //const R=Ratzero*(1+ re*(temper - 0));
    //const roundoffR=R.toFixed(4);
    //document.getElementById("rt").value=roundoffR;
    //var feed={Rt:roundoffR, temp:temper};
        // data.push(feed);

    //var para = document.createElement("h6");
    //var node = document.createTextNode("Temp.= "+ feed.temp+"," );
    // para.appendChild(node);

    //var node = document.createTextNode( " Rt= "+ feed.Rt);
    // para.appendChild(node);

    //var element = document.getElementById("div1");
    // element.appendChild(para);

     
}


// for right exp

const dynamic21=[];
const dynamic22=[];

function change21(){
  const selecter21=document.getElementById("barematerial2").value ;

    if(selecter21=="0"){
     const alphaconstant= document.getElementById("baretimeconstant2").innerHTML="Time Constant(τ):" + resistanceconstance1[0].alpha;
     
    } else if(selecter21==="1"){
      const alphaconstant= document.getElementById("baretimeconstant2").innerHTML="Time Constant(τ):"   + resistanceconstance1[1].alpha;
       
    } else if(selecter21==="2"){
      const alphaconstant= document.getElementById("baretimeconstant2").innerHTML="Time Constant(τ):" + resistanceconstance1[2].alpha;
       
    } else if(selecter21==="3"){
      const alphaconstant= document.getElementById("baretimeconstant2").innerHTML="Time Constant(τ):" + resistanceconstance1[3].alpha;
       
    }
  
}

function change22(){
  const selecter22=document.getElementById("withseaththickness2").value ;

  if(selecter22=="0"||selecter22=="1"||selecter22=="2"||selecter22=="3"||selecter22=="4"){
    const alphaconstant= document.getElementById("withseathtimeconstant2").innerHTML="Time Constant(τ):" + resistanceconstance1[1].alpha;
    
   }
}

function change23(){
  const selecter23=document.getElementById("thermowellfilling2").value ;

  if(selecter23=="0"||selecter23=="1"||selecter23=="2"||selecter23=="3"||selecter23=="4"){
    const alphaconstant= document.getElementById("thermowelltimeconstant2").innerHTML="Time Constant(τ):" + resistanceconstance1[2].alpha;
    
   }
}
   
function response21(){
    const selecter21=document.getElementById("barematerial2").value ;
    const re21=resistanceconstance1[selecter21].alpha;

    const selecter22=document.getElementById("withseaththickness2").value ;
    const re22=resistanceconstance1[selecter22].alpha;

    const selecter23=document.getElementById("thermowellfilling2").value ;
    const re23=resistanceconstance1[selecter23].alpha;

    dynamic22.push(re21,re22,re23);

    /*const Ratzero2=document.getElementById("ratzero2").value;
    const temper2=document.getElementById("inputtemp2").value;
    const R2=Ratzero2*(1+ re*(temper2 - 0));
    const roundoffR2=R2.toFixed(4);
    const mVinput=document.getElementById("rt2").value;
    var feed2={Rt2:mVinput, temp2:temper2};
         data2.push(feed2);

    var para = document.createElement("h6");
    var node = document.createTextNode("Temp.= "+ feed2.temp2+"," );
     para.appendChild(node);

    var node = document.createTextNode( " Value(mV)= "+ feed2.Rt2);
     para.appendChild(node);

    var element = document.getElementById("div2");
     element.appendChild(para);*/

     
}





































function reset(){
    document.getElementById("myForm").reset();
    
     
}








