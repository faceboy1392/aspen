/*
just using typescript for the type checking,
the actual code wouldn't be implemented in
typescript obviously
*/

type number = number;
type int = number;
type float = number;
type double = number;
type decimal = float | double;

// also has things like int8, uint8, int16, uint16, etc

type boolean = true | false;
// any because idk what type to put there
type char = any;
type string = char[];

type list<value> = value[];


function println(...values: any);
function print(...values: any);

// since when are modules a thing in ts
module io {
    
}