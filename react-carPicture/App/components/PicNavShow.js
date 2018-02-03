import React, { Component } from 'react';
import { connect } from 'dva';

import classnames from 'classnames';

class PicNavShow extends Component {
  constructor (props) {
    super(props);
  }
  //组件上树之后
  componentDidMount () {
    let $oEle = $(this.refs.pic_nav_box)
    $(this.refs.pic_control_bar).delegate('span','click',function(){
      console.log(this);
      let num = $(this).data('pagenum')
      $(this).addClass('cur').siblings().removeClass('cur');
      if($oEle.is(':animated')) return;
      $oEle.animate({"left":num*-290},400);
    })
  }
  //接受到新的属性的时候
  componentWillUpdate(nextProps){
    let page = parseInt(nextProps.position.idx/6);
    let $oEle = $(this.refs.pic_nav_box)
    if($oEle.is(':animated')) return;
    $oEle.animate({"left":page*-290},400);
  }
  showPicture() {
    const { images ,position } = this.props;
    const { color,album,idx } = position;
    let showPicUrlArr = [];
    let picUrlArr = images[color] && images[color][album];
    if(picUrlArr){
      let allItemUrlArr = picUrlArr.map((item,i) => {
        return (
        <li
          cursor="pointer"
          key={i}
          onClick={()=>{this.props.changeIdx(i)}}
          className={classnames({"cur":idx === i})}
        >
          <img src={`/images/Corolla/${color}/${album}/${item}`}/>
        </li>
      );
    });
    let count = 0;
    for(let i = 0; i< allItemUrlArr.length; ) {
      showPicUrlArr.push(
        <ul key={count ++}>
          {allItemUrlArr.splice(i,6)}
        </ul>)
    }}
    return showPicUrlArr;
  }

  showPicBar() {
    let curPage = parseInt(this.props.position.idx/6)
    let len = this.showPicture().length;
    const isLen = ()=> len > 1;
    let barArr = [];
    let width = isLen() && 270/len-8;
    let height = isLen() && 8 ;
    for(let i = 0; i < len;i++) {
      barArr.push(
        <span
          cursor="pointer"
          key={i}
          style={{"width":width,"height":height,"marginRight":3}}
          className= {classnames({"cur":i===curPage})}
          data-pagenum={i}
        >{isLen() && i}</span>)
    }
    return barArr;
  }
  render () {
    let style = {
      "position":"absolute",
      "width":3000,
      "top": 0,
    }
    return (
      <div className="picNavBox" >
        <div style={style} className="pic_nav_box" ref="pic_nav_box">
          {this.showPicture()}
        </div>
        <div className="cl"></div>
        <div className="pic_control_bar" ref="pic_control_bar">
          {this.showPicBar()}
        </div>
      </div>
    )
  }
}
export default connect(
  ({carShow}) => ({
    images: carShow.images,
    position: carShow.position,
  }),
  (dispatch) => ({
    changeIdx(idx) {
      dispatch({"type":"carShow/change_idx",idx})
    }
  })

)(PicNavShow);