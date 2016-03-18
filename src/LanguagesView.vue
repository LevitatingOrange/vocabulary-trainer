<template>
    <div class="view">
	<div class="header-bar">
	    <div class="header-label">
		Languages
	    </div>
	    <div class="header-info">
		{{ nativeLanguage }}
	    </div>
	</div>
	<div class="content">
	    <ul class="languages">
		<li v-for="language in languages">
		    <form class="change-language" @submit.prevent="selectLanguage($key)">
			<button class="remove" type="button" @click="removeLanguage($key)"> 
			    <i class="ion-close"></i>
			</button>
			{{ language }}
			<input type="text" v-model="language"/>
			<button type="submit">
			    <i class="ion-chevron-right"></i>
			</button>
		    </form>
		</li>
		<li>
		    <form class="edit-language" @submit.prevent="addLanguage">
			<input type="text" v-model="newLanguage" v-el:first-input/>
			<button type="submit">
			    <i class="ion-plus"></i>
			</button>
		    </form>
		</li>
	    </ul>
	</div>
	<div class="footer-bar">
	</div>
    </div>
</template> 

<script>
 import {generateUUID} from "./helpers.js";
 
 export default {
     name: "LanguagesView",

     props: {
	 shown: Boolean,
	 nativeLanguage: String,
	 languages: Object,
     },

     data () {
	 return {
	     newLanguage: ""
	 };
     },
     
     ready () {
	 this.$els.firstInput.focus();
     },
     
     methods: {
	 selectLanguage: function(key) {
	     this.$dispatch("language-selected", key);
	 },
	 addLanguage: function() {
	     const uuid = generateUUID();
	     this.languages[uuid] = this.newLanguage;
	     this.newLanguage = "";
	     this.$els.firstInput.focus();
	     this.$dispatch("language-added", uuid);
	 },
	 removeLanguage: function(key) {
	     delete this.languages[key];
	     this.$dispatch("language-removed", uuid);
	 }
     }
 }
</script>

<style>
 .languages {
     list-style-type: none;
     padding: 0;
     margin: 0;
     width: 300px;
 }
 .remove {
     margin-right: 5px;
 }
</style>
