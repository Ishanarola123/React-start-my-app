function add(a,b){
    return a+b;
}

function sub(a,b){
    if(a>b) {return a-b}
    else{
        return b-a;
    }
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    let div=a/b;
    return div.toPrecision(2);
}

export default add;
export {sub,mul,div};