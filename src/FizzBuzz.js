function FizzBuzz(num){
    if(num%3==0 && num%5==0)
    {
        return "FizzBuzz";
    }
    if(num==3 || num%3==0)
    {
        return "Fizz";
    }
    if(num==5 || num%5==0)
    {
        return "Buzz";
    }
    return num;
};

function VerificarFizzBuzz(num){
    let Resp = "";
    for (let i = 1; i < num + 1; i++) 
    {
        Resp += FizzBuzz(i);
        if (i < num) 
        {
            Resp += ", ";
        }
    }   
    return Resp;
}

export {VerificarFizzBuzz, FizzBuzz};