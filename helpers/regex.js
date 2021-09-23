const regexEmailA = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
const regexEmailB = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;                
const regexName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

module.exports = {
    regexEmailA, regexEmailB, regexName
}