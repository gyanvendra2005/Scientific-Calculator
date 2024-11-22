let screen=document.querySelector('#screen');
let btn=document.querySelectorAll('.btn');

/*============ For getting the value of btn, Here we use for loop ============*/
for(item of btn)
{
    item.addEventListener('click',(e)=>{
        btntext=e.target.innerText;

        if(btntext =='×')
        {
            btntext= '*';
        }

        if(btntext=='÷')
        {
            btntext='/';
        }
        screen.value+=btntext;
    });
}

function sin()
{
    screen.value=Math.sin(screen.value);
}

function cos()
{
    screen.value=Math.cos(screen.value);
}

function tan()
{
    screen.value=Math.tan(screen.value);
}

function sqrt()
{
    screen.value=Math.sqrt(screen.value,2);
}

function log()
{
    screen.value=Math.log(screen.value);
}

function pi()
{
    screen.value= 3.14159265359;
}

function e()
{
    screen.value=2.71828182846;
}


// FUNCTION TO FIND POWER
function calculatePower() {
    let input = document.getElementById("screen").value;
    let parts = input.split("^");
    if (parts.length === 2) {
        let base = parseFloat(parts[0]);
        let exponent = parseFloat(parts[1]);
        if (base&&exponent) {
            let result = Math.pow(base, exponent);
            document.getElementById("screen").value = result;
        } else {
            document.getElementById("result").value = 'Error';
        }
    } else {
        document.getElementById("result").value = 'Error';
    }
}


// FUNCTION TO CHANGE THE SIGN OF NUMBER
function signChange() {
    if (screen.value > 0) {
        screen.value = -screen.value; 
    } else if (screen.value < 0) {
        screen.value = Math.abs(screen.value); 
    }
}


// FUNTION TO FIND THE INVERSE OF A NUMBER
function inverse() {
    screen.value = 1/screen.value
}


// FUNCTION TO FIND FACTORIAL
function fact()
{
    var i, num, f;
    f=1
    num=screen.value;
    for(i=1; i<=num; i++)
    {
        f=f*i;
    }

    i=i-1;

    screen.value=f;
}

function backspc()
{
    screen.value=screen.value.substr(0,screen.value.length-1);
}


// Function to calculate the logarithm of a number with a custom base
function logBase() {
    let input = screen.value;  // Get the current screen input
    let parts = input.split(".");  // Split input in case user entered "log(x, base)"
    
    if (parts.length === 2) {
        let x = parseFloat(parts[0]);  // Number to take the log of
        let base = parseFloat(parts[1]);  // The base for the log

        if (x > 0 && base > 0 && base !== 1) {
            // Calculate the logarithm using the change of base formula
            let result = Math.log(x) / Math.log(base);  // log_b(x) = ln(x) / ln(b)
            screen.value = result;
        } else {
            screen.value = 'Invalid Input';
        }
    } else {
        screen.value = 'Invalid Input';
    }
}

// Function to find  mod
function mod(){
   screen.value = Math.abs(screen.value); 
}