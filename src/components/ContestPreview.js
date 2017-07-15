import React, { Component} from 'react';

class ContestPreview extends Component{
handleClick = () => {
  console.log(this.props.contestName);
};
  render(){
    return(
      <div className="link ContestPreview" onClick={this.handleClick}>
      <div className="category-name">
        {this.props.categoryName}
      </div>
      <div className="contest-name">
        {this.props.contestName}
      </div>
    </div>
      )
  }
}

ContestPreview.PropTypes = {
  id:React.PropTypes.number.isRequired,
  categoryName: React.PropTypes.string.isRequired,
  contestName: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default ContestPreview;