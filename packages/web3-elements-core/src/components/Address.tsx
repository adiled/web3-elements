import { customElement } from "solid-element";

import { Protocol } from '../constants';

export interface IOptions {
    protocol: Protocol,
    chainid: string,
    value: string
}

const style = `
    div {
        font-family: "inherit";
        cursor: pointer;
    }
`;

/**
 * @todo define rules for props
 */

customElement(
    "w3-address",
    { protocol: Protocol.Other, chainid: '', value: '' } as IOptions,
    (props, { element }) => {
        return (
            <div>
                <style>{style}</style>
                <span>{props.protocol}</span>&emsp;<span>{props.value}</span>
            </div>
        );
    });