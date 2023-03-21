function FizzBuzz(num){
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

export default FizzBuzz;