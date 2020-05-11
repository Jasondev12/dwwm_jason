const tx="yyyyyhztrfgdutjalsoyyyylqgbdfertaqjyyyyy";
let
  arr = [],
  chr = "y";
 
for( let item of tx ){
  if ( item === chr ) arr.push( item );
}
alert( "nb de "+chr+ " = "+ arr.length );