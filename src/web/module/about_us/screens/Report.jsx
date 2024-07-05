import AOS from "aos";
import "../styles/Report.css";
import React, { useEffect, useRef, useState } from "react";
import Contact from "../../home/components/contactus/Contact";
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

export default function Report() {

    const [reports, setreports] = useState([]);
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    useEffect(() => {
        AOS.init({
            duration: 900,
        });
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = reports.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };


    const fileName = "大學生社會責任年度報告書.pdf";
    const filePath = "/path/to/your/pdf/file.pdf";
    return (
        <>
            <h1 data-aos="zoom-out-down" className="dynamic" style={{
                textAlign: 'center',
                color: '#fff',
                backgroundColor: "#90cbc0",
                width: "50%",
                marginRight: "25%",
                marginLeft: "25%",
                marginTop: "13%",
            }}>
                大學生社會責任年度報告書
            </h1>
            <div className="centered-container_Report">
                <div className="boxR">
                    {loading ? (
                        <h1 style={{ fontSize: 20 }}>Loading...</h1>
                    ) : (
                        currentPosts.map((report, index) => (
                            <React.Fragment key={index}>
                                <span>{report.name}<a href={report.link} target="_blank" rel="noreferrer">{report.link}</a></span>
                                <br />
                            </React.Fragment>
                        ))
                    )}
                </div>
            </div>

            {/* ====頁數==== */}
            <div className={classes.root}>
                <Pagination
                    count={Math.ceil(reports.length / postsPerPage)}
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
    );
}