import baseline from '../../data/runtime-date-baseline.json';
// Stable build fallback. The Pages runtime owns the active release date.
export function getOperationalDeployDate() { return baseline.deploymentDate; }
