const defaultPort = 4000;

interface Environment {
    apollo: {
        introspection: boolean,
    },
    port: number | string;
}

export const environment: Environment = {
    apollo: {
        introspection: process.env.APOLLO_INTROSPECTION === 'true',
    },
    port: process.env.PORT || defaultPort
};