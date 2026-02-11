import React from 'react';
import { Link } from 'react-router-dom'
import about from '../../images/blog/about-widget.jpg'
import blogs from '../../api/blogs'

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {
    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    <div className="img-holder">
                        <img src={about} alt="" />
                    </div>
                    <h4>Jenny Watson</h4>
                    <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><Link onClick={ClickHandler} to="/blog-single/The-Importance-Of-Marriage-In-Islam."><i className="ti-facebook"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/The-Importance-Of-Marriage-In-Islam."><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/The-Importance-Of-Marriage-In-Islam."><i className="ti-linkedin"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/The-Importance-Of-Marriage-In-Islam."><i className="ti-pinterest"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Post Categories</h3>
                    <ul>
                        <ul>
                            <li><Link onClick={ClickHandler} to="/blog-single/The-Importance-Of-Marriage-In-Islam.">Five Pillars of Islam<span>5</span></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/The-Importance-Of-Marriage-In-Islam.">Sunni and Shia<span>7</span></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/The-Importance-Of-Marriage-In-Islam.">Culture and Traditions<span>3</span></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/The-Importance-Of-Marriage-In-Islam.">Islamic Law<span>6</span></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/The-Importance-Of-Marriage-In-Islam.">Islamic Calendar<span>2</span></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/The-Importance-Of-Marriage-In-Islam.">Healthy Lifestyle <span>8</span></Link></li>
                        </ul>
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.map((blog, bl) => (
                            <div className="post" key={bl}>
                                <div className="img-holder">
                                    <img src={blog.screens} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/event-single/Exploring-Islamic-Insights-and-Wisdom">Muslim</Link></li>
                        <li><Link onClick={ClickHandler} to="/event-single/Exploring-Islamic-Insights-and-Wisdom">Islamic</Link></li>
                        <li><Link onClick={ClickHandler} to="/event-single/Exploring-Islamic-Insights-and-Wisdom">Halal</Link></li>
                        <li><Link onClick={ClickHandler} to="/event-single/Exploring-Islamic-Insights-and-Wisdom">Community</Link></li>
                        <li><Link onClick={ClickHandler} to="/event-single/Exploring-Islamic-Insights-and-Wisdom">Ramadan</Link></li>
                        <li><Link onClick={ClickHandler} to="/event-single/Exploring-Islamic-Insights-and-Wisdom">IslamicArt</Link></li>
                        <li><Link onClick={ClickHandler} to="/event-single/Exploring-Islamic-Insights-and-Wisdom">Donation</Link></li>
                        <li><Link onClick={ClickHandler} to="/event-single/Exploring-Islamic-Insights-and-Wisdom">Help</Link></li>
                        <li><Link onClick={ClickHandler} to="/event-single/Exploring-Islamic-Insights-and-Wisdom">MuslimUnity</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
