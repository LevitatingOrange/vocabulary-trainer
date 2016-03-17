

<template>
    <div id="app">
	<native-view v-show="currentView == 0"
		     :shown="currentView == 0">
	</native-view>
	<languages-view v-show="currentView == 1"
			:other-languages.sync="otherLanguages"
			:native-language="nativeLanguage"
			:shown="currentView == 1">
	</languages-view>
	<vocabulary-view v-show="currentView == 2"
			 :words="words[selectedLanguage]"
			 :other-language="selectedLanguage"
			 :native-language="nativeLanguage"
			 :shown="currentView == 2">
	</vocabulary-view>
	<interrogation v-show="currentView == 3"
		       :words="words[selectedLanguage]"
		       :native-language="nativeLanguage"
		       :other-language="selectedLanguage"
		       :total"10"
		       :shown="currentView == 3">
	</interrogation>
	<!--
	     <native-view></native-view>
	     <interrogation :words.once="words" native-lang="German" other-lang="English" :total="10"></interrogation>
	     <languages-view :other-languages.sync="['english', 'italian']" native-language="German"></languages-view>
	     <vocabulary-view :words="words" other-language="Italian" native-language="German">
	     </vocabulary-view>
	-->
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
	     currentView: 0,
	     nativeLanguage: "",
	     selectedLanguage: "",
	     otherLanguages: [],
	     words: {}
	 }
     },
     events: {
	 "native-created": function (nativeLanguage) {
	     this.nativeLanguage = nativeLanguage;
	     this.currentView = 1;
	 },
	 "language-selected": function (language) {
	     this.selectedLanguage = this.otherLanguages[language];
	     if (this.words[this.selectedLanguage] === undefined) {
		 this.words[this.selectedLanguage] = [];
	     }
	     this.currentView = 2;
 },
	 "back": function () {
	     this.currentView = this.currentView - 1;
	 },
	 "interrogate": function () {
	     this.currentView = 3;
	     this.$broadcast("start-interrogation");
	 }
     }
 }
</script>
