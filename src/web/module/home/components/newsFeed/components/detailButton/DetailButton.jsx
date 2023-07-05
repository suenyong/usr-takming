import { Button, Card, CardContent, Typography } from '@mui/material';


export default function DetailButton(props) {

    return (
        <Card className="card">
            <img src={require('../../../../../../_basic/images/NM_image3.jpg')} alt='Image_1' style={{ width: 345, height: 140 }} />
            <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                    <p style={{ lineHeight: 0 }}>日期:{props.date}</p>
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    <p style={{ lineHeight: 1, textAlign: 'center' }}>{props.activityName}</p>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.activityInfo}
                </Typography>
            </CardContent>
            <Button size="large">閱讀更多</Button>
        </Card>
    )
}