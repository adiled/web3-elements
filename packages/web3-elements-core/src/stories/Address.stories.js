import '../components/Address';

import { html } from "lit-html";

export default {
  parameters: {
    layout: "centered",
  },
};

export const Primitive = () => html`
  <w3-address protocol='eth' value="0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B">
`;
