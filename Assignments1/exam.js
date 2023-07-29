// =================TASK ONE =================
// total ammount 
// total discount
// total price with discout
function purchaseDiscount (value) {
    if(50 > value) {
        return "you don't get the discount.";
    }
    else if(50 <= value && 100 >= value ){
        let discount = value - (value * 5 ) / (100);
        return `you get the discount 5%.\ntotal ammout ${value}.\nafter then discount your total ammout ${discount}.`;
    }
    else if(100 <= value && 200 >= value ){
        let discount = value - (value * 10 ) / (100);
        return `you get the discount 10%.\ntotal ammout ${value}.\nafter then discount your total ammout ${discount}.`;
        
    }
    else if(200 <= value){
        let discount = value - (value * 15 ) / (100);
        return `you get the discount 15%.\ntotal ammout ${value}.\nafter then discount your ammout ${discount}.`;
        
    };

};
let result1= purchaseDiscount(250);
console.log(result1);


// =================TASK two =================
function evenNumber(value) {
    return value.filter((item)=> item%2 == 0);
};
let result2 = evenNumber([12, 34, 45, 23, 6, 78, 54, 90]);
console.log(result2);


// =================TASK three =================
function main (input) {
    if(input == 0){
        console.log(" Input 0 are not accepted number ");
    }else{

        for (let i = 1; i <= 10; i++) {
            console.log(input + " * " + i + " = " + input*i)

        }
    }
}
main(5)


// =================TASK four =================
const grade = 59;

switch (true) {
    case grade > 100:
		console.log("Invalid number range 1 to 100");
		break;
	case grade >= 90:
		console.log("A");
		break;
	case grade >= 80 && grade <= 89:
		console.log("B");
		break;
	case grade >= 70 && grade <= 79:
		console.log("C");
		break;
	case grade >= 60 && grade <= 69:
		console.log("D");
		break;
	case grade < 60:
		console.log("F");
		break;
	
}