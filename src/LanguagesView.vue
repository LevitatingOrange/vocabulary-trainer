<template>
    <div class="view">
	<div class="header-bar">
	    <div class="header-label">
		Select
	    </div>
	    <div class="header-info">
		{{ nativeLanguage }}
	    </div>
	</div>
	<div class="content">
	    <ul class="languages">
		<li v-for="language in otherLanguages">
		    <form class="change-language" @submit.prevent="selectLanguage($index)">
			<button type="button" class="remove" @click="removeLanguage($index)"> 
			    <i class="ion-close"></i>
			</button>
			<input type="text" v-model="language"/>
			<button class="select" type="submit">
			    <i class="ion-chevron-right"></i>
			</button>
		    </form>
		</li>
	    </ul>
	</div>
	<div class="footer-bar">
	    <form class="edit-language" @submit.prevent="addLanguage">
		<input type="text" v-model="newLanguage"/>
		<button class="add" type="submit">
		    <i class="ion-plus"></i>
		</button>
	    </form>
	</div>
    </div>
</template>

<script>
 export default {
     name: "LanguagesView",

     props: {
	 nativeLanguage: String,
	 otherLanguages: [],
	 newLanguage: ""
     },

     methods: {
	 selectLanguage: function(index) {
	     this.$dispatch("language-selected", index);
	 },
	 addLanguage: function() {
	     this.otherLanguages.push(this.newLanguage);
	     this.newLanguage = "";
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
 .change-language, .edit-language {
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
     flex-direction: row;
     width: 300px;
 }
</style>
