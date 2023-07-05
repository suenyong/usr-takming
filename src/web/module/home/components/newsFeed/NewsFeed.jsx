import "./styles/NewMessage.css";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import DetailButton from "./components/detailButton/DetailButton";

export default function NewsFeed() {

    const data = [
        {
            "imagePath": '../../../../_basic/images/NM_image1.jpg',
            "date": "2003/07/04",
            "activityName": "種植",
            "activityInfo": "愛護大自然"
        },
        {
            "imagePath": '../../../../_basic/images/NM_image2.JPG',
            "date": "2003/07/03",
            "activityName": "淨灘",
            "activityInfo": "愛護地球"
        },
        {
            "imagePath": '../../../../_basic/images/logo.jpg',
            "date": "2003/07/02",
            "activityName": "碳足跡",
            "activityInfo": "救救北極熊"
        },
    ]

    // const DetailButton = () => {
    //     return(
    //         <Card className="card">
    //             <img src={require('../../../../_basic/images/logo.jpg')} alt='Image_1' style={{ width: 345, height: 140 }} />
    //             <CardContent>
    //                 <Typography gutterBottom variant="h7" component="div">
    //                     <p style={{ lineHeight: 0 }}>日期:XXX</p>
    //                 </Typography>
    //                 <Typography gutterBottom variant="h6" component="div">
    //                     <p style={{ lineHeight: 1, textAlign: 'center' }}>活動名稱</p>
    //                 </Typography>
    //                 <Typography variant="body2" color="text.secondary">
    //                     一些描述內容.................
    //                 </Typography>
    //             </CardContent>
    //             <Button size="large">閱讀更多</Button>
    //         </Card> 
    //     )
    // }

    return (
        <>
            <div className="hr-line"></div>
            <h1 style={{ textAlign: 'center', color: 'navy' }}>最新消息</h1>
            <div className="box">
                {
                    data.map((item) => {
                        return (
                            <DetailButton
                                imagePath={item.imagePath}
                                date={item.date}
                                activityName={item.activityName}
                                activityInfo={item.activityInfo}
                            />
                        )
                    })
                }
                {/* <Card className="card">
                    <img src={require('../../../../_basic/images/logo.jpg')} alt='Image_1' style={{ width: 345, height: 140 }} />
                    <CardContent>
                        <Typography gutterBottom variant="h7" component="div">
                            <p style={{ lineHeight: 0 }}>日期:XXX</p>
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            <p style={{ lineHeight: 1, textAlign: 'center' }}>活動名稱</p>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            一些描述內容.................
                        </Typography>
                    </CardContent>
                    <Button size="large">閱讀更多</Button>
                </Card>

                <Card className="card">

                    <img src={require('../../../../_basic/images/logo.jpg')} alt='Image_1' style={{ width: 345, height: 140 }} />
                    <CardContent>
                        <Typography gutterBottom variant="h7" component="div">
                            <p style={{ lineHeight: 0 }}>日期:XXX</p>
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            <p style={{ lineHeight: 1, textAlign: 'center' }}>活動名稱</p>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            一些描述內容.................
                        </Typography>
                    </CardContent>
                    <Button size="large">閱讀更多</Button>
                </Card>

                <Card className="card">

                    <img src={require('../../../../_basic/images/logo.jpg')} alt='Image_1' style={{ width: 345, height: 140 }} />
                    <CardContent>
                        <Typography gutterBottom variant="h7" component="div">
                            <p style={{ lineHeight: 0 }}>日期:XXX</p>
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            <p style={{ lineHeight: 1, textAlign: 'center' }}>活動名稱</p>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            一些描述內容.................
                        </Typography>
                    </CardContent>
                    <Button size="large">閱讀更多</Button>
                </Card> */}
            </div >
        </>
    );
}