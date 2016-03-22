<style>

.word-table {
    width: 300px;
}

.sort-button {
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

<template>

<div>
    <view>
        <div slot="label">
            Vocabulary
        </div>
        <div slot="content">
            <form @submit.prevent="addWord">
                <table class="word-table">
                    <thead>
                        <tr>
                            <th>
                                <button class="sort-button" type="button" @click="changeSortOrder('native')" :class="{'not-selected': sortKey!=='native'}">
                                    {{ data.native }}
                                    <i :class="sortOrder == 1? 'ion-arrow-down-b' :  'ion-arrow-up-b'"></i>
                                </button>
                            </th>
                            <th>
                                <button class="sort-button" type="button" @click="changeSortOrder('other')" :class="{'not-selected': sortKey!=='other'}">
                                    {{ data.languages[data.selectedLanguage] }}
                                    <i :class="sortOrder == 1? 'ion-arrow-down-b' :  'ion-arrow-up-b'"></i>
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="word in data.words[data.selectedLanguage] | orderBy sortKey sortOrder">
                            <td>
                                <input class="word-input" v-model="word.native" />
                            </td>
                            <td>
                                <input class="word-input" v-model="word.other" />
                            </td>
                            <td>
                                <button type="button" @click="removeWord(word)">
                                    <i class="ion-close"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                <input class="word-input" v-model="newNative" placeholder="new word" v-el:input/>
                            </td>
                            <td>
                                <input class="word-input" v-model="newOther" placeholder="translation" />
                            </td>
                            <td>
                                <button type="submit">
                                    <i class="ion-checkmark"></i>
                                </button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </form>
        </div>
        <div slot="right-footer">
            <button @click="this.$dispatch('next')">Interrogation <i class="ion-clipboard"></i></button>
        </div>
    </view>
</div>

</template>

<script>

import View from "./View.vue";
export default {
    name: "Vocabulary",

    components: {
        View
    },

    props: {
        data: Object
    },

    ready() {
        this.$els.input.focus();
    },

    data() {
        return {
            sortOrder: 1,
            sortKey: "native",
            newNative: "",
            newOther: ""
        };
    },

    methods: {
        changeSortOrder: function(key) {
            if (this.sortKey !== key) {
                this.sortKey = key;
                this.sortOrder = 1;
            } else {
                this.sortOrder = this.sortOrder * (-1);
            }
        },
        removeWord: function(word) {
            this.data.words[this.data.selectedLanguage].$remove(word);
        },
        addWord: function() {
            if (!this.newOther || /^\s*$/.test(this.newOther) ||
                !this.newNative || /^\s*$/.test(this.newNative)) {
                this.$dispatch('error');
            } else {
                this.data.words[this.data.selectedLanguage].push({
                    native: this.newNative,
                    other: this.newOther
                });
                this.newNative = "";
                this.newOther = "";
                this.$els.input.focus();
            }
        }
    }
}

</script>
