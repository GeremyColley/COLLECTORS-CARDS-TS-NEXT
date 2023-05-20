import mov from '../assets/movies.json';
import Card from './Card';

interface Props {
    titre: string;
}

function Cards({titre}: Props): JSX.Element | null {

    return (
        <div className='cards'>
            <h1>{titre} - Alice</h1>
            {mov.map( (elem) => { return(
                <Card Titre={elem.category} ListMovies={elem.images} />
            )})}
        </div>
    );
};

export default Cards;