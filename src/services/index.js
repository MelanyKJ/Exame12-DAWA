const baseURL="https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json"
export const get = async(url)=>{
    try{
        const response = await fetch(url);
        return await response.json();
    }catch (error){
        console.log("error",error);
    }
};
