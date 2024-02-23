function make_sandwich(...items:string[]): void{
    console.log("Sandwich Order:");
    for(let w=0;w<items.length;w++){
        console.log(`=>${items[w]}`);
    }
    console.log("Enjoy Your Sandwich!")
}

make_sandwich('Burger','Cheese','Salad');
make_sandwich('Sandwich','Cheese','Cucumbers');
make_sandwich('Grilled Cheese','Cheese','Chicken patte');