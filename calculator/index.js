const display2 = document.getElementById('display');

function insert(value)
{
    display2.value = display2.value + value;
}

function remove_last()
{
    display2.value = display2.value.slice(0,-1);
}

function all_clear()
{
    display2.value ="";
}

function calculation()
{
   try{
        display2.value = eval(display2.value);
   }
   catch{
       display2.value = 'Error';
   }
}