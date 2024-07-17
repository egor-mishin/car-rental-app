import { ComponentProps, ComponentType, ReactNode } from 'react';

type Providers = [ComponentType<any>, ComponentProps<any>?][];
export const combineProviders = (providers: Providers) =>
	providers.reduce(
		(AccumulatedProviders: any, [Provider, props = {}]) =>
			({ children }: { children: ReactNode }) =>
				(
					<AccumulatedProviders>
						<Provider {...props}>
							<>{children}</>
						</Provider>
					</AccumulatedProviders>
				),
		({ children }: { children: ReactNode }) => <>{children}</>,
	);
