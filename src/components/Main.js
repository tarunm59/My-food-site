import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './menucomponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../components2/dishes';
import {LEADERS} from '../components2/leaders';
import {COMMENTS} from '../components2/comments';
import {PROMOTIONS} from '../components2/promotions';
import { addComment } from '../components2/actioncreators';
import Home1 from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Contact from './ContactComponent';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import About from './AboutComponent';
import Footer from './FooterComponent'
import rrf from './rrf';
const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
  }
const mapDispatchToProps = dispatch => ({
  
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
  
  });
class Main extends Component {

  constructor(props) {

    super(props);
   
    this.state = {
        dishes: DISHES,
        selectedDish: null,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
    };
  }
 
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
    
  }
  Home2 () {
    return(
        <Home1 
            dish={this.props.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
            leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
    );
  }
  DishWithId ({match})  {
    return(
      <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
      comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
      addComment={this.props.addComment}
    />
    );
  }
 
  render() {
    
    return (
      <div>
        <Header/>  
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Switch>
              <Route path='/Home' component={() => this.Home2()} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}  />
              
            } />
              <Route exact path='/contactus' component={Contact} />
              <Route path='/menu/:dishId' component={()=>this.DishWithId()} />
              <Route exact path = '/Aboutus' component = {()=> <About leaders = {this.props.leaders}/>}/>
              <Route exact path = '/rrf' component = {rrf}/>
              <Redirect to="/Home" />
          </Switch>
          
          
          
          
        <Footer/>
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); 