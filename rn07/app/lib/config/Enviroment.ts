// import Config from 'react-native-config';

class Enviroment {
  get baseUrl() {
    // return Config.BASE_URL ?? 'http://localhost:3000';
    return 'http://localhost:8081';
  }
  get debugKey(){
    return 'L0FONYcvjajULdjnaKpBP';
  }
}

export default new Enviroment();
