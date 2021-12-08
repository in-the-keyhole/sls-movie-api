const defaultPort = 4000;

interface Environment {
    apollo: {
        introspection: boolean,
        isLambda: boolean
    },
    port: number | string;
}

export const environment: Environment = {
    apollo: {
        introspection: process.env.APOLLO_INTROSPECTION === 'true',
        isLambda: process.env.APOLLO_LAMBDA === 'true' || true
    },
    port: process.env.PORT || defaultPort
};