class authenticationService {
    
    // constructor(){

    // }

    isAuthenticate(user,password){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve({
                    authenticate:true
                })
            },3000)
        })
    }
}

export default authenticationService