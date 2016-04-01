import Vue from "vue";
import App from "./App.vue";

if (!localStorage.getItem("voc-data")) {
    localStorage.setItem("voc-data", JSON.stringify({
        native: "",
        selectedLanguage: 0,
        languages: [],
        words: []
    }));
}

new Vue({
    el: "body",
    components: {App}
});
