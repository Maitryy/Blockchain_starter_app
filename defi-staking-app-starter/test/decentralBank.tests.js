// const { assert } = require('console');
const assert = require('assert');
const Tether = artifacts.require('Tether');
const RWD = artifacts.require('RWD');
const DecentralBank = artifacts.require('DecentralBank');

require('chai')
.use(require('chai-as-promised'))
.should()

contract('DecentralBank', ([owner, customer]) => {
    let tether, rwd, decentralBank;

    function tokens(number) {
        return web3.utils.toWei(number, 'ether')
    }

    before(async () => {
        tether = await Tether.new();
        rwd = await RWD.new();
        decentralBank = await DecentralBank.new(rwd.address, tether.address);
        // all tokens to Dbank
        await rwd.transfer(decentralBank.address, tokens('1000000') )

        //transfer 100 tkns to customer

        await tether.transfer(customer, tokens('100'), {from : owner})
    })

    describe('Mock Tether Deployment', async () => {
        it('matches names successfully', async () => {
            // let tether = await Tether.new();
            //load contracts..
            const name = await tether.name();
            assert.equal(name, 'Mock Tether Token')
        })
    })

    describe('Reward Token', async () => {
        it('matches names successfully', async () => {
            // let rwd = await RWD.new();
            const name = await rwd.name();
            assert.equal(name, 'Reward Token')
        })
    })

    describe('Decentral Bank Deployment', async () => {
        it('matches names successfully', async () => {
            // let rwd = await RWD.new();
            const name = await decentralBank.name();
            assert.equal(name, 'Decentral Bank')
        })

        it('contract has tokens', async() => {
            let balance = await rwd.balanceOf(decentralBank.address)
            assert.equal(balance, tokens('1000000'))
        })
    })

    describe('Yield Farming', async() => {

        it('rewards token for staking', async() => {

            let result
            result = await tether.balanceOf(customer)
            assert.equal(result.toString(), tokens('100'),'customer mock wallet balance before staking' )

            await tether.approve(decentralBank.address,tokens('100'),{from:customer})
            await decentralBank.depositTokens(tokens('100'),{from:customer})

            result = await tether.balanceOf(customer)
            assert.equal(result.toString(), tokens('0'),'customer mock wallet balance after staking' )

            result = await tether.balanceOf(decentralBank.address)
            assert.equal(result.toString(), tokens('0'),'Decentral Bank mock wallet balance after staking' )
        })

    }) 

    
    
})