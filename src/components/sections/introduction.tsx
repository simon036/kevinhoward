import Image from 'next/image';

const Introduction = () => {
  return (
    <>
      <p className="mb-[15px] text-center">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/02902681-dea1-42c2-ade2-86f858d61c7c-kevinhowardcpa-com/assets/images/pfs-4.gif"
          alt="Personal Financial Specialist"
          width={169}
          height={63}
          className="inline-block"
        />
      </p>
      <p className="mb-[15px] text-[14px] leading-[1.6] text-foreground">
        Would you like one-on-one accounting, tax and financial advice from an experienced Certified Public Accountant who cares? Welcome to my practice.
        <br />
        <br />
        I offer a full range of accounting, tax, and small business consulting services at affordable fees. I am flexible. I am friendly. And perhaps most off all,{' '}
        <strong className="font-bold">I listen</strong>. Call me for a complimentary, no cost, no-obligation, initial consultation.
        <br />
        <br />
        <strong className="font-bold">Member:</strong> American Institute of CPA's (AICPA)
        <br />
        Maryland Association of CPA's (MACPA)
      </p>
    </>
  );
};

export default Introduction;