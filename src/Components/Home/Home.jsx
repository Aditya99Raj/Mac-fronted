import {Carousel} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeProduct } from "./HomeProduct";

export const Home = () => {

    return(
        <div className="carousel">
            <Carousel variant="dark">

  <Carousel.Item className="Citem">
    <img style={{ height:400}}
      className="d-block w-100"
      src="https://img.freepik.com/free-psd/summer-sale-70-discount_23-2148476960.jpg?t=st=1654693425~exp=1654694025~hmac=c57450ca96324f649f531f0f26c0f594e8d99b910a7a48b42092e68a481ac5e0&w=1060"
      alt="First slide"
    />
    <Carousel.Caption className="Ccaption">
     
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img style={{ height:400}}
      className="d-block w-100"
      src="https://img.freepik.com/free-psd/summer-collection-banner-template_23-2148520730.jpg?t=st=1654693425~exp=1654694025~hmac=f6e178f732db02dee5402af51176c5f4c1ec45ff1dacb0b9c2fe62989b342bbc&w=1060"
      alt="Second slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  
  
  <Carousel.Item>
    <img style={{ height:400}}
      className="d-block w-100"
      src="https://img.freepik.com/free-psd/urban-fashion-banner-template_23-2148652498.jpg?t=st=1654693425~exp=1654694025~hmac=1b2c56e84b5694565eb9b1f259b66138f8dd139d331ca755a8271b310f70622a&w=1060"
      alt="Third slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img style={{ height:400}}
      className="d-block w-100"
      src="https://img.freepik.com/free-psd/fashion-sale-social-media-facebook-cover-design-template_169307-1171.jpg?w=1380"
      alt="Fourth slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

 <HomeProduct />
 
        
        
        
        
        </div>
    )
}