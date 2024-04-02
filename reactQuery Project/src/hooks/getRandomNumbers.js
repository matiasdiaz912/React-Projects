async function getRandomNumber (){
    try {
       let URL = "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
       let getNumber = await fetch(URL);
       let data = await getNumber.json()
       return data
       
     } catch (err) {
       throw "Hubo un error"
     }
}

export default getRandomNumber