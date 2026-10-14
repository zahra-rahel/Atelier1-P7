export default function Presentation(props) {
    console.log(props);

    const { nom, prenom } = props.personne;

    return (
        <div>
            <h2>Salut {nom} {prenom}</h2>
            <hr />

            <h3>Diplômes :</h3>
            <p>{props.diplomes}</p>
        </div>
    );
}