import PropTypes from "Prop-types"
const ServiceCard = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

ServiceCard.propTypes = {
    title: PropTypes.string.isrequired,
    description: PropTypes.string.isRequired,
}
export default ServiceCard;