<template>
  <svg :class="'icon ' + classes" xmlns=http://www.w3.org/2000/svg role='img' >
      <title>{{alt}}</title>
    
        <use :xlink:href="getSvgLink" :class="this.svgId"></use>
      <defs>
        <linearGradient id="PSgrad_0" x1="0%" x2="0%" y1="100%" y2="0%">
          <stop offset="0%" stop-color="rgb(131,150,238)" stop-opacity="1" />
          <stop offset="100%" stop-color="rgb(196,196,255)" stop-opacity="1" />
        </linearGradient>
      </defs>
  </svg>
</template>

<script>
import  svg from '../../static/assets/icons.svg'

export default {
	props: {
		alt: {
			type: String,
			default: ''
		},
		classes: {
			type: String,
			default: ''
		},
		svgId: {
			type: String,
			required: true
		}
    },
    computed:{
        getSvgLink(){
            return `${svg}#${this.svgId}`
        }
    }
}
</script>
