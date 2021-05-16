/*var mybtn=document.getElementById("mybtn");
mybtn.addEventListener("mousemove",function(){



mybtn.style.backgroundColor="#17a2b8";
mybtn.style.color="white";
console.log(mybtn);

})*/

var x=``;
var y=``;
var z=``;
var m=``;
var input1=document.getElementById("input1");
var input2=document.getElementById("input2");
var regex1=/^[a-zA-Z]+@[a-z]{3,5}\.[a-z]{2,3}$ /
var regex2=/[@ # $ & *]+[a-zA-Z0-9]{8} / 
var regex3=/^[a-zA-Z]{3,5} /

var reg1=document.getElementById("register_input_1")
var reg2=document.getElementById("register_input_2")
var reg3=document.getElementById("register_input_3")

var account={username: reg1,email:reg2,password:reg3};
var accounts=[];




function login()
{

   
    
    if(input1.value=="" || input2.value=="")
    {
        z += `<p  class=" text-danger my-3 pb-3 mb-3" >All inputs is required</p>`;

        document.getElementById("alert").innerHTML= z;
        z=``

    }
    else
    {
        z=``
        document.getElementById("alert").innerHTML= z;
        

    }
    if(regex1.test(input1.value)==false && input1.value!="")
    {

        x+=`<p  class=" text-danger my-3 pb-3 mb-3" >invalid email</p>`;
        document.getElementById("alert1").innerHTML= x;
        x=``;

    }
    else
    {
        x=``;
        document.getElementById("alert1").innerHTML= x;
        

    }
    if(regex2.test(input2.value)==false && input2.value!="" )
    {

        y+=`<p  class=" text-danger my-3 pb-3 mb-3" >invalid password</p>`;
        document.getElementById("alert2").innerHTML= y;
        y=``;
    }
    else
    {
        y=``;
        document.getElementById("alert2").innerHTML= y;
        

    }

    accounts=JSON.parse(localStorage.getItem("myaccounts"));
    for(var i=0;i<accounts.length;i++)
    {


        if(accounts[i].email==input1.value && accounts[i].password==input2.value)
        {


        }
        else
        {
            
        }
    }




}
    
function register()
{
    if((reg1.value=="") ||( reg2.value=="") || ( reg3.value==""))
    {
        z += `<p  class=" text-danger my-3 pb-3 mb-3" >All inputs is required</p>`;

        document.getElementById("invalid4").innerHTML= z;
        z=``

    }
    else
    {
        z=``
        document.getElementById("invalid4").innerHTML= z;
        

    }
    if(regex3.test(reg1.value)==false && reg1.value!="")
    {

        x+=`<p  class=" text-danger my-3 pb-3 mb-3" >invalid username</p>`;
        document.getElementById("invalid1").innerHTML= x;
        x=``;

    }
    else
    {
        x=``;
        document.getElementById("invalid1").innerHTML= x;
        

    }
    if(regex1.test(reg2.value)==false && reg2.value!="" )
    {

        y+=`<p  class=" text-danger my-3 pb-3 mb-3" >invalid email</p>`;
        document.getElementById("invalid2").innerHTML= y;
        y=``;
    }
    else
    {
        y=``;
        document.getElementById("invalid2").innerHTML= y;
        

    }
    if(regex2.test(reg3.value)==false && reg3.value!="" )
    {

        m+=`<p  class=" text-danger my-3 pb-3 mb-3" >invalid password</p>`;
        document.getElementById("invalid3").innerHTML= m;
        m=``;
    }
    else
    {
        m=``;
        document.getElementById("invalid3").innerHTML= m;
        

    }

    for(var i=0;i<accounts.length;i++)
    {
        if(reg1.value==accounts[i].username || reg2.value==accounts[i].email || reg3.value==accounts[i].password)
        {
            alert(" the account already exist ")
        }
        else
        {
            account={username: reg1.value,email:reg2.value,password:reg3.value};
    accounts.push(account);
    localStorage.setItem("myaccounts",JSON.stringify(accounts));


        }




    }
    
}



