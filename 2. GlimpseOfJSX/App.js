const App = () => {
    return (
        <div>
            <h1>
                Welcome to react !!
            </h1>
            <button> Click </button>

        </div>
    );
}

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);

root.render(<App />);