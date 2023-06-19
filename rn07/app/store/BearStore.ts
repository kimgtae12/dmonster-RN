import {create} from 'zustand';

interface BearState { //type 선언
  bears: number;
  increasePopulation: (by: number) => void;
  removeAllBears: () => void;
}

interface LoadingState {
  isLoading : boolean;
  toggleLoading : (loading : boolean) => void;
}

const useBearStore = create<BearState>(set => ({ //store 생성
  bears: 0, //초기 state값 선언
  increasePopulation: (bearCount) => set(state => ({bears: state.bears + bearCount})), //bearCount를 매게변수로 받아와 bears state를 갱신해주는 method 생성
  removeAllBears: () => set({bears: 0}), //bears count를 초기화시켜주는 method 생성
}));

const useLoadingStore = create<LoadingState>(set => ({
  isLoading : false, //로딩 초기 상태값 정의
  toggleLoading : (loading) => set(state => ({isLoading : loading})) //loading update
}))


export {useBearStore , useLoadingStore}; //store export
