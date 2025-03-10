// In this kata, you will make a function that converts between camelCase, snake_case, and kebab-case.

// You must write a function that changes to a given case. It must be able to handle all three case types:

// js> changeCase("snakeCase", "snake")
// "snake_case"
// js> changeCase("some-lisp-name", "camel")
// "someLispName"
// js> changeCase("map_to_all", "kebab")
// "map-to-all"
// js> changeCase("doHTMLRequest", "kebab")
// "do-h-t-m-l-request"
// js> changeCase("invalid-inPut_bad", "kebab")
// undefined
// js> changeCase("valid-input", "huh???")
// undefined
// js> changeCase("", "camel")
// ""
// Your function must deal with invalid input as shown, though it will only be passed strings. Furthermore, all valid identifiers will be lowercase except when necessary, in other words on word boundaries in camelCase.

// My Solution

function changeCase(identifier, targetCase){
    if(identifier.length==0) return '';
    let camel_regex = /[A-Z]/;
    let snake_regex = /[_]/;
    let kebab_regex = /[-]/;
    if((camel_regex.test(identifier) && snake_regex.test(identifier)) || (camel_regex.test(identifier) && kebab_regex.test(identifier)) || (snake_regex.test(identifier) && kebab_regex.test(identifier)) )return undefined;
    switch (targetCase){
        case 'camel':
            if(snake_regex.test(identifier)){
                return identifier.split('_').map((e,i,ar)=>{if(i==0){return e}else{return e[0].toUpperCase()+e.slice(1)}}).join('');
            }else if(kebab_regex.test(identifier)){
                return identifier.split('-').map((e,i,ar)=>{if(i==0){return e}else{return e[0].toUpperCase()+e.slice(1)}}).join('');
            }else{
                return identifier;
            };
        case 'snake': 
            if(kebab_regex.test(identifier)){
                return identifier.split('-').join('_');
            }else if(camel_regex.test(identifier)){
                return identifier.split('').map((e,i,ar)=>{if(e.toUpperCase()===e){return `_${e.toLowerCase()}`}else{return e}}).join('');
            }else{
                return identifier;
            };
        case 'kebab':
            if(snake_regex.test(identifier)){
                return identifier.split('_').join('-');
            }else if(camel_regex.test(identifier)){
                return identifier.split('').map((e,i,ar)=>{if(e.toUpperCase()===e){return `-${e.toLowerCase()}`}else{return e}}).join('');
            }else{
                return identifier;
            };
        default :
        return undefined;
    };
};

// Solutiom
function changeCase(s, t){
    if (/[A-Z]/.test(s)&&(/_/.test(s)||/-/.test(s))||(/_/.test(s)&&/-/.test(s))) return;
    if (t=="camel") return s.replace(/[_-](.)/g,m=>m.slice(-1).toUpperCase());
    if (t=="snake") return s.replace(/[A-Z]|-./g,m=>'_'+m.slice(-1).toLowerCase());
    if (t=="kebab") return s.replace(/[A-Z]|_./g,m=>'-'+m.slice(-1).toLowerCase());  
}