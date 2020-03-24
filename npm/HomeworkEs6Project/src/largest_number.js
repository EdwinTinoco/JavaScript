export const largerNum = (num1, num2) => {
    if (num1 > num2){
        return num1 + " is the largest number"
    }else if (num2 > num1){
        return num2 + " is the largest number" 
    } else {
        return "The numbers are equal"       
    }
}