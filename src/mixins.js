export const misMixins = {
	data(){
		return{
        	toggle:false
		}
	},
	methods:{
		toggle_active:function(){
			this.toggle = !this.toggle;
		}
	}
}