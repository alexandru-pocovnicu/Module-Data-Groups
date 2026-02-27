const invert=require("./invert.js")
test("when passed a string invert will throw error",()=>{
    expect(()=>invert("asd")).toThrow("Invalid input")
})