const s = "DCXXI"

const romanToInt = (e) =>{
    let total = 0
    let numeralArray = e.split("")
    for(i=0;i<=numeralArray.length;i++){
        if(numeralArray[i] === "I"){
            if(numeralArray[i+1] === "V"){
                total+=4
                i++
            }else if(numeralArray[i+1] === "X"){
                total+=
                i++
            }else{
             total += 1   
            }
            
        }
        else if(numeralArray[i] === "V"){
            total += 5
        }
        else if(numeralArray[i] === "X"){
            if(numeralArray[i+1] === "C"){
                total += 90
                i++
            }else if(numeralArray[i+1] === "L"){
                total += 40
                i++
            }else{
             total += 10   
            }
            
        }
        else if(numeralArray[i] === "L"){
            total += 50
        }
        else if(numeralArray[i] === "C"){
            if(numeralArray[i+1] === "M"){
                total += 900
                i++
            }else if(numeralArray[i+1] === "D"){
                total += 400
                i++
            }
            else{
              total += 100  
            }
            
        }
        else if(numeralArray[i] === "D"){
            total += 500
        }
        else if(numeralArray[i] === "M"){
            total += 1000
        }
        console.log(total)
    }
    console.log(total)
}

romanToInt(s)