const Card = ({color, body, footer}) => {
    return (
        <div className="col">
            <div className="card-box" style={{ color: color }}>
                <div className="card-body text-center">
                    {body}
                    <hr/>
                    {footer}
                </div>
            </div>
        </div>
    );
}

export default Card;