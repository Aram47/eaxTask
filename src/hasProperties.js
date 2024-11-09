function hasProperties(obj, paths) {
    if (typeof obj !== 'object' || !Array.isArray(paths)) {
        return [];
    }
    
    const result = {};
  
    paths.forEach((path) => {
      const keys = path.split('.');
      let current = obj;
  
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] in current) {
          current = current[keys[i]];
        } else {
          result[path] = false;
          return;
        }
      }
  
      result[path] = true;
    });
  
    return result;
}
  
const user = { name: "Alice", address: { city: "Wonderland" } };
console.log(hasProperties(user, ["name", "address.city", "address.zip"]));