<style>

.fade-transition {
    transition: opacity .5s ease;
}

.fade-enter,
.fade-leave {
    opacity: 0;
}

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

.final-counter {
    font-size: 30px;
    font-weight: 300;
}

.correct {
    color: #43CE43;
}

.wrong {
    color: #BD1E1E;
}

.to-input {
    width: 150px;
    text-align: center;
    font-size: 25px;
}

.last-result i {
    width: 50px;
}

</style>

<template>

<div>
    <view>
        <div slot="label">
            Interrogation
        </div>
        <div v-show="!finished" slot="info">
            <span class="correct">{{ counterCorrect }}</span>/{{ counter }}/<span class="counter-total">{{ total }}</span>
        </div>
        <div slot="content" v-show="finished" class="content">
            <div class="final-counter">
                <span class="correct">{{ counterCorrect }}</span> :
                <span class="wrong">{{ counter - counterCorrect}}</span>
            </div>
        </div>
        <div slot="content" class="content" v-else>
            <div class="language">
                {{ reverse ? data.native : data.languages[data.selectedLanguage] }}
                <i class="ion-arrow-right-c"></i> {{ reverse ? data.languages[data.selectedLanguage] : data.native }}
            </div>
            <div class="from">
                {{ reverse ? currentWord.native : currentWord.other }}
            </div>
            <div class="to">
                <form @submit.prevent="checkInput">
                    <i class="ion-chevron-right"></i>
                    <input class="to-input" type="text" v-model="currentInput" v-el:input/>
                    <i class="ion-chevron-left"></i>
                    <button class="answer-button" type="submit"></button>
                </form>
            </div>
        </div>
        <div slot="right-footer" v-show="showLastResult" class="last-result" transition="fade">
            <i v-show="lastResult" class="ion-checkmark-circled correct"></i>
            <i v-else class="ion-close-circled wrong"></i>
        </div>
    </view>
</div>

</template>

<script>

import View from "./View.vue";
export default {
    name: "Interrogation",

    components: {
        View
    },

    props: {
        data: Object,
        total: Number
    },
    data() {
        return {
            reverse: false,
            currentWord: {},
            currentInput: "",
            counter: 0,
            counterCorrect: 0,
            finished: false,
            lastResult: false,
            showLastResult: false
        }
    },
    ready() {
        this.$els.input.focus();
        this.selectNewWord();
    },
    methods: {
        reset: function() {
            this.reverse = false;
            this.currentWord = {};
            this.currentInput = "";
            this.counter = 0;
            this.counterCorrect = 0;
            this.finished = false;
        },
        checkInput: function(event) {
            this.counter = this.counter + 1;
            const other = this.reverse ? this.currentWord.other : this.currentWord.native;
            if (this.currentInput === other) {
                this.counterCorrect = this.counterCorrect + 1;
                this.lastResult = true;
            } else {
                this.lastResult = false;
            }
            this.selectNewWord();
            this.$els.input.focus();
            this.showLastResult = true;
            setTimeout(_ => this.showLastResult = false, 500);
        },
        selectNewWord: function() {
            if (this.counter >= this.total) {
                this.finished = true;
            } else {
                const length = this.data.words[this.data.selectedLanguage].length;
                const newIndex = length == 1 ?
                    0 : Math.floor(Math.random() * length);
                this.reverse = Math.random() > 0.5 ? true : false;
                this.currentWord = this.data.words[this.data.selectedLanguage][newIndex];
                this.currentInput = "";
            }
        },
    }
}

</script>
