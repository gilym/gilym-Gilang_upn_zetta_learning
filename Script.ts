type combine =(number | string)[];

function ts (text1 :combine): string{
    let result: string= '';
    text1.map((text, index)=>{
        result += (index ? ' ' : '')+text;
    })

    return result;

    
}

const tes =[1 ,'data' ,3, 'result']
console.log(ts(tes))