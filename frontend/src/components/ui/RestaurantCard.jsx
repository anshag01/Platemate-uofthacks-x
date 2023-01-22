import Container from './Container';
import { ReactComponent as Rating1 } from '../../assets/icons/Rating1.svg';
import { ReactComponent as Rating2 } from '../../assets/icons/Rating2.svg';
import { ReactComponent as Rating3 } from '../../assets/icons/Rating3.svg';
import { ReactComponent as Rating4 } from '../../assets/icons/Rating4.svg';
import { ReactComponent as Rating5 } from '../../assets/icons/Rating5.svg';

const RestaurantCard = ({
    title,
    image,
    address,
    description,
    price,
    distance,
    rating
}) => {
    return (
        <Container className="relative max-w-[90%] border shadow-lg bg-white rounded-lg p-[15px]">
            {/* Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-8 h-8 p-6 rounded-full bg-slate-300 cursor-pointer flex items-center justify-center">
                {'<'}
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-8 h-8 p-6 rounded-full bg-slate-300 cursor-pointer flex items-center justify-center">
                {'>'}
            </div>

            <img
                className="rounded-md w-full h-[200px] object-cover"
                src={image}
                alt="Nice picture!"
            />
            <div className="flex items-center justify-between text-lg">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-lg">{title}</h3>

                    <div className="">
                        {rating === 1 && <Rating1 />}
                        {rating === 2 && <Rating2 />}
                        {rating === 3 && <Rating3 />}
                        {rating === 4 && <Rating4 />}
                        {rating === 5 && <Rating5 />}
                    </div>
                </div>

                <div className="font-bold mt-4 mr-4">{distance}KM</div>
            </div>
            <div className="flex items-center ">
                <div className="">{address}</div>
                <div className="text-2xl ml-6 text-red-500">${price}</div>
            </div>
            <h3 className="max-w-[330px]">{description}</h3>
        </Container>
    );
};

export default RestaurantCard;
