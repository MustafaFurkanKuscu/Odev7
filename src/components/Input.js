export default function Input(props) {
    return (
        <label>
            {props.children}
            <input
                type="number"
                value={props.value}
                onChange={(e)=>props.handleChange(e.target.value)}
                disabled={props.disabled}
            />
            </label>
    );
}