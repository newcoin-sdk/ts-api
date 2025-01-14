import {api, voteEnd, voteStart} from "../../index";

// it("creates dao", async () => {}, 60000);

it("creates standard proposal", async () => {
	let resp = await api.daos.createDaoStandardProposal({
		dao_owner: "dx.io",
		pass_rate: 5,
		proposer: "dx.io",
		proposer_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
		summary: "thursday test",
		title: "new test just dropped",
		vote_end: voteEnd,
		vote_start: voteStart,
		url: "//"
	})
	console.log(resp);
}, 60000);

// you must whitelist yourself, and this user is already whitelisted
// no current add member proposals
it("creates add member proposal", async () => {
	let resp = await api.daos.createDaoAddMemberProposal({
		dao_owner: "dx.io",
		pass_rate: 5,
		proposer: "dx.io",
		proposer_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
		vote_end: voteEnd,
		vote_start: voteStart,
		user: "dx.io",
		type: "custodian"
	})
	console.log(resp);
}, 60000);

it("creates remove member proposal", async () => {
	let resp = await api.daos.createDaoRemoveMemberProposal({
		dao_owner: "dx.io",
		pass_rate: 5,
		proposer: "dx.io",
		proposer_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
		vote_end: voteEnd,
		vote_start: voteStart,
		user: "dx.io"
	})
	console.log(resp);
}, 60000);

it("creates stake proposal", async () => {
	let resp = await api.daos.createDaoStakeProposal({
		quantity: {contract: "pool.nco", quantity: "1.0000 GNCO"},
		to: "vectornew.io",
		dao_owner: "dx.io",
		dao_id: 0,
		pass_rate: 5,
		proposer: "dx.io",
		proposer_prv_key: "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
		vote_end: voteEnd,
		vote_start: voteStart
	})
	console.log(resp);
}, 60000);