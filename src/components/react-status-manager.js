import { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    statusList: PropTypes.array,
    status: PropTypes.any
  };

  static defaultProps = {
    statusList: []
  };
  /*===properties end===*/

  render(){
    const { className, status, statusList, children, ...props } = this.props;
    return (
      <div {...props} className={ classNames('react-status-manager',className) } data-status={status}>
        {
          children.map((child,index)=>{
            return status === statusList[index] && child;
          })
        }
      </div>
    );
  }
}
