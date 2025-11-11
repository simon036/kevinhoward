import Header from '@/components/sections/header';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

export default function AboutFlyingCloud() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main className="max-w-[1170px] mx-auto px-[15px] py-[30px]">
        <div className="bg-white p-5 rounded-none shadow-none">
          <h1 className="text-3xl font-bold text-foreground mb-6">About Flying Cloud</h1>
          
          <div className="text-[14px] leading-[1.6] text-foreground space-y-6">
            <div className="text-center mb-6 bg-white p-6 rounded-lg shadow-sm border">
              <img
                src="http://www.kevinhowardcpa.com/Images/pfs.gif"
                alt="Personal Financial Specialist Logo"
                className="mx-auto mb-4 max-w-full h-auto"
                style={{ maxHeight: '120px' }}
              />
              <div className="text-center font-bold text-blue-900 space-y-1">
                <p className="text-xl">Flying Cloud</p>
                <p className="text-xl">Money Management, LLC</p>
                <p className="text-lg text-teal-600">Registered Investment Advisory Firm</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-2">Mission:</h3>
              <p className="mb-4">
                Our mission is to help you meet your financial goals as safely and expeditiously as possible. Flying Cloud Money Management (FCMM) is named after the famous 1851 clipper ship that sailed from New York to San Francisco around Cape Horn. Her mission was to deliver needed goods to the people of California. Despite tremendous obstacles, she not only completed her mission successfully, but also set a record for speed that still endures after 150 years. There are three key reasons for this success: first, the superior design and construction of the ship; second, the course that was carefully chosen for that particular voyage; and third, and perhaps most critical of all, the discipline and perseverance of the crew to keep the ship on course.
              </p>
              <p>
                Flying Cloud Money Management seeks to emulate this feat. First, our company is designed to put our clients' financial needs first. Since the only form of compensation we receive is from our clients, our only financial incentives come from them. We can work with a number of different custodians and brokerage firms, allowing us to matching our clients' needs to the best products available. Second, our detailed questionnaire and carefully prepared individual financial plans set the most appropriate course for each investor. Third, our discipline and adherence to these plans in both up and down markets helps our clients to reach their financial destination, and therefore to achieve their life goals, as swiftly and safely as possible.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-2">Philosophy:</h3>
              <p>
                Flying Cloud believes long-term success is determined not only by how much you make, but also by how much you do not lose. In down markets, we focus primarily on preserving assets, i.e., minimizing losses in asset value. The Flying Cloud Money Management philosophy results in increased commitment to the equities market when growth is taking place, and a greater emphasis on fixed income securities and money market funds in equity market downturns. This, combined with average to above average asset growth in up markets can provide substantially greater long-term returns while incurring less risk than most static stock mutual fund portfolios.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-2">Methodology:</h3>
              <p>
                Flying Cloud uses tried and proven asset allocation models to achieve our results. First, we examine our client's current financial circumstances, financial and personal goals, risk tolerance and other factors to determine the best mix of equities, fixed income, and cash to suit their needs. Among these asset classes, we look to invest in the sectors of the economy that we believe have the most growth potential. As more growth occurs in some asset classes and/or sectors than others, we rebalance the portfolio to maintain the appropriate mix. We can simultaneously help our clients fund multiple goals, such as education and retirement, through multiple accounts or custodians, which may have different asset allocations and time horizons.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-2">Portfolios:</h3>
              <p>
                Flying Cloud maintains five investment portfolios, ranging from very conservative to maximum growth. Each portfolio has an annual growth target. Of course, these target rates are not guaranteed. They do, however affect the ongoing allocation to equity, fixed income, and money market funds in each portfolio in light of the risk/reward profile unique to each investor. Each client account is managed within the parameters of one of these portfolios, depending on the Life Goal Rating of the investor.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-2">Fees:</h3>
              <p>
                For the first $500,000 of total assets under management, our fees are 0.625% with a prompt payment discount of 20%, which yields a net fee of 0.5% per quarter. Thus, on an annual basis, the fee is 2% of assets under management. For the portion of assets under management of $1,000,000 or more, the fee is reduced to 0.125% quarterly or 0.5% annually. For portions of asset amounts from $500,000 to $1,000,000, we offer several breakpoints. We combine household accounts to determine these discounts.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-2">Important Note:</h3>
              <p>
                Please read our Client Agreement and Form ADV carefully before investing. They contain full disclosure about our firm and its representatives, our fees, and other important information.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}