<template>
    <div class="view">
	<div class="header-bar">
	    <div class="header-label">
		Select
	    </div>
	    <div class="header-info">
		{{ native }}
	    </div>
	</div>
    </div>
    <div class="content">
	<ul class="languages">
	    <li v-for="language in languages">
		<form class="change-language" @submit.prevent="selectLanguage($index)">
		    <input type="text" v-model="language"/>
		    <button class="select" type="submit">
			<i class="fa fa-angle-right fa-lg"></i>
		    </button>
		</form>
	    </li>
	</ul>
    </div>
    <div class="footer-bar">
	<form class="edit-language" @submit.prevent="newLanguage">
	    <input type="text" v-model="newLanguageInput"/>
	    <button class="select" type="submit">
		<i class="fa fa-plus fa-lg"></i>
	    </button>
	</form>
    </div>
</template>

<script>
 export default {
     name: "LanguagesView",

     props: {
	 native: String,
	 languages: [],
	 newLanguageInput: ""
     },

     methods: {
	 selectLanguage: function(index) {
	     this.$dispatch("select-language", index);
	 },
	 newLanguage: function() {
	     this.languages.push(this.newLanguageInput);
	     this.newLanguageInput = "";
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
 .change-language, .edit-language {
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
     flex-direction: row;
 }
</style>
