let Status = ["Index", "UseState" , "Recruiter", "Stand"];
let currentStatus = Status[0];

const App = () => {
    const [status, setStatus] = useState(currentStatus);

    const handleChange = () => {
        const currentIndex = Status.indexOf(status);
        const nextIndex = (currentIndex + 1) % Status.length;
        setStatus(Status[nextIndex]);
    };

    return (
        <div>
            <h1>Current Status: {status}</h1>
            <button onClick={handleChange}>Next Status</button>
        </div>
    );
};