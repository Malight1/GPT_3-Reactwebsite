import React from "react";
import './blog.css';
import {Article} from '../../components'
import{blog01, blog02, blog03, blog04, blog05} from './imports'


const Blog = () => {
    return (  
        <div className="blog section_padding" id="blog">
            <div className="blog_heading">
                <h1 className="gradient_text">A lot is happening, We are blogging about it.</h1>
            </div>
            <div className="blog_container">
                <div className="div1">
                    <Article imgurl={blog01} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                </div>
                <div className="div2">
                    <Article imgurl={blog02} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
                    <Article imgurl={blog03} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                    <Article imgurl={blog04} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
                    <Article imgurl={blog05} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
                </div>
            </div>
        </div>
    );
}
 
export default Blog;