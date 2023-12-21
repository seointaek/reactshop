import { configureStore } from "@reduxjs/toolkit";

import { user } from "./UserStore";
import { stock } from "./StockStore";
import { cartList } from "./cartList";
import { pData } from "./pData";
import { watched } from "./WatchData";

export default configureStore({
    reducer : {
        user : user.reducer,
        stock : stock.reducer,
        cartList : cartList.reducer,
        pData : pData.reducer,
        watched : watched.reducer,
    },
});

/*
redux 사용 및 적용 방법
    https://react-redux.js.org/tutorials/quick-start
    1. 라이브러리 설치 : 터미널 명령어
    npm install @reduxjs/toolkit react-redux
    2. 데이터 보관통 역할을 하는 store.js 파일 생성
    3. store.js 기본 코드 입력
    import { configureStore } from '@reduxjs/toolkit'
    export default configureStore({
        reducer: {},
    })
    4. index.js에서
    import store from './0store/store';
    import { Provider } from 'react-redux';
    <Provider store={store}><App/></Provider>
    5. <App /> 하위 컨포넌트에서 store.js 정보를 가져다 사용가능
    let user = useSelector((state) => state); *주의 모든 정보를 다 가지고 오면 안됨
    let user = useSelector((state) => state.user); * 필요한 정보를 선별
    6. store 내부에 있는 state 정보를 변경하는 방법 (함수처리)
    createSlice() 영역 내부에 reducers추가
    이 영역은 함수를 등록하는 영역
    7. 함수를 생성 후 내보내기 해야 함
    통상 함수 이름으로 내보내기 함
    .actions를 붙여서 사용
    reducers: {
    함수명(기존 state 정보) {
      기존 state 정보.name = '박소영 VVIP 고객님';
    }
  },
    export let { changeName, changeAge } = user.actions;
    8. 내보내기 한 함수 리스트 하위 컨포넌트에서 import 함
    9. 컨포넌트 안에서 함수를 사용하기 위해
    import { useDispatch} from 'react-redux' 추가
    let dispatch = useDispatch(); 변수안에 담아서 활용
    onClick={() => {
          dispatch(changeName(10));
    }}
*/