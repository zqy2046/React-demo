export default {
  "namespace": "carShow",
  "state":{
    "images":{},
    "position":{
      "album": "view",
      "idx": 0,
      "color": ""
    }
  },

  "reducers":{
    init(state,{ results }) {
      return {
        ...state,
        "images":results,
        "position":{
          ...state.position,
          color:Object.keys(results)[0],
        }
      }
    },
    change_Album(state,{album}) {
      return {
        ...state,
        "position":{
          ...state.position,
          album,
          idx:0,
        }
      }
    },
    change_color(state,{ color }) {
      return {
        ...state,
        "position":{
          ...state.position,
          color,
          idx:0,
          album:'view'
        }
      }
    },
    change_idx(state,{ idx }){
      console.log(idx);
      return {
        ...state,
        "position":{
          ...state.position,
          idx,
        }
      }
    },
    go_next(state) {
      let albums = state.images[state.position.color];
      let arr = ["view" , "center" , "detail"].filter((item)=>{
        return albums.hasOwnProperty(item);
      });
      //取得当前图集位置
      let albumIndex = arr.indexOf(state.position.album);
      //取得当前颜色位置
      let colorIndex = Object.keys(state.images).indexOf(state.position.color);
      //颜色数组;
      let colorArr = Object.keys(state.images)
      //颜色长度;
      let colorLength = Object.keys(state.images).length;
      console.log(albums[state.position.album].length);
      if(state.position.idx < albums[state.position.album].length-1) {
        return {
          ...state,
          "position": {
            ...state.position,
            idx: state.position.idx + 1,
          }
        }
      }else if(albumIndex < arr.length-1){
        return{
          ...state,
          "position":{
            ...state.position,
            album: arr[ albumIndex + 1 ],
            idx:0
          }
        }
      }else if(colorIndex < colorLength-1 ){
        return {
          ...state,
          position : {
            ...state.position,
             color:colorArr[colorIndex + 1],
            idx: 0,
          }
        }
      }else{
        alert("到头了啊啊啊啊啊啊啊,点你妹啊!!!")
      }
      return state;
    },
    go_prev(state) {
      //当前图集
      let albums = state.images[state.position.color];
      let arr = ["view" , "center" , "detail"].filter((item)=>{
        return albums.hasOwnProperty(item);
      });
      //取得当前图集位置
      let albumIndex = arr.indexOf(state.position.album);
      //取得当前颜色位置
      let colorIndex = Object.keys(state.images).indexOf(state.position.color);
      //颜色数组;
      let colorArr = Object.keys(state.images)
      //颜色长度;
      let colorLength = Object.keys(state.images).length;
      if(state.position.idx > 0) {
        return {
          ...state,
          "position": {
            ...state.position,
            idx: state.position.idx - 1,
          }
        }
      }else if(colorIndex > 0 ){
        return {
          ...state,
          position : {
            ...state.position,
            color:colorArr[colorIndex - 1],
          }
        }
      }else if(albumIndex > 0){
        return{
          ...state,
          "position":{
            ...state.position,
            album: arr[ albumIndex - 1 ],
          }
        }
      } else{
        alert("到头了啊啊啊啊啊啊啊,点你妹啊!!!")
      }
      return state;
    },

  },
  "effects": {
    *fetchInitData_async({ payload },{ call,put }){
      const { results } = yield fetch('/car').then(data => data.json())
      yield put({ "type": "init",results});
    }
  }
}