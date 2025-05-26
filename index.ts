// 8. Omit

interface EncryptedPlatformKeys {
    rawNoSignature: Buffer;
    signature: Buffer;
    header: object;
    keySlotCount: number;
    keyCount: number;
    platformCertificateHash: Buffer;
    encryptedWrappingKey: Buffer;
    wrappedPlatformKeys: Buffer;
    securityProperties: number;
}
const partialEPK: Omit<EncryptedPlatformKeys, 'signature' | 'rawNoSignature'> = {
    header: {},
    keySlotCount: 1,
    keyCount: 1,
    platformCertificateHash: Buffer.from('abcdef', 'hex'),
    encryptedWrappingKey: Buffer.from('abcdef', 'hex'),
    wrappedPlatformKeys: Buffer.from('abcdef', 'hex'),
    securityProperties: 0x83,
};
const epk: EncryptedPlatformKeys = {
    ...partialEPK,
    rawNoSignature: Buffer.from('abcdef', 'hex'),
    signature: Buffer.from('abcdef', 'hex')
};
//more utility types: https://www.typescriptlang.org/docs/handbook/utility-types.html