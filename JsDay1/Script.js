
function price (book,discount,tax){
    let result=0;

    if(book && book.price){
        const price = book.price;
        const amountdisc= price * (discount/100);
        const pricedisc = price - amountdisc;
        const amounttax = pricedisc * (tax/100);
        const pricetax = pricedisc - amounttax;

        console.group();
        console.log('TItle                  :' ,book.title);
        console.log('Original Price         :' ,price);
        console.log('Discount Amount        :' ,amountdisc);
        console.log('Price After Discount   :' ,pricedisc);
        console.log('Tax Amount             :' ,amounttax);
        console.log('Price After Tax        :' ,pricetax);
        console.groupEnd();

        return result;

    }

   
   

   

    

}

price({title : 'Aku dan Dia' , price:10000 ,printing_status :true} ,50,10);



