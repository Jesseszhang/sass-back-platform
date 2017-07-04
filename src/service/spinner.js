import nprogress from 'nprogress';

export default {
	start: ()=> {
		nprogress.set(0.5)
  	nprogress.start()
	},
	end: ()=> {
		nprogress.done()
	}
}