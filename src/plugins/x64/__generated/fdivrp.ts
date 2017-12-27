import MnemonicX86 from '../../x86/MnemonicX86';
import MnemonicVariationsX86 from '../../x86/MnemonicVariationsX86';
import * as a from '../atoms';

const mnemonic_add_0 = new MnemonicX86;
mnemonic_add_0.opcode = 222;
mnemonic_add_0.operands = [[a.st], [st0]];

const mnemonic_add_1 = new MnemonicX86;
mnemonic_add_1.opcode = 222;
mnemonic_add_1.operands = [];

const x86_mnemonic_variations_fdivrp = new MnemonicVariationsX86([
    mnemonic_add_0,
    mnemonic_add_1,
]);
x86_mnemonic_variations_fdivrp.defaultOperandSize = 32;

export default x86_mnemonic_variations_fdivrp;
