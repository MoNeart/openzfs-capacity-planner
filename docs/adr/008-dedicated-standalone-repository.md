# ADR 008: Dedicated standalone repository

- Status: Accepted
- Date: 2026-09-24
- Decision owner: Project owner

## Context

Storage Lab Capacity is consulting-owned work developed from public information. Although the calculator may be useful in other environments, it is not a Knowledge Lab, Foundry VTT, or Spectra codebase and should not inherit their repository history, access controls, or deployment boundaries.

The calculator already has a public ChatGPT Sites deployment at <https://storage-lab-capacity.moneart.chatgpt.site>.

## Decision

Maintain Storage Lab Capacity in a dedicated standalone Git repository.

- Preserve the existing live site and its Sites project identifier.
- Keep the source and history outside Knowledge Lab, Foundry VTT, and Spectra workspaces.
- Treat the project as consulting-owned work owned by Lovell Production Company and based on public information.
- Publish it as the standalone public GitHub repository `openzfs-capacity-planner` under the owner's personal account.
- License the original application code under the MIT License; dependencies retain their respective licenses.

## Consequences

- The project can be developed and versioned independently.
- The existing deployment remains addressable at its current URL.
- GitHub publication is separated from the existing ChatGPT Sites deployment, which retains its current URL and project identifier.
- Any future migration must preserve the separation established here or supersede this ADR explicitly.
