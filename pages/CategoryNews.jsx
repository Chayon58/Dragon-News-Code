import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    // console.log(id,data);

    

    useEffect(() => {
        const filterNews = data.filter((news) => news.category_id == id);
        console.log(filterNews);
    }, [data, id]);
    
    return (
        <div>
            CategoryNews -{id}
        </div>
    );
};

export default CategoryNews;