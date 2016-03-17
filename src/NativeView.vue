<template>
    <div class="view">
	<div class="header-bar">
	    <div class="header-label">
		New native
	    </div>
	</div>
	<div class="content">
	    <form @submit.prevent="submitLanguage">
		<input type="text" v-model="currentInput" v-el:first-input/>
		<button type="submit">
		    <i class="ion-chevron-right"></i>
		</button>
	    </form>
	</div>
	<div class="footer-bar">
	    
	</div>
    </div>
</template>

<script>
 export default {
     name: "Native",

     data () {
	 return {
	     currentInput: "",
	 }
     },
     ready () {
	 this.$els.firstInput.focus();
     },
     methods: {
	 submitLanguage: function (event) {
	     this.$dispatch("native-created", this.currentInput);
	 }
     },
 }
</script>
