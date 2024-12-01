const score: Array<number> = []
const names :Array<string>=[]

function identity(val: boolean | number): boolean | number {
    return val
}

function identity2(val:any):any{
    return val
}
// Generic
function identity3<Type>(val: Type):Type{
    return val
}
 identity3(3);
 identity3("moni")
 identity3(true)

 function identity4<M>(val:M):M{
    return val
 }

 interface Book{
    name:string,
    type:string,
    price: number
 }
 identity4<Book>({name:"moni",type:"story",price:5})

 function getSearchProducts<T>(products: T[]):T {
    const myIndex = 3
    return products[myIndex]

 }
 
 const getMoreSearchProducts = <M,>(products:number[]):number => {
    const myIndex = 5
    return products[myIndex]
 }
 function anotherGeneric<T,U>(valOne:T,valTwo:U):object{
    return {
       valOne,
       valTwo
    }
 }

 interface DataBase{
    connection:string,
    username:string,
    password:string
 }
 function anotherGenerics<T,U extends DataBase>(valOne:T,valTwo:U):object{
    return {
       valOne,
       valTwo
    }
 }

 anotherGeneric(3,"4")
 anotherGenerics(
        3,
        {  
         connection:"user",
         username:"name",
         password:"123"
        }
    )

    interface Quiz{
        name:string,
        type:string
    }
    interface Course{
        name:string,
        author:string,
        subject:string
    }
 class Sellable<T>{
    public cart :T[]=[]
    addToCart(product:T){
        this.cart.push(product)
    }
 }
