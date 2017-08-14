class authenticationService {
    
    // constructor(){

    // }

    isAuthenticate(user,password){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve({
                    authenticate:user===password
                })
            },1000)
        })
    }
}

export default authenticationService