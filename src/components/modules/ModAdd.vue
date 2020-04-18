<template>
<div id=app>
<h1>Add Item Page</h1>
<form id="fm1">
<label>Mod Name</label>
<input type="text" v-model.lazy="item.name"
required/>
<button v-on:click.prevent="addItem">Add
Item</button>
</form>
</div>
</template>

<script>
import database from '../../firebase.js'
export default {
data(){
return{
msg:"Add Item",
item:{
name:'',
},
}
},
methods:{
addItem: function () {
database.collection('items').add(this.item);
}
}
}
</script>