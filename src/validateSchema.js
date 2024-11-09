function validateSchema(obj, schema) {
    const errors = {};
  
    for (const key in schema) {
      const rules = schema[key];
      const value = obj[key];

      if (rules.required && (value === undefined || value === null)) {
        errors[key] = 'Property is required';
        continue;
      }

      if (value === undefined || value === null) {
        continue;
      }

      if (typeof value !== rules.type && !(rules.type === 'array' && Array.isArray(value))) {
        errors[key] = `Expected type ${rules.type}, got ${typeof value}`;
        continue;
      }

      if (rules.type === 'string') {
        if (rules.minLength !== undefined && value.length < rules.minLength) {
          errors[key] = `String should have at least ${rules.minLength} characters`;
        }
        if (rules.maxLength !== undefined && value.length > rules.maxLength) {
          errors[key] = `String should have no more than ${rules.maxLength} characters`;
        }
      }

      if (rules.type === 'number') {
        if (rules.min !== undefined && value < rules.min) {
          errors[key] = `Number should be at least ${rules.min}`;
        }
        if (rules.max !== undefined && value > rules.max) {
          errors[key] = `Number should be no more than ${rules.max}`;
        }
      }

      if (rules.type === 'array' && rules.itemType) {
        if (!value.every(item => typeof item === rules.itemType)) {
          errors[key] = `All array items should be of type ${rules.itemType}`;
        }
      }
    }
  
    return Object.keys(errors).length === 0 ? true : errors;
}

const schema = {
    name: { type: "string", minLength: 2 },
    age: { type: "number", min: 18 },
    isActive: { type: "boolean" },
    tags: { type: "array", itemType: "string" },
};
  
const obj = { name: "Alice", age: 25, isActive: true, tags: ["admin", "user"] };
console.log(validateSchema(obj, schema));