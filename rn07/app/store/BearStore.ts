import {create} from 'zustand';

interface BearState { //type 선언
  bears: number;
  increasePopulation: (by: number) => void;
  removeAllBears: () => void;
}

const useBearStore = create<BearState>(set => ({ //store 생성
  bears: 0, //초기 state값 선언
  increasePopulation: (bearCount) => set(state => ({bears: state.bears + bearCount})), //bearCount를 매게변수로 받아와 bears state를 갱신해주는 method 생성
  removeAllBears: () => set({bears: 0}), //bears count를 초기화시켜주는 method 생성
}));

export {useBearStore}; //store export
