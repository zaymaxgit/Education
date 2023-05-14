//2633. Convert Object to JSON String

let object = { a: "str", b: -12, c: true, d: null, e: { f: "2" } };
let object2 = { key: { a: 1, b: [{}, null, "Hello"] } };
let object3 = { a: "str", b: -12, c: true, d: null, e: [1, "2"] };

function jsonStringify(object) {
  let count = 0;
  let strResult = "";
  let arrDop = [];
  let keyJSON, valueJSON;

  for (const [key, value] of Object.entries(object)) {
    count++;
    keyJSON = `"${key}"`;

    function valueIf(val) {
      if (typeof val === "string") {
        return `"${val}"`;
      } else if (Object.prototype.toString.call(val) === "[object Object]") {
        return jsonStringify(val);
      } else if (Array.isArray(val)) {
        val.forEach((e) => {
          arrDop.push(valueIf(e));
        });
        return `[${arrDop}]`;
      } else {
        return `${val}`;
      }
    }

    valueJSON = valueIf(value);

    if (count == Object.keys(object).length) {
      strResult += `${keyJSON}:${valueJSON}`;
    } else {
      strResult += `${keyJSON}:${valueJSON},`;
    }
  }

  return `{${strResult}}`;
}

console.log(jsonStringify(object3));
module.exports.jsonStringify = jsonStringify;
