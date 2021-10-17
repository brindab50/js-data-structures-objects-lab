// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value){  // non-destructive 
    return Object.assign({}, driver, {[key]: value})

    

}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){ // destructive 
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key){  // non-destructive
    const newObj = Object.assign({}, driver);

    delete newObj[key];
  
    return newObj;


}

function destructivelyDeleteFromDriverByKey(driver, key) {  // destructive 
    delete driver[key];
  
    return driver;
  }