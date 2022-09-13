import IconGrid from '../components/IconGrid';
import Panel from '../components/Panel';

const Home = () => {
    return (
        <span>
            <div className="panelContainer">
                <Panel text="
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non enim lacus. Morbi at vestibulum odio. Ut scelerisque magna sed mauris feugiat, et ornare sapien mollis. Nunc a tellus in odio tempus rhoncus. Curabitur sed neque quis orci facilisis condimentum et sed magna. Phasellus posuere tempus imperdiet. Nulla facilisi.
                " />
                <button type="button" className="btn btn-primary">Wow</button>
                <div className="panel">
                    <IconGrid />
                </div>
            </div>
        </span>
    )
}

export default Home;