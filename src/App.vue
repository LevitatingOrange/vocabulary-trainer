

<template>
    <div id="app">
	<!--
	<native-view></native-view>
	<languages-view :languages.sync="['english', 'italian']" native="German"></languages-view>
	-->
	<interrogation :words.once="words" native-lang="German" other-lang="English" :total="10"></interrogation>
    </div>
</template>

<script>
 import Interrogation from "./Interrogation.vue";
 import NativeView from "./NativeView.vue";
 import LanguagesView from "./LanguagesView.vue";
 
 export default {
     components: {
	 Interrogation,
	 NativeView,
	 LanguagesView
     },
     
     data () {
	 return {
	     words: [
		 {
		     nativeWord: "Haus",
		     otherWord: "house",
		 },
		 {
		     nativeWord: "Straße",
		     otherWord: "street",
		 },
		 {
		     nativeWord: "Wohnung",
		     otherWord: "flat",
		 },
		 {
		     nativeWord: "leben",
		     otherWord: "live",
		 },
		 {
		     nativeWord: "Schlafen",
		     otherWord: "sleep",
		 }
	     ]
	 }
     }
 }
</script>
