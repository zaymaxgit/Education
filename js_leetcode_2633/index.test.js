const func = require("./index");

let object = { a: "str", b: -12, c: true, d: null, e: { f: "2" } };
let object2 = { key: { a: 1, b: [{}, null, "Hello"] } };
let object3 = { a: "str", b: -12, c: true, d: null, e: [1, "2"] };

describe("sum suite", function () {
  test("Translation to JSON format", function () {
    expect(func.jsonStringify(object)).toBe(
      '{"a":"str","b":-12,"c":true,"d":null,"e":{"f":"2"}}'
    );
  });
  test("Translation to JSON format", function () {
    expect(func.jsonStringify(object2)).toBe(
      '{"key":{"a":1,"b":[{},null,"Hello"]}}'
    );
  });
  test("Translation to JSON format", function () {
    expect(func.jsonStringify(object3)).toBe(
      '{"a":"str","b":-12,"c":true,"d":null,"e":[1,"2"]}'
    );
  });
});
