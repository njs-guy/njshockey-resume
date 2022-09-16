import IconGrid from '../components/IconGrid';
import Panel from '../components/Panel';

const Home = () => {

    const proGoalsMd = "# Professional Goals\n" + "My ultimate goal is to become a software developer. " + "However, I felt that I didn't know enough after graduation to achieve this goal. " + "So, I went online and learned more skills such as Python, HTML, CSS, JavaScript, and Git." + " From there, I made a few open source projects to demonstrate those skills and tried to practice just about every day."

    return (
        <span>
            <div className="panelContainer">
                <Panel
                text="
                Hello! I'm Nick Shockey. I am a recent and driven graduate looking to gain professional experience with multiple open-source projects under my belt. 
                With about a 3.7 GPA, I was able to make the Dean’s List for most semesters and achieved Magnum Cum Laude. 
                I am a hard worker that is currently looking for work in IT, programming, or software development. 
                This e-portfolio will tell you about my professional goals, skills, and experience.
                " />
                <Panel heading="Professional Goals"
                text={proGoalsMd} />
                <div className="panel">
                    <IconGrid />
                </div>
            </div>
        </span>
    )
}

export default Home;