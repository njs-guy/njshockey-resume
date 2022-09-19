import SkillIcon from "./SkillIcon";

const IconGrid = () => {
    return(
        <span>
            <h1 className="panelHeading">What I can do</h1>
            <h2 className="prose-xl">Extremely familiar</h2>
            <div className="flex flex-row gap-4 flex-wrap">
                <SkillIcon src="../src/assets/js.svg" alt="JavaScript" />
                <SkillIcon src="../src/assets/python.svg" alt="Python" />
                <SkillIcon src="../src/assets/vuejs.svg" alt="VueJS" />
                <SkillIcon src="../src/assets/html5.svg" alt="HTML 5" />
                <SkillIcon src="../src/assets/css3.svg" alt="CSS" />
                <SkillIcon src="../src/assets/windows.svg" alt="Windows" />
            </div>
            <h2 className="prose-xl">Very familiar</h2>
            <div className="flex flex-row gap-4 flex-wrap">
                <SkillIcon src="../src/assets/react-fa.svg" alt="React" />
                <p>C#</p>
                <SkillIcon src="../src/assets/markdown.svg" alt="Markdown" />
                <SkillIcon src="../src/assets/github.svg" alt="GitHub" />
                <SkillIcon src="../src/assets/gitlab.svg" alt="GitLab" />
                <SkillIcon src="../src/assets/git.svg" alt="Git" />
                <SkillIcon src="../src/assets/stack-overflow.svg" alt="Stack Overflow, our lord and savior" />
            </div>
            <h2 className="prose-xl">Pretty familiar</h2>
            <div className="flex flex-row gap-4 flex-wrap">
                <SkillIcon src="../src/assets/npm.svg" alt="NPM" />
                <SkillIcon src="../src/assets/yarn.svg" alt="Yarn" />
                <SkillIcon src="../src/assets/linux.svg" alt="Linux (i use arch btw)" />
                <SkillIcon src="../src/assets/tailwindcss.svg" alt="tailwindcss" />
                <SkillIcon src="../src/assets/bootstrap.svg" alt="BootStrap" />
                
                <SkillIcon src="../src/assets/godot.svg" alt="Godot" />
                <SkillIcon src="../src/assets/free-code-camp.svg" alt="Free Code Camp" />
            </div>
            <h2 className="prose-xl">Wish I knew more</h2>
            <div className="flex flex-row gap-4 flex-wrap">
                <SkillIcon src="../src/assets/rust.svg" alt="Rust" />
                <SkillIcon src="../src/assets/cpp.svg" alt="C++" />
                <SkillIcon src="../src/assets/sql.svg" alt="SQL/SQLite/MySQL/etc." />
                <SkillIcon src="../src/assets/bash.svg" alt="Bash/zsh/fish/Powershell" />
                <SkillIcon src="../src/assets/unity.svg" alt="Unity" />
            </div>
        </span>
    )
}

// Text items are placeholder

export default IconGrid;