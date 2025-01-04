import AsyncStorage from "@react-native-async-storage/async-storage";
let AUTH_KEY = "muZi4KkA8/SPDse40XieOD/BfBxcmd+gEuYWvRiJCBU=";
const LocalStorage = {
    get: () => new Promise(async (resolve,reject)=>{
        try{
            const value = await AsyncStorage.getItem(AUTH_KEY);
            if (value !== null){
                resolve(JSON.parse( value ));
                console.log('Getting Local Storage Data: success');
            }else{
                reject('Your Data is null');
            }
        }catch(e){
            reject(e);
            console.log('localStorage.get Error: '+e);
        }
    }),
    set: async (data:any)=>{
        try {
            await AsyncStorage.setItem(AUTH_KEY, JSON.stringify( data ) )
            console.log('Setting Local Storage Data: Success');
        } catch (e) {
            console.log('Setting Local Storage Data: '+e);
        }
    },
    clear: async ()=>{
        try {
            await AsyncStorage.removeItem(AUTH_KEY)
            console.log('Clear Local Storage Data: success');
        } catch (e) {
            console.log('Clear Local Storage Data: '+e);
        }
    }
}
export default LocalStorage;