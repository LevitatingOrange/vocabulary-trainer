<template>
    <div class="view">
	<div class="header-bar">
	    <div class="header-label">
		{{ label }}
	    </div>
	    <div class="header-info">
		{{ info }}
	    </div>
	</div>
	<div class="content">
	    <slot name="content"></slot>
	</div>
	<div class="footer-bar">
	    <slot name="footer"</slot>
	</div>
    </div>
</template>
<script>
 export default {
     props: {
	 label: String,
	 info: String,
	 
     }
 }
</script>
