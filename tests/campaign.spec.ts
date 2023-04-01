
import {get_account, reset_experiment, set_mockup, set_mockup_now} from "@completium/experiment-ts";

import { campaign } from './binding/campaign/campaign'
import { usdc } from './binding/usdc/usdc'
import { Address, Bytes, Nat } from "@completium/archetype-ts-types";

const assert = require('assert')

/* Accounts ---------------------------------------------------------------- */

const alice = get_account('alice');

/* Initialisation ---------------------------------------------------------- */

describe('Initialisation', async () => {
  it('Reset experiment', async () => {
    await reset_experiment({
      account: 'alice',
      endpoint: 'mockup',
      quiet: true,
    });
  });
  it('set_mockup', async () => {
    set_mockup()
    set_mockup_now(new Date())
  });
})

/* Scenario ---------------------------------------------------------------- */

describe('Campaign', async () => {
  it('Deploy campaign', async () => {
    await usdc.deploy(alice.get_address(), new Nat("100000000000000"+("0".repeat(18))), new Bytes("00"), {as: alice})
    await campaign.deploy(alice.get_address(), new Address(usdc.address as string) ,new Nat("10000"+("0".repeat(18))), new Bytes("00"), { as: alice })
  });
  it("")
})

// describe('[HELLO] Call entry', async () => {
//   it("Call 'myentry'", async () => {
//     const s_before = await hello.get_s()
//     assert(s_before === "")
//     await hello.exec({ as : alice })
//     const s_after = await hello.get_s()
//     assert(s_after === "Hello Archetype World!")
//   })
// })
