import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//components
import Product from '../Product/product';
import Wishlist from '../Wishlist/wishlist';
//import product-condensed from '../product-condensed/product-condensed';

//services
import HttpService from '../Services/http-service';

const http = new HttpService();


class App extends Component {
   
  
      constructor(props) {
    super(props);
          
          this.state = {products:[]};
          
          //Bind functions
  this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);      
          
          this.loadData();
        
         
}
    
    loadData = () => {
        var self = this;
          http.getProducts().then(data => {
             self.setState({products: data})
          }, err => {
              
         
          });
        
    }
    
    productList = () => {
        const list = this.state.products.map((product) => 
            <div className="col-sm-4" key={product._id}>
                <Product product={product}/>
            </div>                                 
        
        );
    
        return (list);
    }
    
    
    render(){
  return (
       
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to The Swag Shop</h2>
        <div className="container-fluid App-main">
            <div className="row">
                <div className="col-sm-8">
                    <div className="row">
                {this.productList()}
                        </div>
                </div>
                
                <div className="col-sm-4">
                    <Wishlist />
                </div>
                    
            </div>
            
            <div className="row">
                <div className="col-sm-4">
                    <Wishlist />
                </div>
            </div>
         
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
    }
}

export default App;
