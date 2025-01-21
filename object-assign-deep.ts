function objectAssignDeep<T extends Record<string, any>, U extends any[]>(target: T, ...sources: U): T & U {
  for (const source of sources) {
    for (const [key, value] of Object.entries(source || {})) {
      (target as Record<string, any>)[key] = value && typeof value === 'object' && !Array.isArray(value) ? objectAssignDeep(structuredClone(target[key] || {}), value) : structuredClone(value);
    }
  }
  return target as T & U;
}

export { objectAssignDeep };
