import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
interface SliderProps {
	images: File[]
	// other props if any
}
const ImageSlider: React.FC<SliderProps> = ({ images }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	return (
		<div>
			<Slider {...settings}>
				{images.map((image, index) => (
					<div key={index}>
						<img
							src={URL.createObjectURL(image)}
							alt={`Slide ${index}`}
						/>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default ImageSlider
