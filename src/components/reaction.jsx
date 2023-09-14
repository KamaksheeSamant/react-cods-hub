
const Reaction = ({ reaction }) => {
    const { icon, quantity } = reaction;

    return (
        <div>
            <div>Icon: {icon}</div>
            <div>Quantity: {quantity}</div>
        </div>
    );
};

export default Reaction;