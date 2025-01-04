import { apiLinks } from "../../../const/env";



export const backendLogin =async (user:string,pass:string) =>{
    try{
        const resp = await fetch(apiLinks.login, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username:user,password:pass}),
            cache: "no-store",
        });
        // console.log("resp",resp)
        if(resp.ok && resp.status === 200){
            const result =await resp.json();
            return {code:200,...result}
        }
        if(!resp.ok && resp.status === 401){
            const result =await resp.json();
            return {code:401,...result}
        }
        
    }catch(e:any){
        console.log("login_error",e)
        return {status:"error",message:"internal server error"}
    };
}