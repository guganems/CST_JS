function latex (str){
    return {"cooked": str[0], "raw": str.raw[0]};
}

console.log(latex`\unicode`);