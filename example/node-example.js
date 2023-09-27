import { QuickJs, DukTape } from "../index.js";

const testString = `
var obj={}
obj.a=7
obj.b=8
obj.c=[2,3,4]
var sum=0
for(var k in obj){
	var val=obj[k]
	if(Array.isArray(val)){
		sum+=val.reduce(function(a,v){return a+v})
	}
	else{
		sum+=val
	}
}
sum
`;
const quickjs = QuickJs();
quickjs.evalJs(testString).then((res) => {
  console.log("quickjs ", res);
});

const duktape = DukTape();
duktape.evalJs(testString).then((res) => {
  console.log("duktape ", res);
});
