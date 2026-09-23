const name="yahia raed"
console.log(name)

const age=14
console.log(name , age ,"years old")

const city="qalanswa"
console.log("city:", city)

const x=5
const y=2
console.log(x+y)
console.log(x*y)
console.log(x-y)
console.log(x/y)

const eng=93
const arabic=85
const math=100
const eng_arabic_math=eng+arabic+math
console.log(eng_arabic_math/3)

console.log(eng_arabic_math/3>90)

var num=10
console.log(num)
num=num+5
console.log(num)
num=num*2
console.log(num)




const student={    
    name:"yahia",
    age:14,
    grade:8,
    class:9

}
console.log(student)
console.log("name:", student.name ,"age:", student.age)
student.grade=10
console.log("grade:", student.grade)
console.log(student)
console.log(student.age>10)
student.grade=90
console.log("grade:", student.grade)
console.log("class:", student.class)

const car={
    type:"bmw",
    model:"bmw m5",
    color:"black"
}

const printmyname=()=>{

    console.log("my name is yahia")


}
printmyname()

const printmyage=()=>{

    console.log("my age:14")


}
printmyage()

const printsum=()=>{

    console.log("2+3=",2+3)


}
printsum()


const grtavg=()=>{
    const arbic=87
    const eng=93
    const math=100
    console.log((math+arbic+eng)/3)


}
grtavg() 



const sum =(a,b)=>{
    return a+b
}
const s=sum(17,5)
console.log(s)

const sayhello=(name)=>{

    console.log("hello" , name )

}
sayhello("yahia")

const a_ge=(age)=>{

    return age

}
const h=a_ge(14)
console.log(h)
const showmassage=()=>{

    console.log("i love programming" )
}
showmassage()
const shownumber=()=>{

    console.log(1000)
}
shownumber()
const showname=()=>{

    console.log("my name is yahia" )
}
showname()
const givemeyourname=(name)=>{

    console.log("my name is", name )
}
givemeyourname("yahia")

const givemeyourinfo=(name,age,city)=>{

    console.log("my name is:", name,"i have",age,"years old"   ,"i am from:" ,city)
}
givemeyourinfo("yahia","14","qalanswa")
const double=(a)=>{

    console.log(a*2 )
}
double(6)

const minvos=(a,b)=>{

    console.log(a-b)
}
minvos(6,3)
const divid=(a,b)=>{

    console.log(a/b)
}
divid(6,3)
const price=(a,b)=>{

   return a*b
}
const m=price(6,3)
console.log(m)
const ares=(a,b)=>{

    console.log(a*b)
}
ares(7,3)
const howoldareyou=(a)=>{

    console.log(2026-a)
}
howoldareyou(2012)

const ageafteryears=(a,b)=>{

    return a+b


}
const p=ageafteryears(14,4)
console.log(p)

const discount=(a,b)=>{
    const x=a*b
    return a-x

}
const z=discount(100, 0.2)
console.log(z)
const showstudent=()=>{
    const student={
        name:'yahia',
        age:14,
        agrig:93,
        class:9,
        
    }
    console.log(student)
    console.log(student.name)
}
showstudent()
