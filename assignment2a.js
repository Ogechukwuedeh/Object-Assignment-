function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ status:200, body: "Success"});
         } else {
                reject("The API is not working");
            } 
            });
}

getFullResponseFromAPI(true)
.then(response => console.log(response))
.catch(error => console.error(error));
