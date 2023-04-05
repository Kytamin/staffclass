class Staff{
    name :string;
    email:string;
    age:number
    constructor(name:string,email:string,age:number) {
        this.name=name
        this.email=email
        this.age=age
    }
    getter(){
        return `${this.name} ,${this.email},${this.age}`
    }
    setName(name:string){
        this.name=name
    }
    setEmail(email:string){
        this.email=email
    }
    setAge(age:number){
        this.age=age
    }

}
let staff1= new Staff("K","123@gmail.com",26)
staff1.setAge(22)
console.log(staff1)
