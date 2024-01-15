import {
	ApiPromise,
	WsProvider,
} from 'https://deno.land/x/polkadot@0.2.45/api/mod.ts';
import { load } from 'https://deno.land/std@0.211.0/dotenv/mod.ts';

async function main() {
	console.log(await load({ export: true }));

	const api = await ApiPromise.create({
		provider: new WsProvider(Deno.env.get('WS_URL')),
	});

	let count = 0;

	const unsubscribe = await api.rpc.chain.subscribeNewHeads((header) => {
		console.log(`Chain is at block: #${header.number}`);

		if (++count === 5) {
			unsubscribe();
			Deno.exit(1);
		}
	});
}

main().catch(console.error);
