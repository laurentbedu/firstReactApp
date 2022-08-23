
function MyCard(props){

    return (
        <div className="card">
            <img src={props.imageSrc} className="card-img-top" alt="image de quelque chose" />
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">{props.buttonText || "Go To"}</a>
            </div>
        </div>
    );
}

export default MyCard;