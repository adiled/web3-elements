import { customElement } from "solid-element";

const style = `
    div {
    }
`;

/**
 * @todo define rules for props
 */

customElement(
    "w3-address",
    {
        protocol: '',
        chain: '',
        value: ''
    },
    (props, { element }) => {
        return (
            <div>
                Address
                <style>{style}</style>
                <span>{props.value}</span>
            </div>
        );
    });