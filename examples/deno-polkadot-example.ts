import {
	ApiPromise,
	WsProvider,
} from 'https://deno.land/x/polkadot@0.2.45/api/mod.ts';
import { stringToU8a } from 'https://deno.land/x/polkadot@0.2.45/util/mod.ts';
import { Balance } from 'https://deno.land/x/polkadot@0.2.45/types/interfaces/index.ts';
import { load } from 'https://deno.land/std@0.211.0/dotenv/mod.ts';

async function main() {
	console.log(await load({ export: true }));

	const api = await ApiPromise.create({
		provider: new WsProvider(Deno.env.get('WS_URL')),
	});
	console.log(stringToU8a('hello world'));

	console.log(
		`Connected to node: ${
			(await api.rpc.system.chain()).toHuman()
		} [ss58: ${api.registry.chainSS58}]`,
	);
	// Fetch the current era
	const currentEra = await api.query.staking.currentEra();
	console.log('Current era', currentEra.toHuman());

	// reading a constant
	const ED: Balance = api.consts.balances.existentialDeposit;
	console.log('ED :', ED.toHuman());

	Deno.exit();
}

main().catch(console.error);
