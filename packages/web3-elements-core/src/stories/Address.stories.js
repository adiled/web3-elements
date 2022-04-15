import '../components/Address';

import { html } from "lit-html";

export default {
  parameters: {
    layout: "centered",
  },
};

export const Primitive = () => html` <w3-address></w3-address> `;
