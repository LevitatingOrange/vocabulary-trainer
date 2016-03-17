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
		<li v-for="language in otherLanguages">
		    <form class="change-language" @submit.prevent="selectLanguage($index)">
			<button class="remove" type="button" @click="removeLanguage($index)"> 
			    <i class="ion-close"></i>
			</button>
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
 export default {
     name: "LanguagesView",

     props: {
	 shown: Boolean,
	 nativeLanguage: String,
	 otherLanguages: [],
	 newLanguage: ""
     },
     
     ready () {
	 this.$els.firstInput.focus();
     },
     
     methods: {
	 selectLanguage: function(index) {
	     this.$dispatch("language-selected", index);
	 },
	 addLanguage: function() {
	     this.otherLanguages.push(this.newLanguage);
	     this.newLanguage = "";
	     this.$els.firstInput.focus();
	 },
	 removeLanguage: function(index) {
	     this.otherLanguages.splice(index, 1);
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
