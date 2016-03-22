

<template>

<div class="view">
    <div class="header-bar">
        <div class="header-label">
            <slot name="label"></slot>
        </div>
        <div class="header-info">
            <slot name="info"></slot>
        </div>
    </div>
    <div class="content">
        <slot name="content"></slot>
    </div>
    <div class="footer-bar">
        <slot name="left-footer">
            <button @click="this.$dispatch('back')"><i class="ion-chevron-left"></i> Back</button>
        </slot>
        <slot name="footer"></slot>
        <slot name="right-footer">
            <button @click="this.$dispatch('next')">Next <i class="ion-chevron-right"></i></button>
        </slot>
    </div>
</div>

</template>
