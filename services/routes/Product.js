import { http } from '../config'

export default	{

  store:(product)=>{
    return http.post('product',product);
  },

  update:(product)=>{
    return http.put('product',product);
  },

  show:()=>{
    return http.get('products')
  },

  delete:(product)=>{
    return http.delete('product', { data: product })
  }
}

/*
Vue Component or Store/modules/* Example

import Product from './services/produtos'

export default {
  name: 'app',
  data () {
    return {
      product:{
        id: '',
        name: '',
        amount: '',
        value: ''
      },
      errors: {}
    }
  },
  methods:{
    show(){
      Product.show().then(res => {
        this.products = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    store(){
      if(!this.product.id){
        Product.store(this.product).then(res => {
          this.product = {}
          alert('Registered successfully!')
          this.show()
        }).catch(err => {
          this.errors = err.response.data.errors
        })
      }else{
        Product.update(this.product).then(res => {
          this.product = {}
          this.errors = {}
          alert('Successfully updated!')
          this.show()
        }).catch(err => {
          this.errors = err.response.data.errors
        })
      }
    }
  }
}

*/
