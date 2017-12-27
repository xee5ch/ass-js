import MnemonicX86 from '../../x86/MnemonicX86';
import MnemonicVariationsX86 from '../../x86/MnemonicVariationsX86';
import * as a from '../atoms';

const mnemonic_add_0 = new MnemonicX86;
mnemonic_add_0.opcode = 55795;
mnemonic_add_0.operands = [];

const x86_mnemonic_variations_fpatan = new MnemonicVariationsX86([
    mnemonic_add_0,
]);
x86_mnemonic_variations_fpatan.defaultOperandSize = 32;

export default x86_mnemonic_variations_fpatan;
