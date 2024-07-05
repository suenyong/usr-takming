import React, { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Story.css";
import Contact from "../../home/components/contactus/Contact";
import AOS from "aos";
import { AiOutlineHome } from 'react-icons/ai';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
            display: 'flex',
            justifyContent: 'center',
        },
    },
}));

export default function Story() {
    const [videos, setVideos] = useState([]);
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    useEffect(() => {
        setLoading(true);
        AOS.init({
            duration: 900,
        });

        // 從後端 API 取得資料
        fetchVideos();
    }, []);

    const fetchVideos = () => {
        axios.get("http://192.192.140.222:8081/storyuser/storyall")
            .then(response => {
                console.log("取得的新影片資料:", response.data.data);
                setVideos(response.data.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("取得影片失敗:", error);
            });

    };

    // 获取当前页的影片
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = videos.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };


    return (
        <>
            <h1 data-aos="zoom-out-down" className="dynamic" style={{
                textAlign: 'center',
                color: '#fff',
                backgroundColor: "#90cbc0",
                width: "40%",
                marginRight: "30%",
                marginLeft: "30%",
                marginTop: "13%",
            }}>
                亮點報導
            </h1>

            <div className="centered-container">
                <div className="boxS">
                    {loading ? (
                        <h1 style={{ fontSize: 20 }}>Loading...</h1>
                    ) : (
                        currentPosts.map((video, index) => (
                            <React.Fragment key={index}>
                                <span>{video.name}<a href={video.link} target="_blank" rel="noreferrer">{video.link}</a></span>
                                <br />
                            </React.Fragment>
                        ))
                    )}

                    {/* 靜態網址 */}
                    {/* <span>樂活碳點影片介紹：<a href="https://www.youtube.com/watch?v=W_JwvYAAdcA&t=1s" target="_blank">https://www.youtube.com/watch?v=W_JwvYAAdcA&t=1s</a></span> */}
                </div>
            </div>
            {/* ====頁數==== */}
            <div className={classes.root}>
                <Pagination
                    count={Math.ceil(videos.length / postsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                />
            </div>

            {/* ====按鈕==== */}
            <a href="/" className="return-But">
                <AiOutlineHome className="return-object"></AiOutlineHome>
            </a>

            <Contact />
        </>
    )

}


