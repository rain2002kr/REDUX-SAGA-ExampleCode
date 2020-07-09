import {takeEvery,takeLatest, put, call, delay} from 'redux-saga/effects'; //사용하는 함수만 불러옵니다.  

function* AsyncAgeUP( ){
    yield delay(1000); //1초 대기 합니다. 
    yield put({type:'AGE_UP_SYNC', value : 1}); //PUT은 DISPATCH와 같고 AGE_UP_SYNC TYPE에 1이라는 값을 보내줍니다. 
}

export function* watchLogin( ){
    yield takeEvery('AGE_UP', AsyncAgeUP); //AGE_UP 이라는 DISPATCH가 들어오면 AsyncAgeUP 함수를 실행합니다.
}