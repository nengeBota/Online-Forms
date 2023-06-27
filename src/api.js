const URL ='http://localhost:5000'

export function categoryfxn(){
    console.log("this is the categoryfxn")
    return fetch(`${URL}/category`, {
            method: 'GET'
        }).then(response =>response.json())
        
}
