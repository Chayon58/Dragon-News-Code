import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    // console.log(id,data);

    const [categoryNews,setCategoryNews] = useState([]);

    useEffect(() => {
        const filterNews = data.filter((news) => news.category_id == id);
        console.log(filterNews);

        setCategoryNews(filterNews);
    }, [data, id]);
    
    return (
        <div>
            Total {categoryNews.length} found
        </div>
    );
};

export default CategoryNews;