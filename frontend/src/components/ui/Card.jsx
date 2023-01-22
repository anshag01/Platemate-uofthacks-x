import Button from './Button';

const Card = (props) => {
    return (
        <div
            className={`w-[400px] p-2 flex md:flex-row flex-col items-center justify-center gap-y-4 md:gap-x-8 md:text-left text-center rounded-lg shadow-lg ${props.className}`}
        >
            <img
                src={props.pic}
                alt="pic1"
                className="w-14 h-14 md:w-20 md:h-20"
            />
            <div className="">
                <h1 className="font-bold text-xl">{props.title}</h1>
                <h1>{props.address}</h1>
            </div>
            <Button text="Check" />
        </div>
    );
};

export default Card;
