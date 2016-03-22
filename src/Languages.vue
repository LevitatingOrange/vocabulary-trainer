<template>
<div>
    <view>
        <div slot="label">
            Languages
        </div>
        <div slot="info">
            {{ data.native }}
        </div>
        <div slot="content">
            <ul class="languages">
                <li v-for="language in data.languages">
                    <form @submit.prevent="this.$dispatch('next')" :class="{'not-selected': language != data.languages[data.selectedLanguage]}">
                        <input type="text" v-model="language" v-el:input @focus="selectLanguage($index)"/>
                        <button type="button" @click="removeLanguage($index)">
                            <i class="ion-close"></i>
                        </button>
                    </form>
                </li>
                <li>
                    <form @submit.prevent="addLanguage">
                        <input type="text" v-model="newLanguage" v-el:input/>
                        <button type="submit"><i class="ion-checkmark"></i></button>
                    </form>
                </li>
            </ul>
        </div>
    </view>
</div>
</template>

<script>
    import View from "./View.vue";
    export default {
        name: "Languages",
        components: {
            View
        },

        props: {
            data: Object,
        },

        data () {
            return {
                newLanguage: "",
            };
        },

        ready () {
            this.$els.input.focus();
        },

        methods: {
            addLanguage: function() {
              if (!this.newLanguage || /^\s*$/.test(this.newLanguage)) {
                this.$dispatch('error');
              } else {
                this.data.languages.push(this.newLanguage);
                this.data.words.push([]);
                this.data.selectedLanguage = this.data.languages.length - 1;
                this.newLanguage = "";
              }
            },
            removeLanguage: function(index) {
                this.data.languages.splice(index, 1);
                this.data.words.splice(index, 1);
                this.data.selectedLanguage = 0;
            },
            selectLanguage: function(index) {
                this.data.selectedLanguage = index;
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

    .select-button {
        margin-right: 5px;
    }
</style>
