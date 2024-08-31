import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#000C1D] dark:bg-gray-dark">
      <div className="container mx-auto p-4">
        <Image
          src="/images/logo/logo.svg"
          width={140}
          height={30}
          alt="footer logo "
        />
      </div>
    </footer>
  );
};
export default Footer;
