import NavBar from './NavBar';
import Panel from './Panel';

const Home = () => {
    return (
        <div className="flex flex-col space-y-4">
            <Panel text="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non enim lacus. Morbi at vestibulum odio. Ut scelerisque magna sed mauris feugiat, et ornare sapien mollis. Nunc a tellus in odio tempus rhoncus. Curabitur sed neque quis orci facilisis condimentum et sed magna. Phasellus posuere tempus imperdiet. Nulla facilisi.
            " />
            <button type="button" className="btn btn-primary">Wow</button>
        </div>
    )
}

export default Home;