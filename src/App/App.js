import React from 'react';
import { Provider } from 'react-redux';
import store from '../Model/Store';
import '../View/App.css';
import homeConnect from '../Networking/HomeConnect';
import AppRouter from '../Management/AppRouter'

function App() { return (<Provider store={store}> {console.log('started')} 

{helloWorld()}

<AppRouter/>

</Provider>); }

export default App;

function helloWorld(){
    {homeConnect.get('posts').then(response => {
        console.log(response.data);
        //dispatch(_getTopics(response.data));
    }).catch(function(error) {
        //console.log(error.response.data);
     })}
}
