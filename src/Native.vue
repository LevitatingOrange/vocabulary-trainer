<template>
<div>
    <view>
        <div slot="label">
            Native
        </div>
        <div slot="content">
            <form class="full-form" @submit.prevent="next">
                <input type="text" v-model="data.native" v-el:input/>
                <button type="submit"><i class="ion-checkmark"></i></button>
            </form>
        </div>
        <div slot="left-footer"></div>
        <div slot="right-footer">
          <button @click="next">Next <i class="ion-chevron-right"></i></button>
        </div>
    </view>
</div>
</template>

<script>
    import View from "./View.vue";
    export default {
        name: "Native",
        components: {
            View
        },

        props: {
            data: Object
        },

        ready () {
            this.$els.input.focus();
        },
        methods: {
          next: function() {
            if (!this.data.native || /^\s*$/.test(this.data.native)) {
              this.$dispatch('error');
            } else {
              this.$dispatch('next');
            }
          }
        }
    }
</script>

<style>
    .full-form {
        width: 300px;
    }
</style>
