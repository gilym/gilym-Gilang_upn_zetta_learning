/***JS Day 2
 * Update From JsDay1
 * 
 */

function price (book,discount,tax,stock,purchased,kredit){
    let result=0;
    let harga,disc,totaldisc,taxes,totaltax
//purchs =2, stock =1;
    for(let i=0 ; i<purchased ; i++){
       
        if(book && book.price &&( i<stock)){
         
            const price = book.price;
            const amountdisc= price * (discount/100);
            const pricedisc = price - amountdisc;
            const amounttax = pricedisc * (tax/100);
            const pricetax = pricedisc - amounttax;
            result+=pricetax;
            

           harga =price;
           disc=amountdisc;
           totaldisc=pricedisc;
           taxes=amounttax;
           totaltax=pricetax;
         
    
        }
        else{
            console.log("Stok Habis");
            break;
        }
       
      
                                                              
     
    }

    console.group();
    console.log('Title                  :' ,book.title);
    console.log('Original Price         :' ,harga);
    console.log('Discount Amount        :' ,disc);
    console.log('Price After Discount   :' ,totaldisc);
    console.log('Tax Amount             :' ,taxes);
    console.log('Price After Tax        :' ,totaltax);
    console.log('Total Order            :' ,purchased);
    console.log('Total                  :' ,result);
    console.groupEnd();

    return result;
    
}
price({title : 'Aku dan Dia ' , price:10000 ,printing_status :true} ,50,10,20,10);
price({title : 'Dibawah Bulan ' , price:50000 ,printing_status :true} ,20,5,50,3);

