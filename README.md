# Storage Lab Capacity

A standalone web calculator for estimating usable OpenZFS storage capacity across storage servers and JBOD expansion shelves. It also includes a decimal/binary unit converter for values such as TB to TiB and PB to PiB.

Live site: [storage-lab-capacity.moneart.chatgpt.site](https://storage-lab-capacity.moneart.chatgpt.site)

## Local development

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Validation:

```bash
npm run lint
npm test
```

## Deployment

The existing public deployment is managed by ChatGPT Sites. The `.openai/hosting.json` project identifier is intentionally retained so the live site can continue to be updated from this source without creating a replacement deployment.

## Project governance

- This is consulting-owned work owned by Lovell Production Company.
- The implementation is based on public information, including the OpenZFS capacity-calculation walkthrough linked in the application. It contains no proprietary customer data or private source material.
- It is independent of Knowledge Lab, Foundry VTT, and Spectra workspaces.
- The repository placement and ownership decision is recorded in [ADR 008](docs/adr/008-dedicated-standalone-repository.md).

## License

Copyright © 2026 Lovell Production Company. Released under the [MIT License](LICENSE).
