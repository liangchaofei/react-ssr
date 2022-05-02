import React from 'react';
import Header from '../../components/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <div>weclome to home213</div>
              <button onClick={() => console.log('click')}>click</button>
        </div>
    )
}
export default  Home;