import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem,Col,Row} from 'reactstrap';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { addComment } from '../components2/actioncreators'
import { Link,withRouter } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { render } from 'react-dom';
import { connect ,useDispatch} from 'react-redux';
import { Comments } from '../components2/comments2';
const mapStateToProps = state => {
  return {

    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
const mapDispatchToProps = dispatch => {
  return{
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
  }
  

};

class DishDetail extends Component
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
  renderDish(dish) {
    if (dish != null)
            return(
              <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
          </Card>
            );
        else
            return(
                <div></div>
            );
}
 renderComments(comments,addComment){
  if (comments != null) return(
    <ul class="list-group">
    <h4>comments</h4>
    <CommentForm  addComment={addComment} dishId = {this.props.dish} />
  <li class="list-group-item">comments.id</li>
  <li class="list-group-item">comments.rating</li>
  <li class="list-group-item">comments.comment</li>
  <li class="list-group-item">comments.author</li>
  <li class="list-group-item">comments.date</li>
  <li class="list-group-item">
    </li>
  </ul>
  
  );
  else
  return(<div></div>)
 

}
    render()
    {
        
      return(
        <div className="container">
        <div className="row">
            <Breadcrumb>

                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{this.props?.dish?.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{this.props?.dish?.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
               {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
              {this.renderComments(this.props.dish,this.props.addComment)}
            </div>
        </div>
        </div>
      );
      
    }
}
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class CommentForm extends Component
{
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    
    //this.handleLogin = this.handleLogin.bind(this);
    this.state = {
     
      isModalOpen: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) 
    {
        console.log('Current State is: ' + JSON.stringify(values));
        
        this.props.addComment(0,4,"tf","comment");
        
    }
  renderMod()
  {
    return(
    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
      <ModalHeader toggle={this.toggleModal}>Submit Comment
      </ModalHeader>
      <ModalBody>
      <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col md={10}>
                                    <Control.select model=".rating" id="rating" name="rating"
                                        placeholder="1"
                                        className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={2}>Author</Label>
                                <Col md={10}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Author"
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />

                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                           
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                        
      </ModalBody>
       </Modal>);
    
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
 render()
 {
   return(
      <div className = "container">
        <div className = "row">
        
          {this.renderMod()}
          
          <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Submit Comments</Button>
        </div>
        
      </div>
     
      );

 }
  
                               
} 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DishDetail)); 