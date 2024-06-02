import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import PostFilter from './components/PostFilter';
import Posts from './components/Posts';
import './styles/App.css';

const App = () => {
    const [filter, setFilter] = React.useState('all');

    return (
        <div>
            <Header />
            <Home />
            <PostFilter setFilter={setFilter} />
            <Posts filter={filter} />
        </div>
    );
};

export default App;
