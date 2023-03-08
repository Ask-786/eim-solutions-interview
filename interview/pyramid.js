for(let i = 1;i<=4;i++){
    for(let j= i;j<=4;j++){
        process.stdout.write(" ")
    }
    for(let k = 1;k<=i*2-1;k++){
        process.stdout.write("*")
    }
    console.log("")
}
