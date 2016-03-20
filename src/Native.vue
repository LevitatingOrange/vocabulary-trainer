<template>
<div>
    <view>
        <div slot="label">
            Create native
        </div>
        <div slot="content">
            <form class="full-form" @submit.prevent="this.$dispatch('next')">
                <input type="text" v-model="data.native" v-el:input/>
                <button type="submit"><i class="ion-checkmark"></i></button>
            </form>
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
    }
</script>

<style>
    .full-form {
        width: 300px;
    }
</style>