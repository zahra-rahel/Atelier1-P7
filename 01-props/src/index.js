import React from 'react';
import ReactDOM from 'react-dom/client';
import PresentationClasse from './components/PresentationClasse';

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

function App() {
    const personne1 = {
        nom: "Rami",
        prenom: "Ahmed"
    };

    const diplomes = ["Bac", "Licence", "Master"];

    return (
        <div>
            <PresentationClasse
                personne={personne1}
                diplomes={diplomes}
            />
        </div>
    );
}

root.render(<App />);