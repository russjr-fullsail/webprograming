//Russell Chatham Jr. 10/10/13 Expressions - Industry-specific
//Head Loss for flow of water

var g = 2; //g= Gravitational Constant
var d = 5; //d= Pipe Diameter
var l = 200; //l= Pipe Length
var v = 3; //v= Flow Velocity
var f = 0.019 //f= Friction Factor

var headLoss = f * (l/d) * (v*2/2*g)
console.log(headLoss);

