import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/backgroundimage.jpg';
import Card from 'react-bootstrap/Card';

function CarouselSlide() {
  return (
    <Carousel slide={false}>
      <Carousel.Item >
        <div className='row'>
          <div className='col-sm-2'>
            <Card style={{minWidth:150}}>
              <Card.Img src={ExampleCarouselImage}   height={200} />
              
            </Card>
          </div>
          <div className='col-sm-2'>
            <Card style={{minWidth:150}}>
              <Card.Img src={ExampleCarouselImage}  height={200} />
              
            </Card>
          </div>
          <div className='col-sm-2'>
            <Card style={{minWidth:150}}>
              <Card.Img src={ExampleCarouselImage}  height={200} />
              
            </Card>
          </div>
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      {/*
      <Carousel.Item>
      <div className='row'>
          <div className='col-lg-4'>
            <Card>
              <Card.Img src={ExampleCarouselImage} width={200} height={200} />
              
            </Card>
          </div>
          <div className='col-lg-4'>
            <Card>
              <Card.Img src={ExampleCarouselImage} width={200} height={200} />
              
            </Card>
          </div>
          <div className='col-lg-4'>
            <Card>
              <Card.Img src={ExampleCarouselImage} width={200} height={200} />
              
            </Card>
          </div>
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='row'>
          <div className='col-lg-4'>
            <Card>
              <Card.Img src={ExampleCarouselImage} width={200} height={200} />
              
            </Card>
          </div>
          <div className='col-lg-4'>
            <Card>
              <Card.Img src={ExampleCarouselImage} width={200} height={200} />
              
            </Card>
          </div>
          <div className='col-lg-4'>
            <Card>
              <Card.Img src={ExampleCarouselImage} width={200} height={200} />
              
            </Card>
          </div>
        </div>

        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      */}
    </Carousel>

  );
}

export default CarouselSlide;