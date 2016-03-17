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
		<form class="language" @submit.prevent="selectLanguage($index)">
		    <input type="text" v-model="language"/>
		    <button class="select" type="submit">
			<i class="fa fa-angle-right fa-lg"></i>
		    </button>
		</form>
	    </li>
	</ul>
    </div>
    <div class="footer-bar">
    </div>
</template>

<script>
 export default {
     name: "LanguagesView",

     props: {
	 native: String,
	 languages: []
     },

     methods: {
	 selectLanguage: function(index) {
	     this.$dispatch("select-language", index);
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
 .language {
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
     flex-direction: row;
 }
</style>
