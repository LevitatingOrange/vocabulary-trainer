<template>
    <div id="app">
	<component :is="currentView" :data="data">
	</component>
    </div>
</template>

<script>
    import Native from "./Native.vue";
    import Languages from "./Languages.vue";
    import Vocabulary from "./Vocabulary.vue";
    
    export default {
        components: {
            Native,
            Languages,
            Vocabulary
        },
     
        data () {
            return {
                currentView: "Native",
                data: {
                    native: "",
                    selectedLanguage: 0,
                    languages: [],
                    words: []
                },
            }
        },
        events: {
            "next": function() {
                switch (this.currentView) {
                    case "Native":
                        this.currentView = "Languages";
                        break;
                    case "Languages":
                        this.currentView = "Vocabulary";
                        break;
                    default:
                        break;
                }
            },
            "back": function() {
                switch (this.currentView) {
                    case "Languages":
                        this.currentView = "Native";
                        break;
                    case "Vocabulary":
                        this.currentView = "Languages";
                        break;
                    default:
                        break;
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
