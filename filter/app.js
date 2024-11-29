import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchData = async () => {

            const result = [
                { id: 1, name: 'Math' },
                { id: 2, name: 'Biology' },
                { id: 3, name: 'Chemistry' },
                { id: 4, name: 'History' },
                { id: 5, name: 'English' },
                { id: 6, name: 'Geometry' },
                { id: 7, name: 'Reading' },
                { id: 8, name: 'Art' },
                { id: 9, name: 'PE' },
                { id: 10, name: 'Break' },
            ];
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Data Filter</h1>
        </div>
    );
}

export default App;
