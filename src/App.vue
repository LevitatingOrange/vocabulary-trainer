

<template>
    <div id="app">
	<component :is="currentView"
		   :other-languages.sync="otherLanguages"
		   :native-language="nativeLanguage"
		   :other-language="selectedLanguage"
		   :total="10"
		   :words="words[selectedLanguage]"
		   transition="swipe"
		   transition-mode="out-in">
	</component>
    </div>
</template>

<script>
 import InterrogationView from "./InterrogationView.vue";
 import NativeView from "./NativeView.vue";
 import LanguagesView from "./LanguagesView.vue";
 import VocabularyView from "./VocabularyView.vue";
 
 export default {
     components: {
	 InterrogationView,
	 NativeView,
	 LanguagesView,
	 VocabularyView
     },
     
     data () {
	 return {
	     currentView: "NativeView",
	     nativeLanguage: "",
	     selectedLanguage: "",
	     otherLanguages: [],
	     words: {}
	 }
     },
     events: {
	 "native-created": function (nativeLanguage) {
	     this.nativeLanguage = nativeLanguage;
	     this.currentView = "LanguagesView";
	 },
	 "language-selected": function (language) {
	     this.selectedLanguage = this.otherLanguages[language];
	     this.currentView = "VocabularyView";
	 },
	 "interrogate": function () {
	     this.currentView = "InterrogationView";
	     this.$broadcast("start-interrogation");
	 },
	 "back": function () {
	     if (this.currentView === "VocabularyView") {
		 this.currentView = "LanguagesView";
	     } else {
		 this.currentView = "VocabularyView";
	     }
	 }
     },
     watch: {
	 otherLanguages: function(newVal, oldVal) {
	     const lastElem = this.otherLanguages.slice(-1).pop();
	     if (this.words[lastElem] === undefined) {
		 this.words[lastElem] = [];
	     }
	 }
     }
 }
</script>

<style>
 .swipe-transition {
     transition: opacity 0.2s ease;
 }
 .swipe-enter, .swipe-leave {
     opacity: 0;
 }
</style>
