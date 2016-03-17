<template>
    <div class="view">
	<div class="header-bar">
	    <div class="header-label">
		Vocabulary
	    </div>
	</div>
	<div class="content">
	    <form @submit.prevent="newWord">
		<table class="word-table">
		    <thead>
			<tr>
			    <th class="word-table-head">
				<button type="button" class="sort" @click="changeSortOrder('native')">
				    {{ nativeLanguage }}
				    <i :class="sortOrderNative == 1? 'ion-arrow-down-b' :  'ion-arrow-up-b'"></i>
				</button>
			    </th>
			    <th class="word-table-head">
				<button type="button" class="sort"  @click="changeSortOrder('other')">
				    {{ otherLanguage }}
				    <i :class="sortOrderOther == 1? 'ion-arrow-down-b': 'ion-arrow-up-b'"></i>
				</button>
			    </th>
			</tr>
		    </thead>
		    <tbody>
			<tr class="word" v-for="word in words | orderBy sortKey sortOrder">
			    <td>
				<input class="word-input" v-model="word.native"/>
			    </td>
			    <td>
				<input class="word-input" v-model="word.other"/>
			    </td>
			    <td>
				<button type="button" @click="removeWord(word)">
				    <i class="ion-close"></i>
				</button>
			    </td>
			</tr>
		    </tbody>
		    <tfoot>
			<tr class="word">
			    <td>
				<input class="word-input" v-model="newNative" placeholder="native" v-el:first-input/>
			    </td>
			    <td>
				<input class="word-input" v-model="newOther" placeholder="other"/>
			    </td>
			    <td>
				<button type="submit">
				    <i class="ion-plus"></i>
				</button>
			    </td>
			</tr>
		    </tfoot>
		</table>
	    </form>
	</div>
	<div class="footer-bar">
	    <button @click="goBack" class="back"><i class="ion-chevron-left"></i> Back</button>
	    <button @click="interrogate" class="back">Interrogation <i class="ion-clipboard"></i></button>
	</div>
    </div>
</template>
 
<script>
 
 export default {
     name: "VocabularyView",

     props: {
	 shown: Boolean,
	 nativeLanguage: String,
	 otherLanguage: String,
	 words: Array
     },

     data() {
	 return {
	     sortKey: "native",
	     sortOrder: 1,
	     sortOrderNative: 1,
	     sortOrderOther: 1,
	     newNative: "",
	     newOther: "",
	 }
     },

     methods: {
	 changeSortOrder: function(key) {
	     this.sortKey = key;
	     if (key === "native") {
		 this.sortOrderNative = this.sortOrderNative * (-1);
		 this.sortOrder = this.sortOrderNative;
	     } else {
		 this.sortOrderOther = this.sortOrderOther * (-1);
		 this.sortOrder = this.sortOrderOther;
	     }
	 },
	 goBack: function() {
	     this.$dispatch("back");
	 },
	 interrogate: function() {
	     this.$dispatch("interrogate");
	 },
	 removeWord: function(word) {
	     this.words.$remove(word);
	 },
	 newWord: function() {
	     this.words.push({
		 native: this.newNative,
		 other: this.newOther
	     });
	     this.newNative = "";
	     this.newOther = "";
	     this.$els.firstInput.focus();
	 }
     },
     
     watch: {
	 shown: function(newVal, oldVal) {
	     if (newVal && !oldVal) {
		 this.$els.firstInput.focus();
	     }
	 }
     }
 }
</script>

<style>
 .word-table {
     width: 300px;
 }

 .sort {
     font-style: italic;
 }
 .word-input {
     font-style: normal;
     font-weight: 400;
     font-size: 14px;
     height: inherit;
 }

 .word-input:placeholder-shown {
     font-style: italic;
 }
</style>
