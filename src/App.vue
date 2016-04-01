<style>

    .swipe-transition {
        transition: all 0.2s ease;
    }

    .swipe-enter {
        opacity: 0;
        transform: translateX(-400px);
    }

    .swipe-leave {
        opacity: 0;
        transform: translateX(400px);
    }

    .swipe-back-transition {
        transition: all 0.2s ease;
    }

    .swipe-back-enter {
        opacity: 0;
        transform: translateX(400px);
    }

    .swipe-back-leave {
        opacity: 0;
        transform: translateX(-400px);
    }

    /* Error animation */

    .error {
        animation-duration: 0.15s;
        animation-iteration-count: 3;
        animation-name: error;
        animation-timing-function: linear;
    }

    @keyframes error {
        from {
            transform: translateX(0px);
        }
        25% {
            transform: translateX(50px);
        }
        75% {
            transform: translateX(-50px);
        }
        to {
            transform: translateX(0px);
        }
    }

</style>

<template>

    <div id="app">
        <component :is="currentView" :data="data" :total="5" :transition="back == true? 'swipe-back':'swipe'"
                   transition-mode="out-in" :class="{'error': error}">
        </component>
    </div>

</template>

<script>

    import Native from "./Native.vue";
    import Languages from "./Languages.vue";
    import Vocabulary from "./Vocabulary.vue";
    import Interrogation from "./Interrogation.vue";

    export default {
        components: {
            Native,
            Languages,
            Vocabulary,
            Interrogation
        },

        ready() {
            window.addEventListener("storage", function (e) {
                //TODO: figure out why this won't work.
                this.data = JSON.stringify(e.newValue);
                console.log(this.data);
            }, false);
        },
        data() {
            let initialData = JSON.parse(localStorage.getItem("voc-data"));
            return {
                currentView: "Native",
                back: false,
                error: false,
                data: initialData
            }
        },

        watch: {
            "data": {
                handler: function (val, oldVal) {
                    localStorage.setItem("voc-data", JSON.stringify(val));
                },
                deep: true
            }
        },

        events: {
            "error": function () {
                this.error = true;
                setTimeout(_ => this.error = false, 450);
            },
            "next": function () {
                this.back = false;
                switch (this.currentView) {
                    case "Native":
                        this.currentView = "Languages";
                        break;
                    case "Languages":
                        this.currentView = "Vocabulary";
                        break;
                    case "Vocabulary":
                        this.currentView = "Interrogation";
                        break;
                    default:
                        break;
                }
            },
            "back": function () {
                this.back = true;
                switch (this.currentView) {
                    case "Languages":
                        this.currentView = "Native";
                        break;
                    case "Vocabulary":
                        this.currentView = "Languages";
                        break;
                    case "Interrogation":
                        this.currentView = "Vocabulary";
                        break;
                    default:
                        break;
                }
            }
        }
    }

</script>
