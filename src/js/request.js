import loaderToggler from "./loader"


const request = async (resource) => {
    loaderToggler(true);
    const request = await fetch(resource);


    
    if(!request.ok){
        loaderToggler(false);
        throw new Error("Something went wrong :(");
    };

    const data = await request.json();
    loaderToggler(false);

    return data ;
    
}

export default request 