const num = "58"
let numeralOut = ""

const numFind = (num) => {
    console.log(num)
    if(num-1000 >= 0){
        numeralOut+="M"
        num-=1000
        numFind(num)
    }else if(num-900 >= 0){
        numeralOut+="CM"
        num-=900
        numFind(num)
    }else if(num-500 >= 0){
        numeralOut+="D"
        num-=500
        numFind(num)
    }else if(num-400 >= 0){
        numeralOut+="CD"
        num-=400
        numFind(num)
    }else if(num-100 >= 0){
        numeralOut+="C"
        num-=100
        numFind(num)
    }else if(num-90 >= 0){
        numeralOut+="XC"
        num-=90
        numFind(num)
    }else if(num-50 >= 0){
        numeralOut+="L"
        num-=50
        numFind(num)
    }else if(num-40 >= 0){
        numeralOut+="XL"
        num-=40
        numFind(num)
    }else if(num-10 >= 0){
        numeralOut+="X"
        num-=10
        numFind(num)
    }else if(num-9 >= 0){
        numeralOut+="IX"
        num-=9
        numFind(num)
    }else if(num-5 >= 0){
        numeralOut+="V"
        num-=5
        numFind(num)
    }else if(num-4 >= 0){
        numeralOut+="IV"
        num-=4
        numFind(num)
    }else if(num-1 >= 0){
        numeralOut+="I"
        num-=1
        numFind(num)
    }
}

const integerToRoman = (num) => {
    numFind(num)
    console.log(numeralOut)
}

integerToRoman(num)