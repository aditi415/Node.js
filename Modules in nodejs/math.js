/*function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

module.exorts={                                     //multi exports
    addFn: add,       
    subFn: sub,
}
*/
exports.add = (a,b) => a+b;   //anoimous function

exports.sub = (a,b) => a-b;

//module.exports =add;
// module.exports ={add,sub};
//module.exports ="Aditi";
