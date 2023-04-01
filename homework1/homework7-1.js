const user={
    name: 'Ivan',
    surname: 'Ivanov',
    age: '25'
};

function userIvan (obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(`${key}: ${obj[key]}`);
        };
    };
};

userIvan(user);