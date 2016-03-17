

<template>
    <div id="app">
	<!--
	<native-view></native-view>
	<interrogation :words.once="words" native-lang="German" other-lang="English" :total="10"></interrogation>
	<languages-view :other-languages.sync="['english', 'italian']" native-language="German"></languages-view>
	-->
	<vocabulary-view :words="words" other-language="Italian" native-language="German">
	</vocabulary-view>
    </div>
</template>

<script>
 import Interrogation from "./Interrogation.vue";
 import NativeView from "./NativeView.vue";
 import LanguagesView from "./LanguagesView.vue";
 import VocabularyView from "./VocabularyView.vue";
 
 export default {
     components: {
	 Interrogation,
	 NativeView,
	 LanguagesView,
	 VocabularyView
     },
     
     data () {
	 return {
	     words: [
		 {
		     native: "Haus",
		     other: "house",
		 },
		 {
		     native: "Straße",
		     other: "street",
		 },
		 {
		     native: "Wohnung",
		     other: "flat",
		 },
		 {
		     native: "leben",
		     other: "live",
		 },
		 {
		     native: "Schlafen",
		     other: "sleep",
		 }
	     ]
	 }
     }
 }
</script>
