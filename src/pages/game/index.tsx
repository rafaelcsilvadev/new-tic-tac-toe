export default function Game(){

    const Field = () => {
        return (
            <div>
                <span>
                    X
                </span>
                <span>
                    X
                </span>
                <span>
                    X
                </span>
            </div>
        );
    }

    return (
        <div>
            <div>
                <span>
                    Jogador 1: 2 X 5 :Jogador 2
                </span>
            </div>
            <div>
                <Field />
                <Field />
                <Field />
            </div>
        </div>
    );
}