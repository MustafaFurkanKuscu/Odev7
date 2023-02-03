export default function Inputtext(props) {
    return (
        <label>
            {props.children}
            <input
                type="text"
                value={props.value}
                onChange={(e)=>props.handleChange(e.target.value)}
                disabled={props.disabled}
            />
            </label>
    );
}