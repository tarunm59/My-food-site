import React, { Component } from 'react';
import DishDetail from './DishDetailComponent';
import {addComment} from "../components2/actioncreators"
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle,Breadcrumb, BreadcrumbItem } from 'reactstrap'
  import { Link,withRouter } from 'react-router-dom';
  import { connect ,useDispatch} from 'react-redux';

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
class Menu extends Component
{
    constructor(props)
    {
        super(props); 
        this.state = 
        {
         selectedDish:null
        };
    }
    onDishSelect(dish) {
      this.setState({ selectedDish: dish});
  }
  RenderMenuItem ({dish, onClick}) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}
   checker(dish)
   {
    this.onDishSelect(dish);
    
   }
    render()
    {
        const menu = this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 mt-1">
                <br></br>
                <Card key={dish.id} onClick={() => this.checker(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              
              </div>
               
            );
        });
        return (
          <div className="container">
          <div className="row">
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/Home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Menu</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                  <h3>Menu</h3>
                  <hr />
              </div>                
          </div>
          <div className="row">
              {menu}
          </div>
          <div className = "row">
          <DishDetail dish={this.state.selectedDish} addComment = {this.props.addComment} />
          </div>
      </div>
        );
      
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu)); 