import { customElement } from "solid-element";

customElement("w3-address", { address: '' }, (props, {element}) => {
    // assume main scope
    return <div>{props.address}</div>
});