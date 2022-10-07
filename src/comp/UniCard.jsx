import { Card, Button } from 'antd';
import {useNavigate} from "react-router-dom";

const { Meta } = Card;

export default function UniCard(props) {
    const navigate = useNavigate();
    const goBack = () => {
        navigate("/unis");
    }
    console.log(props)
    return (
        <Card hoverable style={{width: 240, margin: '0 auto'}} cover={<img alt="example" src={'https://logo.clearbit.com/'+props.domains} />}>
            <Meta style={{justifyContent: 'center'}} title={props.university.name} description={props.university.country} />
            <a href={props.webpage} target="blank">{props.webpage}</a>
            <Button type="primary" onClick={goBack}>Назад</Button>
        </Card>
    );
}