import { createContext } from "preact";

export const SwappableContext = createContext<{ getAnimateOnMount: () => boolean }>({ getAnimateOnMount: () => false });
