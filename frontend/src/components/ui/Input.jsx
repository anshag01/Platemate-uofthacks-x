const Input = (props) => {
    const { placeholder, type } = props;

    return (
        <input
            type={type}
            className="outline-0 py-3 px-2 w-full bg-[#E8E8E8] rounded-lg border-transparent border-2 hover:border-[#DF72E1] hover:ease-in-out duration-100"
            placeholder={placeholder}
        />
    );
};

export default Input;
