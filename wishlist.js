const Wishlist = {

KEY:"saad_store_wishlist",


read(){

try{

return JSON.parse(
localStorage.getItem(this.KEY)
)||[];

}
catch{

return [];

}

},



save(data){

localStorage.setItem(
this.KEY,
JSON.stringify(data)
);

},




add(id){

let list=this.read();


if(!list.includes(id)){

list.push(id);

}


this.save(list);

},




remove(id){

let list=this.read()
.filter(item=>item!==id);


this.save(list);

},



has(id){

return this.read()
.includes(id);

},




toggle(id){

if(this.has(id)){

this.remove(id);

}

else{

this.add(id);

}


},




count(){

return this.read().length;

}


};
