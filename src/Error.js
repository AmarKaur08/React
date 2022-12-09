import React,{Component} from 'react';

class Error extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      hasError:false
    }
  }

  componentDidCatch(error,info)
  {
       this.setState({hasError:true})
  }
  render()
  {
    if(this.state.hasError)
    {
      
      return <h1>OOPPPS......Something went wrong!!</h1>
    }
    else
    {
           console.log(this.props)
     return this.props.children
    }
  }
}
export default Error