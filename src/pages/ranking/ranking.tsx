import { FC } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { Row, Col, Upload, Carousel, Typography, Button } from 'antd';
import GradeBar from './components/gradeBar';
import './ranking.scss'

type Item = {
    id: number;
    image: string;
}

const CarouselItem: FC<{ item: Item }> = ({ item }) => {
    const { id, image } = item;
    return (
        <div style={{ position: 'relative' }}>
            <div className='ranking-icon'>{id}</div>
            <div className='carousel-item' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/' + image})` }} />
        </div>
    )
};

const RankingPage = () => {

    const items: Item[] = [
        {
            id: 1,
            image: 'image1.png'
        },
        {
            id: 2,
            image: 'image2.png'
        },
        {
            id: 3,
            image: 'image3.png'
        }
    ]

    return (
        <div className="ranking-root">
            <Row>
                <Col flex={1}>
                    <Upload.Dragger action="/upload.do" listType="picture-card">
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">사진을 올려 놓거나 클릭하여 업로드 하세요!</p>
                    </Upload.Dragger>
                </Col>
            </Row>
            <div style={{ display: 'flex', flexDirection: "column", gap: '10px' }}>
                <Row>
                    <Col flex={1} style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '100%' }}>
                            <Carousel effect="scrollx" className='carousel' autoplay >
                                {
                                    items.map(item => (
                                        <div key={item.id}>
                                            <CarouselItem item={item} />
                                        </div>
                                    ))
                                }
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col flex={1}>
                        <Button block type="primary">다시하기</Button>
                    </Col>
                </Row>
            </div>

            <div style={{ display: 'flex', flexDirection: "column", gap: '10px' }}>
                <Row>
                    <Col >
                        <Typography.Title level={4} style={{ margin: 0 }}>Result</Typography.Title>
                    </Col>
                </Row>
                <Row align="middle" style={{ justifyContent: "space-between" }}>
                    <Col>상위 5%</Col>
                    <Col><Button>다른 상위 5% 보기</Button></Col>
                </Row>
                <Row>
                    <Col flex={1}><GradeBar type='row' /></Col>
                </Row>
            </div>

            <div style={{ display: 'flex', flexDirection: "column", gap: '10px' }}>
                <Row gutter={[0, 15]}>
                    <Col span={24}>   <Typography.Title level={4} style={{ margin: 0 }}>Categories</Typography.Title></Col>
                    <Col span={24}><Button block >나는 강아지상?</Button></Col>
                    <Col span={24}><Button block >나는 무슨 포켓몬상?</Button></Col>
                    <Col span={24}><Button block >나의 외모 MBTI는?</Button></Col>
                    <Col span={24}><Button block >닮은꼴 연예인</Button></Col>
                </Row>
            </div>


        </div>
    )
}

export default RankingPage;