import './styles/main.css';
import MyCard from './MyCard';

function Main(){

    return (
        <>
            <div>Main Content</div>
            <MyCard imageSrc="https://picsum.photos/id/237/200/300" cardTitle="Titre 1" buttonText="Changer l'image"/>
            <MyCard imageSrc="https://picsum.photos/id/238/200/300" cardTitle="Titre 2"/>
            <MyCard imageSrc="https://picsum.photos/id/239/200/300" cardTitle="Titre 3"/>
        </>
    );
}

export default Main;