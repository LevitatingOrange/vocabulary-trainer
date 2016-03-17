<template>
    <div class="view">
	<div class="header-bar">
	    <div class="header-label">
		{{ finished ? "Result" : "Translate" }}
	    </div>
	    <div v-if="!finished" class="header-info">
		<span class="counter-correct">{{ counterCorrect }}</span>/{{ counter }}/<span class="counter-total">{{ total }}</span>
	    </div>
	</div>
	<div class="content" v-show="finished">
	    <div class="final-counter">
		<span class="final-correct">{{ counterCorrect }}</span> :
		<span class="final-wrong">{{ counter - counterCorrect}}</span>
	    </div>
	</div>
	<div class="content" v-else>
	    <div class="language">
		{{ reverse ? nativeLanguage : otherLanguage }}
		<i class="ion-arrow-right-c"></i>
		{{ reverse ? otherLanguage : nativeLanguage }}
	    </div>
	    <div class="from">
		{{ reverse ? currentWord.native : currentWord.other }}
	    </div>
	    <div class="to">
		<form @submit.prevent="checkInput">
		    <i class="ion-chevron-right"></i>
		    <input class="to-input" type="text" v-model="currentInput"/>
		    <i class="ion-chevron-left"></i>
		    <button class="answer-button" type="submit"></button>
		</form>
	    </div>
	</div>
	<div class="footer-bar">
	    <button @click="goBack" class="back"><i class="ion-chevron-left"></i> Back</button>
	</div>
    </div>
</template>

<script>
 export default {
     name: "Interrogation",

     props: {
	 shown: Boolean,
	 words: Array,
	 nativeLanguage: String,
	 otherLanguage: String,
	 total: Number
     },

     data () {
	 return {
	     reverse: false,
	     currentWord: {},
	     currentInput: "",
	     counter: 0,
	     counterCorrect: 0,
	     finished: false
	 }
     },
     methods: {
	 checkInput: function (event) {
	     this.counter = this.counter + 1;
	     const other = this.reverse ? this.currentWord.other : this.currentWord.native;
	     if (this.currentInput === other) {
		 this.counterCorrect = this.counterCorrect + 1;
	     }
	     this.selectNewWord();
	 },
	 selectNewWord: function() {
	     if (this.counter >= this.total) {
		 this.finished = true;
	     } else { 
		 const newIndex = Math.floor(Math.random() * this.words.length);
		 this.reverse = Math.random() > 0.5 ? true : false;
		 this.currentWord = this.words[newIndex];
		 this.currentInput = "";
	     }
	 },
	 goBack: function() {
	     this.$dispatch("back");
	 }
     },
     watch: {
	 shown: function(oldVal, newVal) {
	     if (newVal && !oldVal) {
		 this.selectNewWord();
	     }
	 }
     }
 }
</script>

<style>
 .from {
     font-size: 30px;
     font-weight: 700;
     font-style: italic;
     margin: 5px;
 }

 .language {
     margin-top: 5px;
     font-weight: 300;
 }

 .counter-correct {
     color: #43CE43;
 }

 .final-counter {
     font-size: 30px;
     font-weight: 300;
 }

 .final-correct {
     color: #43CE43;
 }
 
 .final-wrong {
     color: #BD1E1E;
 }

 .to-input {
     width: 150px;
     text-align: center;
     font-size: 25px;
 }

 /*
 .to-input:focus {
     border-bottom: solid;
     border-width: 0.5px;
     border-color: #A0A0A0;
 }
 */
</style>
