<template>
    <div class="view">
	<div class="header-bar">
	    <div class="header-label">
		New native
	    </div>
	</div>
	<div class="content">
	    <form @submit.prevent="submitLanguage">
		<input type="text" v-model="currentInput" autofocus/>
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

     props: {
	 shown: Boolean
     },

     data () {
	 return {
	     currentInput: "",
	 }
     },
     methods: {
	 submitLanguage: function (event) {
	     this.$dispatch("native-created", this.currentInput);
	 }
     },
 }
</script>
