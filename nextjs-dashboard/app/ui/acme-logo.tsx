import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <Image
      src="/dsh-logo.png"
      alt="Acme Logo"
      width={40} // Set a default width
      height={40} // Set a default height
      style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
    />
  );
}
