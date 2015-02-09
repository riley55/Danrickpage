function divide(x, y)
{
    if (y === 0)  {
        return "Cannot divide by zero!";
    }
    return x / y;
}

function multiply(x, y)
{
    return x * y;
}

function add(x, y)
{
    return x + y;
}

function power(x, y)
{
    return Math.pow(x, y);
}

function square_root(x, y)
{
    return Math.sqrt(x);
}

function logBase10(x)
{
    return Math.log(x) / Math.log(10);
}

function generateRandomNumber()
{
    return Math.random(0,999);
}

