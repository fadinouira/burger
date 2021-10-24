import axios from 'axios' ;

const burgerService = axios.create({
    baseURL: 'https://burger-422f1-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default burgerService ;