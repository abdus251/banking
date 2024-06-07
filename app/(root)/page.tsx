import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox';

const Home = () => {
const loggedIn = { firstName: 'Abdus', lastName: 'Salam', email: 'abdus251@gmail.com' };
    
return (
    <section className='home'>
    <div className='home-content'>
        <header className='home-header'>
            <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'} 
            subtext="Access and manage your account and transactions efficiently."
            />

            <TotalBalanceBox 
                acounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.35}
                />
        </header>

        RECENT TRANSACTION
    </div>

    <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50 }, { currentBalance:500.50}]}
    />
    </section>
    
  )
}

export default Home;