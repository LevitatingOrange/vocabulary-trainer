<template>
    <div class="view">
	<div class="header-bar">
	    <div class="header-label">
		Select
	    </div>
	</div>
	<div class="content">
	    <form @submit.prevent="submitLanguage">
		<input type="text" v-model="currentInput" autofocus/>
		<button class="answer-button" type="submit"></button>
	    </form>
	</div>
	<div class="footer-bar">
	    
	</div>
    </div>
</template>

<script>
 export default {
     name: "NativeView",

     data () {
	 return {
	     currentInput: "",
	 }
     },
     methods: {
	 submitLanguage: function (event) {
	     this.$dispatch("nativeCreated", this.currentInput);
	 }
     }
 }
</script>
