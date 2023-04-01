const user={
    name: 'Ivan',
    surname: 'Ivanov',
    age: '25'
};
 
function userIvanov(str, obj){
    for(let key in obj){
        if(key===str){
            return true
        }
        return false
    }
};

console.log(userIvanov('surname', 'age'))