// ========= 1 =====
function firstIndex(value) {
    return value[0];
};
let result1 = firstIndex([1,80,2,3]);
console.log(result1);


// ============ 2 =====
function lastIndex(value) {
    let a = value.pop();
    return a;
};
let result2 = lastIndex([10,20,30]);
console.log(result2);


// ============= 3=======
function trueOrFalse(isEmpty) {
    if(isEmpty == ""){
        return true
    }else if(isEmpty != ""){
        return false
    }

};
let result3 = trueOrFalse("");
console.log(result3);


// ============= 4=======
function remainder(a,b) {
    return a%b;
};
let result4 = remainder(17,5);
console.log(result4);


// ============== 5=======
function searchIndex(value,x) {
    return value.indexOf(x);

};
let result5 = searchIndex([1,2,3],2);
console.log(result5);


// ========== 6 =======
function calAge(a) {
    return a * 365;
};
let result6 = calAge(20);
console.log(result6);


// =============== 7 ===========
function smallerNumber(value) {

    let small = value[0];
    for(let i=0; i<=value.length; i++){
        if(small > value[i]){
            small = value[i]
        };
    };
    return(small);

};
let result7 = smallerNumber([10,5,-345,-1]);
console.log(result7);


// =============== 8 ===========
function negativerNumber(value) {
    return value - (value * 2);
    // 5-10
};
let result8 = negativerNumber(15);
console.log(result8);
