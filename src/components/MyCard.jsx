import { useState } from "react";

function MyCard(props){

    const test = "coucou";

    const [cardTitle, setCardTtile] = useState(props.cardTitle);
    //permet de créer un state pour la mise à jour auto de la page
    //elt 1 est le nom du state
    //elt 2 est le setter du state pour la mise à jour
    //valeur dans le useState = initialisation du state
    const [counter, setCounter] = useState(0);

    const stat = useState();

    const handleClick = (evt) => {
        evt.preventDefault();
        setCardTtile("Nouveau titre");
        const newCounterValue = counter + 1;
        setCounter(newCounterValue);
        console.log(stat);
    }

    return (
        <div className="card">
            <img src={props.imageSrc} className="card-img-top" alt="quelque chose" />
            <div className="card-body">
                <h5 className="card-title">{cardTitle} / {counter}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary" onClick={handleClick}>{props.buttonText || test}</a>
            </div>
        </div>
    );
}

export default MyCard;